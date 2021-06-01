function get_answer(url){
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
if (xhr.status != 200) {
return 'При загрузке произошла ошибка. Статус ошибки: '+String(xhr.status);
} else {
return( xhr.responseText );
}
}
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}
if ($_GET['page'] && $_GET['page'] != '/'){
    document.getElementsByClassName('content')[0].style='display:flex;flex-direction:column;align-items:center;justify-content:center;';
    document.getElementsByClassName('content')[0].innerHTML = '<img src="/assets/images/loading.gif">';
    let trytoget = get_answer('https://resources.xn--e1agiyc.com/get_content.php?page='+$_GET['page']);
    if (trytoget){
				if ($_GET['page'] == '/content/'){
					trytoget+=`<style>.content p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    border: 2px solid lightgray;
    width: 100%;
    padding: 11px 10px;
    max-width: 400px;
}

.content h2 {
    flex-grow: 1;
}</style>`;
				}
				if ($_GET['page'] == '/catalog/Primeri-proektov/'){
					trytoget+=`<style>.MsoTableGrid {
    margin-bottom: 40px;
}

.MsoTableGrid td {
    border: none !important;
}

.MsoTableGrid {
    width: 100% !important;
}

.MsoTableGrid tbody tr {
    display: flex;
    overflow: auto;
    border: 2px solid lightgray;
    height: max-content !important;
    width: 100% !important;
}

.content > table > tbody > tr > td > .MsoNormal {
    display: none;
}

td .MsoNormal {
    max-width: 125px !important;
    width: 100% !important;
}

.MsoTableGrid > tbody > tr > td {
    width: calc(100% - 100px) !important;
}</style>`;
				}
        document.getElementsByClassName('content')[0].style= '';
        document.getElementsByClassName('content')[0].innerHTML = trytoget.replaceAll('"/', '"/?page=/').replaceAll('/?page=/img/', '/assets/images/').replaceAll('/?page=/design/telsi_shop/img/st.gif', '/assets/images/logo.png').replaceAll('http://telsi.ru/', '/?page=/');
    }
}else{
    let contents = `<div class="content__ur_otdel">
        Настоящий сайт является головным сайтом нашей компании  и содержит оглавление каталога предлагаемого нами оборудования и текущие новости компании.
        Представленное на сайте оборудование охватывает широкий перечень изделий, нашедших широкое применение на предприятиях и организациях самых разных секторов народного хозяйства нашей страны.
        Прежде всего, на сайте широко представлены системы вызова персонала и системы вызова посетителей  торговой марки «HostCall», системы вызова персонала торговой марки «GetСall», и специализированные системы диспетчерской связи торговой марки «GetСall». Эти системы были разработаны специалистами нашей компании, и мы их серийно выпускаем. В каталог включено оборудование, разработанное нами для программы ДОСТУПНАЯ СРЕДА. Наряду с этим представлены и другие системы и средства связи и коммуникаций: диспетчерской связи торговой марки «Регион», системы точного времени. 
    
        C оглавления каталога осуществляется автоматический переход на тематические сайты, на которых представлена подробная информация по всему перечню оборудования входящему в выше перечисленные системы. Сервис тематических сайтов дает возможность заказа оборудования, в том числе, с доставкой по России, выложена соответствующая эксплуатационная и нормативная документация, сертификаты, руководства по проектированию, примеры проектов, тематические статьи.
    </div>
    <div class="content__contacts_redirects">
        <div class="content__contacts__redirects__title">Информационная поддержка клиентов</div>
				<div class="content_contacts_content">
        <div class="block"><a href="http://www.telsi.ru"><img src="/assets/images/logo.png"><div class="out_text">ООО СКБ ТЕЛСИ</div><div class="show_text">Официальный сайт компании</div></a></div>

				<div class="block"><a href="http://www.hostcall.ru"><img src="/assets/images/hostcall.png"><div class="out_text">HOSTCALL</div><div class="show_text">Тематический сайт компании, посвященный оборудованию профессиональных систем вызова персонала и систем вызова пациентов торговой марки HOSTCALL</div></a></div>
    
				<div class="block"><a href="http://www.getcall.ru"><img src="/assets/images/getcall.gif"><div class="out_text">GETCALL</div><div class="show_text">Тематический сайт компании, посвященный оборудованию специализированных систем диспетчерской связи и переговорных устройств торговой марки GETCALL</div></a></div>

				<div class="block"><a href="http://www.multicall.ru"><img src="/assets/images/multicall.gif"><div class="out_text">Multicall</div><div class="show_text">Тематический сайт компании, посвященный оборудованию по программе ДОСТУПНАЯ СРЕДА</div></a></div>

				<div class="block"><a href="http://www.service-ats.ru"><img src="/assets/images/service-ats.png"><div class="out_text">Регион</div><div class="show_text">Тематический сайт компании посвященный системам оперативно-диспетчерской связи “Регион”</div></a></div>

				<div class="block"><a href="http://www.inter-m.name"><img src="/assets/images/inter-m.png"><div class="out_text">INTER-M</div><div class="show_text">Тематический сайт компании, посвященный системам громкого оповещения торговой марки "INTER-M"</div></a></div>

				<div class="block"><a href="http://www.sks-security.ru"><img src="/assets/images/sks-sec.png"><div class="out_text">SKS Security</div><div class="show_text">Тематический сайт компании, в основном посвященный техническим решениям вызова персонала в гостиницах и других средствах размещения</div></a></div>
				</div>
    </div>`;
    document.getElementsByClassName('content')[0].style= '';
    document.getElementsByClassName('content')[0].innerHTML = contents;
}