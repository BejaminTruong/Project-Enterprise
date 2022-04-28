import { getCsrfToken, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./signIn_signUp.module.css";
export default function SignIn({ csrfToken }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") return "You are already logged in";
  if (session) router.push("/");
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.body}>
          <form
            className={styles.form}
            method="post"
            action="/api/auth/callback/credentials"
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

            <h3>Log in</h3>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
