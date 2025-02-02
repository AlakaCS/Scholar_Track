<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (for development)

// Database configuration
$host = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "scholar_track";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch scholarships
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM Scholarships";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $scholarships = [];
        while ($row = $result->fetch_assoc()) {
            $Scholarships[] = $row;
        }
        echo json_encode($Scholarships);
    } else {
        echo json_encode([]);
    }
}

// Close connection
$conn->close();
?>