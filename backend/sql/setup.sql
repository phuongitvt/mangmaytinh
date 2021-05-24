CREATE DATABASE mmt_assignment;

CREATE TABLE Account (
     username VARCHAR(100) PRIMARY KEY,
     password VARCHAR(100) NOT NULL,
     name NVARCHAR(MAX)
);

INSERT INTO Account(username, password, name) VALUES ('dinhvt', '1234', N'Trần Văn Định');

CREATE TABLE PriceHistory(
     get_time DATETIME PRIMARY KEY DEFAULT GETDATE(),
     usd REAL NOT NULL,
     gbp REAL NOT NULL,
     eur REAL NOT NULL
);
