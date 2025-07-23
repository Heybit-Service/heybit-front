import EmptyLayout from "@/components/layout/emptyLayout";

const LoginLayout = ({
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

export default LoginLayout;