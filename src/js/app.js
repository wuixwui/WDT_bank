// ----------- USER -----------
const User1 = document.querySelector('.user1');

// ---------- BTN ----------
// 지출 관리 버튼
const spendingManage = document.querySelectorAll('.manage-page');
const spendingManageOpenBtn = document.querySelectorAll('.btn--spending');
const spendingManageCloseBtn = document.querySelectorAll(
  '.manage-page > button'
);
spendingManage.forEach((user, i) => {
  spendingManageOpenBtn[i].addEventListener('click', () => {
    if (user.classList.contains('close')) {
      user.classList.remove('close');
    }
  });
  spendingManageCloseBtn[i].addEventListener('click', () => {
    if (!user.classList.contains('close')) {
      user.classList.add('close');
    }
  });
});

// 상세 지출 페이지 높이
const cardContainer = document.querySelectorAll('.main-page .card-container');
const spendingDetail = document.querySelectorAll('.main-page .details');

// 광고의 유무에 따라 기본 디테일 위치가 달라짐.
spendingDetail.forEach((detail, i) => {
  detail.style.top = cardContainer[i].clientHeight;
});

// 상세 지출 페이지 버튼
const spendingDetailToggleBtn = document.querySelectorAll(
  '.main-page .details > button'
);
// 광고의 유무에 따라서 디테일 창 올라오는 높이가 달라짐
spendingDetailToggleBtn.forEach((detail, i) => {
  detail.addEventListener('click', () => {
    if (!detail.parentNode.style.transform) {
      detail.parentNode.style.transform = `translateY(-${cardContainer[i].clientHeight}px)`;
    } else {
      detail.parentNode.style.removeProperty('transform');
    }
  });
});
