//bang thong bao
  /*  alert ("Xin chào tiểu thư") */
  var thongbao = document.getElementById("thongbao");
        var backdrop = document.getElementById("backdrop");
        var dongy = document.getElementById("dongy");
        var khongdongy = document.getElementById("khongdongy");
        
        dongy.onclick = function() {
        document.cookie = "dongy=true"; //;expires= Mon, 01 Dec 2025 12:00:00 GMT
            thongbao.style.display = "none"; 
            backdrop.style.display = "none"; 
                    };
        
        khongdongy.onclick = function() {
            
    /*   document.write ("Hỏi chấm?????");*/

      window.close();
        };
        
        // Kiểm tra xem người dùng đã đồng ý hay chưa
        var cookieDongy = document.cookie.split(';').find(function(row) {
            return row.startsWith('dongy=');
        });
        if (cookieDongy) {
            thongbao.style.display = "none"; // Ẩn bảng thông báo
            backdrop.style.display = "none"; // Ẩn lớp nền mờ
            // Cho phép người dùng truy cập trang web
        } else {
            backdrop.style.display = "block"; // Hiển thị lớp nền mờ
        }

 //ip
   const ipEl = document.getElementById("ip");
const ispEl = document.getElementById("isp");
const countryEl = document.getElementById("country");
const cityEl = document.getElementById("city");
const latitudeEl = document.getElementById("latitude");
const longitudeEl = document.getElementById("longitude");
const timezoneEl = document.getElementById("timezone");

// Lấy thông tin IP
fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
        ipEl.textContent = `Địa chỉ IP: ${data.ip}`;
        return fetch(`https://ipinfo.io/${data.ip}/json`);
    })
    .then((response) => response.json())
    .then((data) => {
        ispEl.textContent = `Nhà cung cấp: ${data.isp}`;
        countryEl.textContent = `Quốc gia: ${data.country}`;
        cityEl.textContent = `Thành phố: ${data.city}`;
        latitudeEl.textContent = `Vĩ độ: ${data.latitude}`;
        longitudeEl.textContent = `Kinh độ: ${data.longitude}`;
        timezoneEl.textContent = `Múi giờ: ${data.timezone}`;
    });


  const checkip = document.querySelector('#ipc');
const muiTenXuong = document.querySelector('.mui-ten-xuong');

muiTenXuong.addEventListener('click', () => {
  checkip.classList.toggle('hidden');
});


//tool
const toggleButtons = document.querySelectorAll("[id^=toggle-tools]");
const toolsContainers = document.querySelectorAll("[id^=tools]");
const toggleDeltaButton = document.getElementById("toggle-delta");

let isMultiSelectionEnabled = false; // Flag to track multi-selection state

toggleDeltaButton.addEventListener("click", () => {
  isMultiSelectionEnabled = !isMultiSelectionEnabled;
  toggleDeltaButton.textContent = isMultiSelectionEnabled ? "╳" : "∆";
});

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const currentTools = toolsContainers[index];

        if (button.textContent === "✕") {
      currentTools.style.display = "none";
      button.textContent = "☰";
      return; // Exit this click handler to prevent further actions
    }

    if (isMultiSelectionEnabled) {
            currentTools.style.display = currentTools.style.display === "none" ? "block" : "none";
      button.textContent = currentTools.style.display === "block" ? "✕" : "☰";
    } else {
      // Multi-selection disabled, close all others, open clicked one
      toolsContainers.forEach((container) => {
        container.style.display = "none";
      });
      currentTools.style.display = currentTools.style.display === "none" ? "block" : "none";
      toggleButtons.forEach((otherButton) => {
        otherButton.textContent = "☰";
      });
      button.textContent = currentTools.style.display === "block" ? "✕" : "☰";
    }
  });
});

// Hiển thị/ẩn mục phụ khi click vào h4
const headings = document.querySelectorAll("h4");

headings.forEach(heading => {
  heading.addEventListener("click", function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});


const ulBq = document.querySelector('.ul-bq');
const muiTenLen = document.querySelector('.mui-ten-len');

muiTenLen.addEventListener('click', () => {
  ulBq.classList.toggle('hidden');
});


//video

/*const prevVideoBtn = document.getElementById("prev-video");
const nextVideoBtn = document.getElementById("next-video");
const videos = document.querySelectorAll(".video video");

let currentVideoIndex = 0;

prevVideoBtn.addEventListener("click", () => {
  if (currentVideoIndex > 0) {
    videos[currentVideoIndex].pause();
    videos[currentVideoIndex].style.display = "none";
    currentVideoIndex--;
    videos[currentVideoIndex].style.display = "block";
    videos[currentVideoIndex].play();
  }
});

nextVideoBtn.addEventListener("click", () => {
  if (currentVideoIndex < videos.length - 1) {
    videos[currentVideoIndex].pause();
    videos[currentVideoIndex].style.display = "none";
    currentVideoIndex++;
    videos[currentVideoIndex].style.display = "block";
    videos[currentVideoIndex].play();
  }
});
*/



 //thanh tim kiem   
    function handleSearch(formId) {
  const input = document.getElementById(`input-${formId}`);
  const searchEngine = document.getElementById(`search-engine-${formId}`);
  const submitButton = document.getElementById(`submit-${formId}`);


    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      const query = input.value.trim();
      if (query === "") {
        return;
      }
      
      const selectedEngine = searchEngine.value;
      let url = "";
      switch (selectedEngine) {
        case "duckduckgo":
          url = "https://duckduckgo.com/?q=" + query;
          break;
        case "google":
          url = "https://www.google.com/search?q=" + query;
          break;
        case "rule34":
           url = "https://www.rule34.xxx/index.php?page=post&s=list&tags=" + query; break;
         case "zerochan":        
         url = "https://www.zerochan.net/search?q=" + query;
          break;
              case "danbooru":        
         url = "https://danbooru.donmai.us/posts?tags=" + query;
          break;
          case "pixiv r18":
          url = "https://www.pixiv.net/en/tags/" + query + "/artworks?mode=r18";
          break;      
          case "pixiv":
          url = "https://www.pixiv.net/en/tags/" + query;
          break;
          case "wikipedia":
          url = "https://vi.m.wikipedia.org/wiki/" + query;
          break;
         case "bing":
          url = "https://www.bing.com/search?q=" + query;
          break;
          case "googlev":
          url = "https://transparencyreport.google.com/safe-browsing/search?url=" + query;
          break;
          case "yandere":
          url = "https://yande.re/post?tags=" + query;
          break;
      }
  
      window.location.href = url;
    });}


  handleSearch("search");
handleSearch("quet");