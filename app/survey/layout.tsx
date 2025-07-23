import TopHeaderLayout from "@/components/layout/topHeaderLayout";

const RegisterLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <TopHeaderLayout>
        {children}
    </TopHeaderLayout>
  )
}

export default RegisterLayout;