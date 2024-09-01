CREATE DATABASE ECAMPUS

USE ECAMPUS

CREATE TABLE STUDENTMASTER
(
  RollNo			VARCHAR(20) PRIMARY KEY,
  FirstName			VARCHAR(50),
  MiddleName		VARCHAR(50),
  LastName			VARCHAR(50),
  Gender			VARCHAR(1),
  DateofBirth		VARCHAR(15),
  BloodGroup		VARCHAR(3),
  FathersName		VARCHAR(50),
  MothersName		VARCHAR(50),
  ImageUrl			VARCHAR(100),
  Course			VARCHAR(100),
  Branch			VARCHAR(100),
  Session			VARCHAR(100),
  Hostel			VARCHAR(1),
  Transport			VARCHAR(1),
  MobileNo			VARCHAR(15),
  AlternateNo		VARCHAR(15),
  Email				VARCHAR(50),
  State				VARCHAR(50),
  City				VARCHAR(100),
  Pin				VARCHAR(10),
  CurrentAddress	VARCHAR(500),
  PermanentAddress	VARCHAR(500),
)

EXEC sp_rename 'STUDENTMASTER.StudentPic', 'ImageUrl', 'COLUMN'

SELECT * FROM STUDENTMASTER

DROP TABLE STUDENTMASTER


CREATE PROCEDURE dbo.PROC_SAVE_STUDENT_RECORD
(
  @RollNo			VARCHAR(20),
  @FirstName		VARCHAR(50),
  @MiddleName		VARCHAR(50),
  @LastName			VARCHAR(50),
  @Gender			VARCHAR(1),
  @DateofBirth		VARCHAR(15),
  @BloodGroup		VARCHAR(3),
  @FathersName		VARCHAR(50),
  @MothersName		VARCHAR(50),
  @ImageUrl			VARCHAR(100),
  @Course			VARCHAR(100),
  @Branch			VARCHAR(100),
  @Session			VARCHAR(100),
  @Hostel			VARCHAR(1),
  @Transport		VARCHAR(1),
  @MobileNo			VARCHAR(15),
  @AlternateNo		VARCHAR(15),
  @Email			VARCHAR(50),
  @State			VARCHAR(50),
  @City				VARCHAR(100),
  @PIN				VARCHAR(10),
  @CurrentAddress	VARCHAR(500),
  @PermanentAddress	VARCHAR(500)
)
AS
SET NOCOUNT ON
INSERT INTO STUDENTMASTER VALUES(@RollNo,@FirstName,@MiddleName,@LastName,@Gender,@DateofBirth,@BloodGroup,@FathersName,@MothersName,@ImageUrl,@Course,@Branch,@Session,@Hostel,@Transport,@MobileNo,@AlternateNo,@Email,@State,@City,@PIN,@CurrentAddress,@PermanentAddress)
RETURN



CREATE PROCEDURE dbo.PROC_UPDATE_STUDENT_RECORD
(
  @RollNo			VARCHAR(20),
  @FirstName		VARCHAR(50),
  @MiddleName		VARCHAR(50),
  @LastName			VARCHAR(50),
  @Gender			VARCHAR(1),
  @DateofBirth		VARCHAR(15),
  @BloodGroup		VARCHAR(3),
  @FathersName		VARCHAR(50),
  @MothersName		VARCHAR(50),
  @ImageUrl			VARCHAR(100),
  @Course			VARCHAR(100),
  @Branch			VARCHAR(100),
  @Session			VARCHAR(100),
  @Hostel			VARCHAR(1),
  @Transport		VARCHAR(1),
  @MobileNo			VARCHAR(15),
  @AlternateNo		VARCHAR(15),
  @Email			VARCHAR(50),
  @State			VARCHAR(50),
  @City				VARCHAR(100),
  @PIN				VARCHAR(10),
  @CurrentAddress	VARCHAR(500),
  @PermanentAddress	VARCHAR(500)
)
AS
SET NOCOUNT ON
UPDATE STUDENTMASTER
SET FirstName = @FirstName, MiddleName = @MiddleName, LastName = @LastName, Gender = @Gender,
DateofBirth = @DateofBirth, BloodGroup = @BloodGroup, FathersName= @FathersName, MothersName = @MothersName,
ImageUrl = @ImageUrl, Course = @Course, Branch = @Branch, Session = @Session, Hostel = @Hostel, Transport = @Transport,
MobileNo = @MobileNo, AlternateNo = @AlternateNo, Email = @Email, State = @State, City = @City, PIN = @PIN,
CurrentAddress = @CurrentAddress, PermanentAddress = @PermanentAddress
WHERE
RollNo = @RollNo
RETURN 



CREATE PROCEDURE dbo.PROC_GET_ALL_STUDENTS_RECORD
AS
SELECT * FROM STUDENTMASTER
RETURN

SELECT * FROM STUDENTMASTER


CREATE TABLE EMPLOYEEMASTER
(
  EmpID				INT IDENTITY() PRIMARY KEY,
  FirstName			VARCHAR(50),
  MiddleName		VARCHAR(50),
  LastName			VARCHAR(50),
  Gender			VARCHAR(1),
  DateofBirth		VARCHAR(15),
  BloodGroup		VARCHAR(3),
  FathersName		VARCHAR(50),
  MothersName		VARCHAR(50),
  ImageUrl			VARCHAR(100),
  Designation		VARCHAR(100),
  Department		VARCHAR(100),
  DateofJoining		VARCHAR(100),
  Qualification		VARCHAR(1),
  Experience		VARCHAR(1),
  PFNo				VARCHAR(25),
  PANNo				VARCHAR(15),
  IsHOD				VARCHAR(1),
  OrganizationName	VARCHAR(50),
  WorkingFrom		VARCHAR(15),
  WorkingTo			VARCHAR(15),
  LastSalaryDrawn	VARCHAR(7),
  ContactNo			VARCHAR(15),	
  Address			VARCHAR(500),
  MobileNo			VARCHAR(15),
  AlternateNo		VARCHAR(15),
  Email				VARCHAR(50),
  State				VARCHAR(50),
  City				VARCHAR(100),
  Pin				VARCHAR(10),
  CurrentAddress	VARCHAR(500),
  PermanentAddress	VARCHAR(500)
)

DROP TABLE EMPLOYEEMASTER

CREATE PROCEDURE dbo.PROC_SAVE_EMPLOYEE
(
  @EmpID			VARCHAR(20),
  @FirstName		VARCHAR(50),
  @MiddleName		VARCHAR(50),
  @LastName			VARCHAR(50),
  @Gender			VARCHAR(1),
  @DateofBirth		VARCHAR(15),
  @BloodGroup		VARCHAR(3),
  @FathersName		VARCHAR(50),
  @MothersName		VARCHAR(50),
  @ImageUrl			VARCHAR(100),
  @Designation		VARCHAR(100),
  @Department		VARCHAR(100),
  @DateofJoining	VARCHAR(100),
  @Qualification	VARCHAR(1),
  @Experience		VARCHAR(1),
  @PFNo				VARCHAR(25),
  @PANNo			VARCHAR(15),
  @IsHOD			VARCHAR(1),
  @OrganizationName	VARCHAR(50),
  @WorkingFrom		VARCHAR(15),
  @WorkingTo		VARCHAR(15),
  @LastSalaryDrawn	VARCHAR(7),
  @ContactNo		VARCHAR(15),	
  @Address			VARCHAR(500),
  @MobileNo			VARCHAR(15),
  @AlternateNo		VARCHAR(15),
  @Email			VARCHAR(50),
  @State			VARCHAR(50),
  @City				VARCHAR(100),
  @Pin				VARCHAR(10),
  @CurrentAddress	VARCHAR(500),
  @PermanentAddress	VARCHAR(500)
)
AS
SET NOCOUNT ON
INSERT INTO EMPLOYEEMASTER VALUES(@EmpID,@FirstName,@MiddleName,@LastName,@Gender,@DateofBirth,@BloodGroup,@ImageUrl,@FathersName,@MothersName,@Designation,@Department,@DateofJoining,@Qualification,@Experience,@PFNo,@PANNo,@IsHOD,@OrganizationName,@WorkingFrom,@WorkingTo,@LastSalaryDrawn,@ContactNo,@Address,@MobileNo,@AlternateNo,@Email,@State,@City,@PIN,@CurrentAddress,@PermanentAddress)
RETURN

SELECT * FROM EMPLOYEEMASTER


