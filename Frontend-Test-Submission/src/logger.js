// Logging Middleware/logger.js
export async function Log(stack, level, packageName, message) {
  const logData = {
    stack,
    level,
    package: packageName,
    message,
  };

  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhaml0aGFqb3RoaXJhakBnbWFpbC5jb20iLCJleHAiOjE3NTQxMTgzNTMsImlhdCI6MTc1NDExNzQ1MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImU4YTc2M2FlLWY4YzEtNDFlNy1iMzk4LWEzZDQyMmJhMTBkNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFqaXRoYSByIiwic3ViIjoiZDJiNGY2ZmMtMTU1Ny00YjU0LThlMGQtODI2NWY2ZDI1MzI5In0sImVtYWlsIjoiYWppdGhham90aGlyYWpAZ21haWwuY29tIiwibmFtZSI6ImFqaXRoYSByIiwicm9sbE5vIjoiOTIxMzIyMjMwMDkiLCJhY2Nlc3NDb2RlIjoickJQZlNTIiwiY2xpZW50SUQiOiJkMmI0ZjZmYy0xNTU3LTRiNTQtOGUwZC04MjY1ZjZkMjUzMjkiLCJjbGllbnRTZWNyZXQiOiJIRXFYU0JuZHV1RVRoVEFLIn0.p3bF_VfqPDdFgY1cdNx0A5JVK0DB_cVM3qCcl_iqDEs', // Replace with actual token if needed
      },
      body: JSON.stringify(logData),
    });

    const result = await response.json();
    console.log("Log Response:", result);
  } catch (error) {
    console.error("Logging Failed:", error);
  }
}
