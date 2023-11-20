# RBAC conditions determine which part of the resource content should be visible to the user.

export token=

--- chapter 1 ---

# Get list all roles:
curl -X GET "http://localhost:7007/api/permission/roles" -H "Content-Type: application/json" -H "Authorization: Bearer $token"

# Get list all permission policies for all roles
curl http://localhost:7007/api/permission/policies -H "Authorization: Bearer $token"



# List roles for specific user 
curl -X GET "http://localhost:7007/api/permission/roles?memberReferences=user:default/nemerna" -H "Content-Type: application/json" -H "Authorization: Bearer $token"




# Create new role: role:default/reader
curl -X POST "http://localhost:7007/api/permission/roles" -d '{ "memberReferences":  [ "user:default/nemerna" ], "name": "role:default/reader" }' -H "Content-Type: application/json" -H "Authorization: Bearer $token"

# check if Get created role role:default/reader
curl -X GET "http://localhost:7007/api/permission/roles/role/default/reader" -H "Content-Type: application/json" -H "Authorization: Bearer $token"

# create policy and assign to the role
curl -X POST "http://localhost:7007/api/permission/policies" -d '{"entityReference": "role:default/reader", "permission": "catalog-entity", "policy": "read", "effect":"allow"}' -H "Content-Type: application/json" -H "Authorization: Bearer $token"





### Delete role reader for user nemerna.
curl -X DELETE "http://localhost:7007/api/permission/roles/role/default/reader?memberReferences=user:default/nemerna" -H "Content-Type: application/json" -H "Authorization: Bearer $token" -v

