function calculate(cat_name,id,cal,alb,fat,carb,it,total)
{el=document.getElementById(cat_name+''+id);m=0;b=0;j=0;u=0;k=0;m=toDot(el.value);if(m==''){m=0;}
if(1||pattern.test(m)){b=m*alb;j=m*fat;u=m*carb;k=m*cal;showResult(cat_name,id,b,j,u,k,it,total,m);}}
function showResult(cat_name,id,b,j,u,k,it,total,m)
{rb=document.getElementById('b'+cat_name+''+id);rj=document.getElementById('j'+cat_name+''+id);ru=document.getElementById('u'+cat_name+''+id);rk=document.getElementById('k'+cat_name+''+id);rb.getElementsByTagName('span')[0].innerHTML=m?b.toFixed(2):'';rj.getElementsByTagName('span')[0].innerHTML=m?j.toFixed(2):'';ru.getElementsByTagName('span')[0].innerHTML=m?u.toFixed(2):'';rk.getElementsByTagName('div')[0].innerHTML=m?k.toFixed(2):'';document.getElementById('bh'+cat_name+''+id).value=m?b.toFixed(2):'';document.getElementById('jh'+cat_name+''+id).value=m?j.toFixed(2):'';document.getElementById('uh'+cat_name+''+id).value=m?u.toFixed(2):'';document.getElementById('kh'+cat_name+''+id).value=m?k.toFixed(2):'';sumCat(it,total,cat_name);}
function sumCat(it,total,cat)
{if(total>0)
{crm[it]=0;crb[it]=0;crj[it]=0;cru[it]=0;crk[it]=0;for(i=1;i<=total;i++)
{rb=document.getElementById('b'+cat+''+it+''+i);rj=document.getElementById('j'+cat+''+it+''+i);ru=document.getElementById('u'+cat+''+it+''+i);rk=document.getElementById('k'+cat+''+it+''+i);rm=document.getElementById(cat+''+it+''+i);mass=toDot((rm.value))*1;if(pattern.test(mass)){crm[it]+=toDot((rm.value))*1;crb[it]+=(rb.getElementsByTagName('span')[0].innerHTML)*1;crj[it]+=(rj.getElementsByTagName('span')[0].innerHTML)*1;cru[it]+=(ru.getElementsByTagName('span')[0].innerHTML)*1;crk[it]+=(rk.getElementsByTagName('div')[0].innerHTML)*1;}}
resm=document.getElementById('res_m'+it);resb=document.getElementById('res_b'+it);resj=document.getElementById('res_j'+it);resu=document.getElementById('res_u'+it);resk=document.getElementById('res_k'+it);resm.getElementsByTagName('span')[0].innerHTML=crm[it]?crm[it].toFixed(2):'';resb.getElementsByTagName('span')[0].innerHTML=crb[it]?crb[it].toFixed(2):'';resj.getElementsByTagName('span')[0].innerHTML=crj[it]?crj[it].toFixed(2):'';resu.getElementsByTagName('span')[0].innerHTML=cru[it]?cru[it].toFixed(2):'';resk.getElementsByTagName('div')[0].innerHTML=crk[it]?crk[it].toFixed(2):'';document.getElementById('rmh'+it).value=crm[it]?crm[it].toFixed(2):'';document.getElementById('rbh'+it).value=crb[it]?crb[it].toFixed(2):'';document.getElementById('rjh'+it).value=crj[it]?crj[it].toFixed(2):'';document.getElementById('ruh'+it).value=cru[it]?cru[it].toFixed(2):'';document.getElementById('rkh'+it).value=crk[it]?crk[it].toFixed(2):'';}
sumAll();}
function sumAll()
{arm=0;arb=0;arj=0;aru=0;ark=0;res_am=document.getElementById('res_all_m');res_ab=document.getElementById('res_all_b');res_aj=document.getElementById('res_all_j');res_au=document.getElementById('res_all_u');res_ak=document.getElementById('res_all_k');for(i=1;i<=crm.length;i++)
{if(typeof crm[i]!='undefined')arm+=crm[i];if(typeof crb[i]!='undefined')arb+=crb[i];if(typeof crj[i]!='undefined')arj+=crj[i];if(typeof cru[i]!='undefined')aru+=cru[i];if(typeof crk[i]!='undefined')ark+=crk[i];}
res_am.innerHTML=arm?arm.toFixed(2):'';res_ab.innerHTML=arb?arb.toFixed(2):'';res_aj.innerHTML=arj?arj.toFixed(2):'';res_au.innerHTML=aru?aru.toFixed(2):'';res_ak.getElementsByTagName('div')[0].innerHTML=ark?ark.toFixed(2):'';document.getElementById('arm').value=arm?arm.toFixed(2):'';document.getElementById('arb').value=arb?arb.toFixed(2):'';document.getElementById('arj').value=aru?aru.toFixed(2):'';document.getElementById('aru').value=arj?arj.toFixed(2):'';document.getElementById('ark').value=ark?ark.toFixed(2):'';}
function close_slide(id,tid,tt)
{$('#'+id).slideToggle('slow');$(tid).toggleClass('calories_h2_table1');$('#'+tt).toggleClass('calories_total');}
function clear_calc(id)
{document.getElementById(id).reset();$("td > span").text(' ');$("td.red > div").text(' ');$("td > div.clr").text(' ');$("td > div.blood_total").text(' ');$("td.clr1 > div").text(' ');}
function toDot(str){return str.replace(',','.');}

var crm = new Array();
var crb = new Array();
var crj = new Array();
var cru = new Array();
var crk = new Array();
var pattern = /[^a-zA-Z\s_$]+/;