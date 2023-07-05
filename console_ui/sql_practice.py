import psycopg2
from psycopg2 import sql

conn = psycopg2.connect(
    host='localhost',
    dbname='library',
    user='user_name',
    password='****',
)

cur = conn.cursor()

# -- make test_table --
# cur.execute('''
#     CREATE TABLE test_table (id SERIAL PRIMARY KEY, name VARCHAR(50))
# ''')
# conn.commit()

# -- added data in test_table --
# cur.execute("INSERT INTO test_table (name) VALUES (%s)", ("Test Name",))
# conn.commit()

cur.execute("UPDATE test_table SET name = 'Change' WHERE id = 1")
conn.commit()

cur.execute('SELECT * FROM test_table')
rows = cur.fetchall()

for row in rows:
    print(row)

cur.close()
conn.close()
