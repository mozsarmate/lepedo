ALL MWs
- render

- calculate stat
- calculate table

- getUsersMW
- getUserMW
- saveUserMW
- delUserMW
- 
- getExpensesMW
- getExpenseMW
- saveExpenseMW
- delExpenseMW
- 
- getTransfersMW
- getTransferMW
- saveTransferMW
- delTransferMW
 

______________________
 
 

- GET    /.., /summary
    - get all data
    - calculate table
    - calculate stat
    - render

- GET    /list
    - get all data
    - calculate stat
    - render

- GET    /add_user
- POST   /add_user
    - check data MW
    - save new MW
    - redirect to /summary

- GET    /add_expense
    - get user data for tags
- POST   /add_expense
    - check data MW
    - save new MW
    - redirect to /list

- GET    /add_transfer
    - get user data for tags
- POST   /add_transfer
    - check data MW
    - save new MW
    - redirect to /list

- GET    /edit_user
    - get user data MW
    - render add html but with data

- GET    /edit_expense
    - same

- GET    /edit_transfer
    - same

- GET    /delete_user
    - xx check if we actually have the data MW
    - delete MW
    - redirect to /

- GET    /delete_expense
    - xx check if we actually have the data MW
    - delete MW
    - redirect to /

- GET    /delete_transfer
    - xx check if we actually have the data MW
    - delete MW
    - redirect to /