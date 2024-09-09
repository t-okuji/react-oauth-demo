import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function GoogleCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const KEY = `${
    import.meta.env.VITE_API_URL
  }/auth/google_auth/callback?code=${code}`;
  const query = useQuery({ queryKey: [KEY], queryFn: () => fetch(KEY) });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (query.isSuccess) {
      navigate("/me", { replace: true });
    }
  }, [query.isSuccess]);

  if (query.isLoading) {
    return <div>Google Callback Handling...</div>;
  }
}

export default GoogleCallback;
