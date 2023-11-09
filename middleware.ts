import { WithAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
    matcher: ["/chat","/chat/:id*","/register"]
};