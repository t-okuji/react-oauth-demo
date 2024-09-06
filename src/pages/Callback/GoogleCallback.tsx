import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function GoogleCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (code) {
      const getInfo = async () => {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/auth/google_auth/callback?code=${code}`,
        );
        if (!response.ok) {
          throw new Error("API Error");
        }
        const result = await response.json();
        navigate("/me");
      };

      getInfo();
    }
  }, []);

  return <div>Google Callback Handling...</div>;
}

export default GoogleCallback;
