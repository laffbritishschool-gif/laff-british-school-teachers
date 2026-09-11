# Laff British Montessori School — Teacher Portal

Teacher portal for secure result entry and submission.

## Teacher authentication

Teachers do **not** receive passwords from the administrator and administrators do not create duplicate Auth accounts.

1. Admin creates/keeps the teacher record with the teacher's school email.
2. Teacher opens **First-time setup** in the Teacher Portal.
3. Teacher enters the registered school email.
4. Supabase sends a one-time verification code to that email.
5. Teacher enters the code and immediately creates their own password.
6. The existing `teachers` record is linked to the authenticated account.
7. The teacher can then sign in normally with school email + password.

Existing teacher records are preserved. Their class/subject assignments remain attached to the same teacher record.

## Security

The browser contains only the Supabase publishable key. Privileged service-role credentials stay inside Supabase Edge Functions. Teacher result access is enforced by Supabase Auth and Row Level Security; the UI is not the security boundary.
