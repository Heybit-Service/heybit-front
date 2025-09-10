export interface ImpulseData {
  summary: {
    primaryDay: string
    primaryTime: string
    totalCount: number
  }
  weeklyPattern: {
    day: string
    count: number
  }[]
  timePattern: {
    period: string
    timeRange: string
    count: number
  }[]
  config?: {
    colorVariant?: "primary" | "secondary" | "success" | "warning" | "danger"
    showAnimation?: boolean
    customColors?: {
      line?: string
      point?: string
      text?: string
    }
  }
}

export interface ApiImpulseResponse {
  user_id: string
  period: string
  summary: {
    primary_day: string
    primary_time: string
    total_impulse_count: number
  }
  weekly_data: Array<{
    day_of_week: string
    impulse_count: number
  }>
  hourly_data: Array<{
    time_period: string
    time_range: string
    impulse_count: number
  }>
}

export const transformApiData = (apiData: ApiImpulseResponse): ImpulseData => {
  return {
    summary: {
      primaryDay: apiData.summary.primary_day,
      primaryTime: apiData.summary.primary_time,
      totalCount: apiData.summary.total_impulse_count,
    },
    weeklyPattern: apiData.weekly_data.map((item) => ({
      day: item.day_of_week,
      count: item.impulse_count,
    })),
    timePattern: apiData.hourly_data.map((item) => ({
      period: item.time_period,
      timeRange: item.time_range,
      count: item.impulse_count,
    })),
  }
}
