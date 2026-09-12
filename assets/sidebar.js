(function(){
  const links=[
    ['dashboard','Dashboard','index.html','▦'],
    ['results','Enter Results','results.html','▤'],
    ['classes','My Classes & Subjects','index.html#assignments','▣'],
    ['timetable','My Timetable','timetable.html','▦'],
    ['attendance','Attendance','attendance.html','✓'],
    ['announcements','Announcements','announcements.html','◉'],
    ['profile','My Profile','profile.html','♙']
  ];
  function setup(){
    const nav=document.querySelector('.sidebar nav, .side nav');
    if(!nav)return;
    const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    nav.innerHTML=links.map(([key,label,href,ico])=>`<a class="nav-link ${current===href?'active':''}" href="${href}"><span class="nav-icon">${ico}</span><span>${label}</span></a>`).join('')+'<a class="nav-link" href="#" id="teacherSignout"><span class="nav-icon">↪</span><span>Sign Out</span></a>';
    const signout=document.getElementById('teacherSignout');
    if(signout)signout.onclick=async e=>{e.preventDefault();try{await db.auth.signOut()}finally{location.href='login.html'}};
    const brand=document.querySelector('.brand');if(brand)brand.classList.add('teacher-brand');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();
