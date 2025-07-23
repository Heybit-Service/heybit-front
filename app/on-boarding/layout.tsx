import EmptyLayout from "@/components/layout/emptyLayout";

const OnboardingLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <EmptyLayout>
        {children}
    </EmptyLayout>
  )
}

export default OnboardingLayout;