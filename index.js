// จำลองข้อมูลบัญชีผู้ใช้
const users = [
  {
    username: "admin",
    password: "123456"  // ❗ ไม่ควรทำแบบนี้จริง ๆ
  },
  {
    username: "user",
    password: "password"
  }
];

function login(event) {
  event.preventDefault(); // ป้องกันการ reload หน้า

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // ตรวจสอบว่ามีบัญชีที่ตรงหรือไม่
  const matchedUser = users.find(
    user => user.username === usernameInput && user.password === passwordInput
  );

  if (matchedUser) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "C:/Users/Tack/OneDrive - KASETSART UNIVERSITY/Desktop/jaroonrat/1/Overview/Overview.html"; 
    // redirect หรือทำอย่างอื่นต่อได้ที่นี่
  } else {
    alert("Invalid username or password.");
  }

  return false;
}

// alert("ข้อความที่แสดง");
