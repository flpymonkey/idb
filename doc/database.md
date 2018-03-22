# Creating and accessing the database

Our database is set up with PostgreSQL 9.6.6 on the Amazon RDB service.
We access the contents of our database using sqlalchemy. This allows us to
retrieve data from our database to serve to our API endpoints.

Tools we use for our database and data retrieval:

1. **PostgreSQL** - The SQL based database engine we use on our Amazon Relational
Database Service instance.

2. **sqlalchemy** - A Python library we use to perform queries on the database and
retrieve data to serve to our API endpoints.
