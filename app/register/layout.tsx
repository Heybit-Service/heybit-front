import EmptyLayout from "@/components/layout/emptyLayout";

const RegisterLayout = ({
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

export default RegisterLayout;