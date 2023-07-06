// 초기 로그인 폼 이벤트 핸들러
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 사용자 이름과 비밀번호 가져오기
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
  
    // 로그인 로직
    function login(username, password) {
    // 서버에 로그인 요청을 보내고 인증을 처리합니다.
    // 실제 구현은 AJAX, Fetch API, 또는 라이브러리를 사용하여 서버와 통신하는 방법으로 이루어집니다.
    // 예를 들어, 사용자 이름과 비밀번호를 서버에 전달하여 인증 결과를 받아올 수 있습니다.
    
        // 로그인 성공 시 처리
        if (인증이_성공했는지) {
        // 로그인 성공 후 작업을 수행합니다.
        // 예를 들어, 로그인 상태를 유지하기 위해 세션 정보를 저장하거나 특정 페이지로 이동하는 등의 작업을 수행합니다.
        // 아래는 예시로 "안녕 페이지로 이동 중..." 메시지를 표시하고 2초 후에 "hello.html"로 페이지 이동하는 코드입니다.
            showMessage('로그인 성공! 사용자의 페이지로 이동 중...');
            setTimeout(function() {
                window.location.href = 'user.html';
            }, 2000);
        } else {
        // 로그인 실패 시 처리
            showMessage('로그인 실패! 사용자 이름 또는 비밀번호를 확인하세요.');
        }
    }
  });
  
  // 회원가입 버튼 클릭 이벤트 핸들러
  document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    // 회원가입 창 표시
    document.getElementById('signupModal').style.display = 'block';
  });
  
  // 회원가입 폼 이벤트 핸들러
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 사용자 이름과 비밀번호 가져오기
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
  
    // 회원가입 로직 (예시)
    // 이곳에 실제 회원가입 코드를 작성해야 합니다.
  
    // 결과 메시지 표시
    showMessage('Join Complete.');
  
    // 회원가입 창 닫기
    document.getElementById('signupModal').style.display = 'none';
  });
  
  // 회원가입 창 닫기 버튼 클릭 이벤트 핸들러
  document.getElementById('closeSignupButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    // 회원가입 창 닫기
    document.getElementById('signupModal').style.display = 'none';
  });
  
  // 결과 메시지 표시 함수
  function showMessage(message) {
    document.getElementById('message').textContent = message;
  }
  
