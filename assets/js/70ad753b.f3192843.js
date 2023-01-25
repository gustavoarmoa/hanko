"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[793],{8943:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-1.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"version":"0.3.0","title":"Hanko Admin API","description":"## Introduction\\n\\nThis is the OpenAPI specification for the [Hanko Admin API](https://github.com/teamhanko/hanko/blob/main/backend/README.md#start-private-api).\\n\\n## Authentication\\n\\nThe Admin API must be protected by an access management system.\\n\\n---\\n","contact":{"email":"developers@hanko.io"},"license":{"name":"AGPL-3.0-or-later","url":"https://www.gnu.org/licenses/agpl-3.0.txt"}},"externalDocs":{"description":"More about Hanko","url":"https://github.com/teamhanko/hanko"},"servers":[{"url":"localhost:3000"}],"paths":{"/users":{"get":{"summary":"Get a list of users","operationId":"listUsers","tags":["User Management"],"responses":{"200":{"description":"Details about users","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/User"}}}},"headers":{"X-Total-Count":{"schema":{"$ref":"#/components/headers/X-Total-Count"}},"Link":{"schema":{"$ref":"#/components/headers/Link"}}}},"500":{"$ref":"#/components/responses/InternalServerError"}}}},"/users/{id}":{"delete":{"summary":"Delete a user by ID","operationId":"deleteUser","tags":["User Management"],"parameters":[{"name":"id","in":"path","description":"ID of the user","required":true,"schema":{"$ref":"#/components/schemas/UUID4"}}],"responses":{"204":{"description":"Deleted"},"404":{"$ref":"#/components/responses/NotFound"},"500":{"$ref":"#/components/responses/InternalServerError"}}}},"/audit_logs":{"get":{"summary":"Get a list of audit logs","operationId":"listAuditLogs","tags":["Audit Logs"],"parameters":[{"in":"query","name":"page","schema":{"type":"integer","default":1},"description":"The page which should be returned"},{"in":"query","name":"per_page","schema":{"type":"integer","default":20},"description":"The number of returned items"},{"in":"query","name":"start_time","schema":{"type":"string","example":"2022-09-12T12:48:48Z"},"description":"Date and time from which the logs are included"},{"in":"query","name":"end_time","schema":{"type":"string","example":"2022-09-15T12:48:48Z"},"description":"Date and time to which the logs are included"},{"in":"query","name":"actor_user_id","schema":{"allOf":[{"$ref":"#/components/schemas/UUID4"}],"example":"c339547d-e17d-4ba7-8a1d-b3d5a4d17c1c"},"description":"Only audit logs with the specified user_id are included"},{"in":"query","name":"actor_email","schema":{"type":"string","format":"email","example":"example@example.com"},"description":"Only audit logs with the specified email are included"},{"in":"query","name":"meta_source_ip","schema":{"allOf":[{"type":"string","format":"ipv4"},{"type":"string","format":"ipv6"}],"example":"127.0.0.1"},"description":"Only audit logs with the specified ip address are included"},{"in":"query","name":"q","schema":{"type":"string","example":"example.com"},"description":"Only audit logs are included when the search string matches values in meta_source_ip or actor_user_id or actor_email"},{"in":"query","name":"type","schema":{"type":"array","items":{"allOf":[{"$ref":"#/components/schemas/AuditLogTypes"}]},"example":"user_created"},"style":"form","explode":true,"description":"Only audit logs with the specified type are included"}],"responses":{"200":{"description":"Details about audit logs","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AuditLog"}}}},"headers":{"X-Total-Count":{"schema":{"$ref":"#/components/headers/X-Total-Count"}},"Link":{"schema":{"$ref":"#/components/headers/Link"}}}},"500":{"$ref":"#/components/responses/InternalServerError"}}}}},"components":{"responses":{"BadRequest":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"},"example":{"code":400,"message":"Bad Request"}}}},"InternalServerError":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"},"example":{"code":500,"message":"Internal Server Error"}}}},"NotFound":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"},"example":{"code":404,"message":"Not found"}}}}},"schemas":{"User":{"type":"object","properties":{"id":{"description":"The ID of the user","allOf":[{"$ref":"#/components/schemas/UUID4"}]},"email":{"description":"The email address of the user","type":"string","format":"email"},"created_at":{"description":"Time of creation of the the user","type":"string","format":"date-time"},"updated_at":{"description":"Time of last update of the user","type":"string","format":"date-time"},"verified":{"description":"Indicates whether the user\'s email address was verified","type":"boolean"},"webauthn_credentials":{"description":"List of registered Webauthn credentials","type":"array","items":{"type":"object","properties":{"id":{"description":"The ID of the Webauthn credential","type":"string","format":"base64url","example":"Meprtysj5ZZrTlg0qiLbsZ168OtQMeGVAikVy2n1hvvG..."}}}}}},"AuditLog":{"type":"object","required":["id","type","meta_http_request_id","meta_source_ip","meta_user_agent","created_at","updated_at"],"properties":{"id":{"description":"The ID of the audit log","allOf":[{"$ref":"#/components/schemas/UUID4"}]},"type":{"allOf":[{"$ref":"#/components/schemas/AuditLogTypes"}]},"error":{"description":"A more detailed message why something failed","type":"string"},"meta_http_request_id":{"description":"The ID of the corresponding http request","type":"string","example":"0a2xsrhlhiQv49FIpq8KV8uQVq6ky9Bw"},"meta_source_ip":{"description":"The IP from where the http request came from","type":"string","format":"ip-address","example":"172.27.0.1"},"meta_user_agent":{"description":"The user agent from where the http request came from","type":"string"},"actor_user_id":{"description":"The userID from the actor","allOf":[{"$ref":"#/components/schemas/UUID4"}]},"actor_email":{"description":"The email from the actor","type":"string","format":"email"},"created_at":{"description":"Time of creation of the the audit log","type":"string","format":"date-time","example":"2022-09-14T12:15:09.788784Z"},"updated_at":{"description":"Time of last update of the audit log","type":"string","format":"date-time","example":"2022-09-14T12:15:09.788784Z"}}},"UUID4":{"type":"string","format":"uuid4","example":"c339547d-e17d-4ba7-8a1d-b3d5a4d17c1c"},"Error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}},"AuditLogTypes":{"description":"The type of the audit log","type":"string","enum":["user_created","password_set_succeeded","password_set_failed","password_login_succeeded","password_login_failed","passcode_login_init_succeeded","passcode_login_init_failed","passcode_login_final_succeeded","passcode_login_final_failed","webauthn_registration_init_succeeded","webauthn_registration_init_failed","webauthn_registration_final_succeeded","webauthn_registration_final_failed","webauthn_authentication_init_succeeded","webauthn_authentication_init_failed","webauthn_authentication_final_succeeded","webauthn_authentication_final_failed"]}},"headers":{"X-Total-Count":{"schema":{"type":"string"},"description":"The total count of the requested resource considering query parameter","example":1234},"Link":{"schema":{"type":"string"},"description":"Web Linking as described in RFC5988","example":"<http://localhost:8001/resource?page=1&per_page=10>; rel=\\"first\\",<http://localhost:8001/resource?page=16&per_page=10>; rel=\\"last\\",<http://localhost:8001/resource?page=6&per_page=10>; rel=\\"next\\",<http://localhost:8001/resource?page=4&per_page=10>; rel=\\"prev\\""}}}}}')}}]);