-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS scholarship_db;
USE scholarship_db;

-- Create the Scholarships table
CREATE TABLE IF NOT EXISTS Scholarships (
    sch_ID INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID for each scholarship
    sname VARCHAR(70) NOT NULL, -- Name of the scholarship
    sdate DATE NOT NULL, -- Start date of the scholarship
    ldate DATE NOT NULL, -- Last date to apply
    eligibility VARCHAR(300) NOT NULL -- Eligibility criteria
);

-- Insert Data into the Scholarships table
INSERT INTO Scholarships (sname, sdate, ldate, eligibility) 
VALUES
('Tata Realty Scholarship', '2024-07-01', '2024-08-01', 'Girls Pursuing 1st year B.E/B.Tech'),
('ONGC Scholarship', '2024-07-10', '2024-08-15', 'Scholarship for OBC students'),
('E-Grantz Scholarship', '2024-08-05', '2024-09-10', 'Students from SC, ST, and OBC communities in Kerala'),
('E.K Nayanar Scholarship', '2024-04-01', '2024-05-30', 'Annual income should not exceed 2 lakh & mark in +2 examination should be 80% or above');

-- Fetch data to verify
SELECT * FROM Scholarships;