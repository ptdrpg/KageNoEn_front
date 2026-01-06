  import { Navigate } from "react-router";
  import { useGetSession } from "~/query/AUTH/auth.query"


  const AUTHGuard = ({children }: {children: React.ReactNode }) => {
    const session = useGetSession();
    if (!session.data?.connection) {
      return <Navigate to="/login" />
    }
    return children
  }

  export default AUTHGuard