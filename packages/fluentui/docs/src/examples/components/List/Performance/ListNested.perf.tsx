import { List } from '@fluentui/react';
import * as React from 'react';

const items = [
  {
    key: 'item-0',
    media: 'ecd4:f115:0db5:e490:4680:e0bb:ed31:ef38',
    header: 'Golden19',
    headerMedia: '2/11/2019',
    content: 'Veritatis labore tenetur eius similique voluptatem qui labore consequuntur eaque.',
    contentMedia: 'Molestiae modi qui ipsam odio unde praesentium.'
  },
  {
    key: 'item-1',
    media: '812d:173e:02c2:3c33:d0a8:d86c:327b:4356',
    header: 'Christine.Feeney',
    headerMedia: '3/8/2019',
    content: 'Sequi voluptas corporis vel deleniti exercitationem ipsam rem hic.',
    contentMedia: 'Nulla quae minima.'
  },
  {
    key: 'item-2',
    media: '2f5e:5dab:e88c:b583:b512:b2c3:ecf6:f860',
    header: 'Amaya.Ritchie',
    headerMedia: '6/22/2019',
    content: 'Neque nobis totam rerum.',
    contentMedia: 'Aut tempora eaque rem blanditiis.'
  },
  {
    key: 'item-3',
    media: 'b072:ad2d:9ee1:f790:5e46:7b8c:75d1:4140',
    header: 'Cora.Rippin22',
    headerMedia: '7/13/2019',
    content: 'Alias error tempore dolorem laudantium sapiente.',
    contentMedia: 'Quis ducimus explicabo quia quia rerum dolor deserunt unde.'
  },
  {
    key: 'item-4',
    media: '9fbb:5c11:582f:e8dd:4e79:f56a:0acb:6bf9',
    header: 'Melyssa_Walker3',
    headerMedia: '9/26/2019',
    content: 'Eum quo non eum repellendus facere sint.',
    contentMedia: 'Fuga explicabo et ad labore voluptas voluptatibus et perspiciatis.'
  },
  {
    key: 'item-5',
    media: 'a6ba:8322:b8e2:98ad:f86d:9e87:6322:4058',
    header: 'Martina.Cronin',
    headerMedia: '11/27/2019',
    content: 'Dolorem eveniet dolores repellat officia temporibus sequi.',
    contentMedia: 'Odio commodi laborum nobis quia.'
  },
  {
    key: 'item-6',
    media: '5fcd:fa53:c6f1:3bc0:9add:2fd4:d01d:4bf7',
    header: 'Trinity16',
    headerMedia: '1/16/2020',
    content: 'Debitis culpa sit consequatur corrupti.',
    contentMedia: 'Vero placeat id.'
  },
  {
    key: 'item-7',
    media: 'f5fe:4259:50e5:72cd:67b3:650b:27c8:5ebc',
    header: 'Emmet14',
    headerMedia: '5/10/2019',
    content: 'Ratione omnis nesciunt repellendus voluptatem aut sint amet voluptatem.',
    contentMedia: 'Enim aliquam error quaerat.'
  },
  {
    key: 'item-8',
    media: 'fd29:194a:d44c:dfc0:fce1:bc6c:a75c:c873',
    header: 'Chet87',
    headerMedia: '7/30/2019',
    content: 'Dolor dolor inventore illum eum nulla.',
    contentMedia: 'Ut debitis aut.'
  },
  {
    key: 'item-9',
    media: '3f6c:62fe:deea:e526:e242:4e79:0883:8eb3',
    header: 'Horacio39',
    headerMedia: '5/6/2019',
    content: 'Laborum fugit ut debitis voluptatum enim ea voluptas quas fugiat.',
    contentMedia: 'Sint minus ut.'
  },
  {
    key: 'item-10',
    media: '5b44:9c9d:bb62:50a9:77b0:3a61:a133:818c',
    header: 'Aletha.Heaney28',
    headerMedia: '7/12/2019',
    content: 'Magnam velit et quo.',
    contentMedia: 'Distinctio delectus modi et.'
  },
  {
    key: 'item-11',
    media: '922b:68b1:432b:1c11:6734:e7de:baf6:d202',
    header: 'Lempi85',
    headerMedia: '6/3/2019',
    content: 'Consequatur pariatur vel.',
    contentMedia: 'Quis quibusdam at repellendus vero fuga accusamus atque provident aperiam.'
  },
  {
    key: 'item-12',
    media: '9c88:6bcf:1534:d98b:9dfa:170e:0fe4:6f99',
    header: 'Dayton19',
    headerMedia: '9/9/2019',
    content: 'Tempora sint corrupti.',
    contentMedia: 'Ea est id aut facilis ex possimus.'
  },
  {
    key: 'item-13',
    media: '931c:709c:7c0c:4142:8cb5:1e7d:a205:5ce5',
    header: 'Jerel_Dooley95',
    headerMedia: '4/7/2019',
    content: 'Ullam nostrum est et necessitatibus possimus distinctio dolorum impedit dolor.',
    contentMedia: 'Vitae tempore minima dolores tempora ea.'
  },
  {
    key: 'item-14',
    media: '6309:59b2:6fed:d765:077b:94fa:e22d:2a6a',
    header: 'Tate.Kuhic',
    headerMedia: '8/8/2019',
    content: 'In rerum molestiae.',
    contentMedia: 'Omnis voluptate nesciunt voluptatem.'
  },
  {
    key: 'item-15',
    media: 'a1b3:9bf4:3b64:4e8f:6a21:16c3:d208:551d',
    header: 'Rosalee56',
    headerMedia: '11/19/2019',
    content: 'Mollitia quia saepe ut nihil et iure expedita repellendus.',
    contentMedia: 'Consequuntur ea quia recusandae ratione.'
  },
  {
    key: 'item-16',
    media: '50d1:2a0c:5997:506a:e748:02f4:c9d2:0e45',
    header: 'Dorothy_Osinski96',
    headerMedia: '6/28/2019',
    content: 'Eum temporibus dicta impedit quas.',
    contentMedia: 'Consequatur autem minus ut eveniet quo suscipit illo.'
  },
  {
    key: 'item-17',
    media: '97e3:a2a2:8287:63a5:d1f6:5672:d711:7e8e',
    header: 'Connie65',
    headerMedia: '4/1/2019',
    content: 'In ad beatae debitis.',
    contentMedia: 'Quia quaerat ut aut in aspernatur et.'
  },
  {
    key: 'item-18',
    media: '05ce:4ecf:1041:8415:b358:be0e:a65c:c275',
    header: 'Raphael44',
    headerMedia: '3/6/2019',
    content: 'Perferendis soluta hic sint eum.',
    contentMedia: 'Ut voluptas et consectetur est.'
  },
  {
    key: 'item-19',
    media: 'cc8d:f10c:cf4f:82fa:64a2:1a36:2461:3434',
    header: 'Roberta36',
    headerMedia: '5/5/2019',
    content: 'Molestiae nihil laborum hic pariatur deserunt ullam similique quibusdam quia.',
    contentMedia: 'Qui qui id aut deserunt quidem temporibus voluptas.'
  },
  {
    key: 'item-20',
    media: '63ac:0869:ef30:fd2e:e7ce:71d0:2519:20c1',
    header: 'Amara45',
    headerMedia: '5/13/2019',
    content: 'Placeat a sed quam vel ipsa et quisquam aspernatur.',
    contentMedia: 'Aut vero accusamus veritatis atque laboriosam harum ab fugit aut.'
  },
  {
    key: 'item-21',
    media: '7f85:444a:43b9:c878:c5f8:02ac:796d:1006',
    header: 'Cassandra86',
    headerMedia: '1/21/2020',
    content: 'Ut eaque id deserunt consequatur cupiditate.',
    contentMedia: 'Ducimus aliquam voluptatem sed dolores reiciendis.'
  },
  {
    key: 'item-22',
    media: '1c44:7233:decf:3ba9:fc2f:6c14:3358:10eb',
    header: 'Kasandra.Jacobson',
    headerMedia: '6/4/2019',
    content: 'Ut culpa nobis enim.',
    contentMedia: 'Repellat ut nesciunt quis consequuntur ea.'
  },
  {
    key: 'item-23',
    media: '45da:675d:839f:4aad:c839:f771:16a3:433c',
    header: 'Orrin65',
    headerMedia: '1/9/2020',
    content: 'Sit facilis nihil enim sint.',
    contentMedia: 'Atque quia dolorem porro delectus libero optio ea ut.'
  },
  {
    key: 'item-24',
    media: 'f5bd:fd04:d136:e7cb:dfb6:3f0f:418b:fc51',
    header: 'Imelda79',
    headerMedia: '1/28/2019',
    content: 'Aliquam odio repudiandae quia qui tenetur accusantium officia.',
    contentMedia: 'Ullam accusamus facere sed iure omnis fuga.'
  },
  {
    key: 'item-25',
    media: '0ed1:d677:780f:1af8:689b:a134:f0b3:a715',
    header: 'Gerson81',
    headerMedia: '4/29/2019',
    content: 'Quo quam dolores consequuntur autem nisi unde placeat eum.',
    contentMedia: 'Harum eos repellat nihil.'
  },
  {
    key: 'item-26',
    media: 'd473:7c5c:e688:d3e9:d168:34e3:68ab:cb34',
    header: 'Ladarius7',
    headerMedia: '12/9/2019',
    content: 'Doloremque corporis vero explicabo est similique in.',
    contentMedia: 'Voluptas consequatur voluptates.'
  },
  {
    key: 'item-27',
    media: '4a2d:dc17:5ef1:d813:f1d7:73a9:d3ae:3b4f',
    header: 'Dedric68',
    headerMedia: '2/4/2019',
    content: 'Pariatur ab aspernatur minus.',
    contentMedia: 'Asperiores vel aliquam doloribus quam maxime cumque nisi distinctio autem.'
  },
  {
    key: 'item-28',
    media: '094c:8254:1146:55d1:6d90:b41d:270a:c993',
    header: 'Noemie_Nicolas50',
    headerMedia: '12/24/2019',
    content: 'Ipsam inventore est omnis eveniet.',
    contentMedia: 'Animi tempore consequatur voluptatem eaque rerum sit ut et.'
  },
  {
    key: 'item-29',
    media: 'a903:400f:c7ab:8547:4cf4:0cea:ad85:2f84',
    header: 'Natalie_Kessler12',
    headerMedia: '9/13/2019',
    content: 'Officiis aperiam sed et beatae animi.',
    contentMedia: 'Et impedit numquam.'
  },
  {
    key: 'item-30',
    media: '14a0:7da0:6561:bf6e:7b72:6afe:175d:6725',
    header: 'Liza.Tromp92',
    headerMedia: '2/25/2019',
    content: 'Occaecati a exercitationem dolor.',
    contentMedia: 'Tempora eaque quo consectetur.'
  },
  {
    key: 'item-31',
    media: '3d66:0500:1c4a:b289:eab9:a3d8:fc1d:8036',
    header: 'Corrine.Ondricka',
    headerMedia: '9/17/2019',
    content: 'Quia sint omnis saepe exercitationem et necessitatibus minima.',
    contentMedia: 'Necessitatibus eum neque totam accusamus iste.'
  },
  {
    key: 'item-32',
    media: '3ef6:2e67:4d8a:e0fb:c614:0b87:b046:ee02',
    header: 'Xzavier.Torphy',
    headerMedia: '8/15/2019',
    content: 'Sed saepe et.',
    contentMedia: 'Nihil similique sunt ducimus.'
  },
  {
    key: 'item-33',
    media: '8d1b:6a57:b845:deeb:41bd:1f88:6f7b:804f',
    header: 'Odell89',
    headerMedia: '2/10/2019',
    content: 'Ut in voluptatem laudantium adipisci deleniti fugiat nam natus.',
    contentMedia: 'Molestiae id dolorem sit.'
  },
  {
    key: 'item-34',
    media: 'f48c:d246:d89a:213b:a252:03a3:7b23:c5e1',
    header: 'Shakira.Wuckert51',
    headerMedia: '1/19/2020',
    content: 'Recusandae maiores laborum voluptas excepturi numquam.',
    contentMedia: 'Alias et earum exercitationem rerum sed.'
  },
  {
    key: 'item-35',
    media: 'fd13:2bf9:b739:5216:5a5a:1697:ec14:f388',
    header: 'Stephan30',
    headerMedia: '8/8/2019',
    content: 'Laborum numquam dolores deserunt incidunt accusamus ipsam.',
    contentMedia: 'Iusto voluptas nobis.'
  },
  {
    key: 'item-36',
    media: '4df1:1c3e:3519:e661:570a:95e4:7d42:2a9f',
    header: 'Kenton_Vandervort68',
    headerMedia: '11/19/2019',
    content: 'Blanditiis nemo possimus autem et sunt exercitationem inventore dolorum.',
    contentMedia: 'Odio aspernatur at sapiente voluptatem qui reiciendis suscipit non aut.'
  },
  {
    key: 'item-37',
    media: 'b0fd:820f:8349:bbe6:709d:bb31:dbcd:04e8',
    header: 'Milton39',
    headerMedia: '4/16/2019',
    content: 'Ratione nihil omnis enim aut rerum molestias nulla sit rem.',
    contentMedia: 'Rem dolorem ab cupiditate consequatur cum incidunt et vero eveniet.'
  },
  {
    key: 'item-38',
    media: '2e80:c46e:0b5e:e390:0f07:75a7:ef51:f03a',
    header: 'Domenic.Bernier63',
    headerMedia: '7/20/2019',
    content: 'Amet et soluta rerum vero totam non consequatur sit dolorum.',
    contentMedia: 'Explicabo in voluptas esse et sint.'
  },
  {
    key: 'item-39',
    media: '7bed:44f3:d339:6da5:17bb:ac34:9d31:3ef5',
    header: 'Deshawn68',
    headerMedia: '9/20/2019',
    content: 'Mollitia ut sapiente ex eaque ducimus sit culpa et corrupti.',
    contentMedia: 'Amet voluptatem vero et est dicta est.'
  },
  {
    key: 'item-40',
    media: '5c39:27f2:3d18:a5ed:805d:98c0:eca1:441d',
    header: 'Eda_Willms',
    headerMedia: '6/19/2019',
    content: 'Nihil quasi et voluptatem dolore et.',
    contentMedia: 'Rerum dolores reiciendis asperiores fuga nostrum vitae et.'
  },
  {
    key: 'item-41',
    media: 'ae15:839e:803b:0e90:0382:1502:254c:ff49',
    header: 'Eliza44',
    headerMedia: '10/18/2019',
    content: 'Veniam ab ducimus ut repellat.',
    contentMedia: 'Et voluptatibus error nihil numquam similique.'
  },
  {
    key: 'item-42',
    media: 'cd53:e6ce:1aff:8b32:3786:fefa:c00e:a801',
    header: 'Garry.Connelly',
    headerMedia: '9/25/2019',
    content: 'Accusamus esse impedit ratione id sit vero veniam odit nemo.',
    contentMedia: 'Eveniet vel dolor dolores quam animi rerum temporibus.'
  },
  {
    key: 'item-43',
    media: 'bb43:d3e5:2f02:e726:0edb:5029:9c59:40b0',
    header: 'Sigrid4',
    headerMedia: '10/4/2019',
    content: 'Quis ut est sunt sit sed facilis rerum debitis iusto.',
    contentMedia: 'Quos assumenda quam ab sed ea assumenda explicabo suscipit vero.'
  },
  {
    key: 'item-44',
    media: '63c0:e35e:8a1a:a3b2:90ae:bda1:4466:aac7',
    header: 'Armando.Durgan',
    headerMedia: '5/12/2019',
    content: 'Et numquam non hic et occaecati suscipit.',
    contentMedia: 'Fugiat voluptatum quia amet aut ut ea nam.'
  },
  {
    key: 'item-45',
    media: '6d4a:3868:1ac0:7edc:3461:fe0e:df54:0d0d',
    header: 'Theresia.Thiel',
    headerMedia: '12/30/2019',
    content: 'Enim animi sit beatae nisi rerum vitae velit maiores quia.',
    contentMedia: 'Ut quisquam est doloremque voluptatem iure similique ab sit.'
  },
  {
    key: 'item-46',
    media: 'e494:2079:8bac:cafb:b075:4718:3791:065a',
    header: 'Yazmin_Kertzmann',
    headerMedia: '10/27/2019',
    content: 'Deleniti iste ab est ut nihil soluta aut rem ex.',
    contentMedia: 'Distinctio fugit fugiat commodi consequatur laudantium aut quod.'
  },
  {
    key: 'item-47',
    media: 'e8e8:d347:be4c:90ac:aabf:8fc4:fac2:0c75',
    header: 'Terry.Schuppe42',
    headerMedia: '8/1/2019',
    content: 'Repellendus necessitatibus minima fugit autem odio vel accusantium accusamus quas.',
    contentMedia: 'Nihil aliquam tenetur veritatis atque.'
  },
  {
    key: 'item-48',
    media: '9b6f:cc70:91dd:2fae:cab3:892f:b12e:84b4',
    header: 'Gilda_Kuhlman41',
    headerMedia: '5/22/2019',
    content: 'Eum aut assumenda quia aperiam culpa aliquid pariatur qui sit.',
    contentMedia: 'Voluptatem delectus odit.'
  },
  {
    key: 'item-49',
    media: 'a479:0ac9:94bd:eda7:2105:9b91:003e:ff0f',
    header: 'Mathew_Bashirian',
    headerMedia: '11/27/2019',
    content: 'Iusto rerum voluptas.',
    contentMedia: 'Ea molestiae quos cupiditate laborum.'
  },
  {
    key: 'item-50',
    media: '86e6:9dab:6835:7cb3:39aa:009b:e1ee:3d3f',
    header: 'Roma84',
    headerMedia: '7/6/2019',
    content: 'Deleniti sunt doloremque perferendis quod assumenda ipsa.',
    contentMedia: 'Est commodi illo incidunt provident alias ab aut ut placeat.'
  },
  {
    key: 'item-51',
    media: 'c9c0:e84c:b2e7:9687:9089:f2d3:3c24:ee17',
    header: 'Hans_Hayes',
    headerMedia: '4/29/2019',
    content: 'Dolores quibusdam nihil et modi earum officia earum incidunt et.',
    contentMedia: 'Et officiis ea velit tempore enim at commodi dolores.'
  },
  {
    key: 'item-52',
    media: '8738:61a1:bc19:1958:c7cb:f878:1ddc:a847',
    header: 'Sam80',
    headerMedia: '11/14/2019',
    content: 'Eaque quam distinctio.',
    contentMedia: 'Vel numquam asperiores ut assumenda veniam est dolorum officiis.'
  },
  {
    key: 'item-53',
    media: '5295:1bbf:5778:011e:207a:d67b:517a:a02e',
    header: 'Madaline53',
    headerMedia: '5/6/2019',
    content: 'Et error rerum odio ex molestiae.',
    contentMedia: 'In quidem numquam omnis voluptas nam et ratione.'
  },
  {
    key: 'item-54',
    media: 'dc6b:7b5a:739b:9ce7:3bf0:0801:f19f:e5ca',
    header: 'Ardith46',
    headerMedia: '7/18/2019',
    content: 'Qui possimus quae hic ea ex voluptatum culpa.',
    contentMedia: 'Cupiditate sequi vel.'
  },
  {
    key: 'item-55',
    media: 'da52:440c:e8ce:65aa:2492:6bb7:f34c:fe8d',
    header: 'Linnea22',
    headerMedia: '2/22/2019',
    content: 'Rerum quis in ad ad maiores possimus error optio.',
    contentMedia: 'Eaque quo explicabo sunt et rerum.'
  },
  {
    key: 'item-56',
    media: '0a4f:bfa5:8c03:e5f8:75b3:0751:6763:912b',
    header: 'Mervin.Hickle85',
    headerMedia: '10/6/2019',
    content: 'Quo nesciunt culpa aliquam consequuntur.',
    contentMedia: 'Iure eos perferendis.'
  },
  {
    key: 'item-57',
    media: 'ae6a:016b:11ca:4c9e:203e:045d:b0e4:12cf',
    header: 'Abel78',
    headerMedia: '8/22/2019',
    content: 'Voluptatem saepe est sit illo nihil enim iure ut quia.',
    contentMedia: 'Rerum officia ut eveniet aut consequatur.'
  },
  {
    key: 'item-58',
    media: 'ebcd:0202:ef1b:94f7:7003:dbae:53cb:e035',
    header: 'Lexi.Pacocha18',
    headerMedia: '7/11/2019',
    content: 'Autem qui voluptatem.',
    contentMedia: 'Quis nostrum repellat maxime.'
  },
  {
    key: 'item-59',
    media: '0ea2:847a:c88b:a67b:a525:b0d1:5801:3383',
    header: 'Braeden44',
    headerMedia: '9/29/2019',
    content: 'Quae consequatur pariatur et ea.',
    contentMedia: 'Quisquam odit ipsa quo.'
  },
  {
    key: 'item-60',
    media: '39d9:38bc:a073:8df5:e24c:8061:a0b2:5797',
    header: 'Dena44',
    headerMedia: '11/4/2019',
    content: 'Odio enim corrupti doloribus neque velit eum quaerat modi.',
    contentMedia: 'Quo totam dolorum officia nihil corporis earum doloremque voluptas quod.'
  },
  {
    key: 'item-61',
    media: 'd2d8:af56:3f45:fd15:befb:e30b:73df:c011',
    header: 'Donato12',
    headerMedia: '9/7/2019',
    content: 'Et expedita vero recusandae soluta autem assumenda.',
    contentMedia: 'Ullam fuga minima laboriosam facilis velit.'
  },
  {
    key: 'item-62',
    media: 'f6c3:9c9f:9c45:7439:c286:e8ac:91b2:f3b0',
    header: 'Walker.Heidenreich5',
    headerMedia: '11/30/2019',
    content: 'Beatae dolorem eveniet.',
    contentMedia: 'Et voluptas ullam beatae corporis quaerat et sint quasi.'
  },
  {
    key: 'item-63',
    media: '3df8:81ab:9f29:d0a1:4360:0b1c:c4ac:9ef6',
    header: 'Rosalinda_Kuphal75',
    headerMedia: '5/27/2019',
    content: 'Atque animi consectetur laborum.',
    contentMedia: 'Aut quisquam rem.'
  },
  {
    key: 'item-64',
    media: 'c249:12c6:642c:49be:4a08:d66a:8d0d:1a98',
    header: 'Bella_Becker46',
    headerMedia: '12/6/2019',
    content: 'Similique placeat et possimus voluptates quia non non.',
    contentMedia: 'Sit et reiciendis ad unde est porro quibusdam.'
  },
  {
    key: 'item-65',
    media: '6b01:d676:8c9a:7559:5639:493e:d3f8:e529',
    header: 'Zechariah.Zulauf75',
    headerMedia: '12/9/2019',
    content: 'Optio dolorem aut.',
    contentMedia: 'Blanditiis voluptas quia corrupti laborum.'
  },
  {
    key: 'item-66',
    media: '61a1:e08f:3b2c:6775:a768:79ef:fbc5:1d2b',
    header: 'Amina_Reilly',
    headerMedia: '4/2/2019',
    content: 'Sed earum fuga pariatur ipsam officia amet.',
    contentMedia: 'Minus facilis quam.'
  },
  {
    key: 'item-67',
    media: '32d8:895f:7f5f:f3f8:3f71:ddee:0e80:6da8',
    header: 'Jackson.Bauch17',
    headerMedia: '12/31/2019',
    content: 'Non corrupti quisquam et.',
    contentMedia: 'Nulla soluta explicabo esse ea in nemo id reiciendis.'
  },
  {
    key: 'item-68',
    media: 'e51d:a9e9:c018:ab6b:78aa:ce10:d01e:ba61',
    header: 'Marcelo99',
    headerMedia: '9/19/2019',
    content: 'Odit nobis dicta vero impedit expedita voluptates aliquid.',
    contentMedia: 'Ipsum consequatur accusantium.'
  },
  {
    key: 'item-69',
    media: 'bca7:7384:2454:e457:f029:5f2b:23b6:e8e9',
    header: 'Leonora_Wolf35',
    headerMedia: '10/17/2019',
    content: 'Beatae ut cum et occaecati excepturi molestiae sequi aut esse.',
    contentMedia: 'Ipsa laboriosam rerum.'
  },
  {
    key: 'item-70',
    media: '01a2:9bbd:3a4f:1c02:c4f8:f232:dfa7:452d',
    header: 'Haleigh.Williamson',
    headerMedia: '9/23/2019',
    content: 'Animi fuga in omnis.',
    contentMedia: 'Eos reiciendis quidem nam corrupti vero atque dolores ut.'
  },
  {
    key: 'item-71',
    media: '1642:ec3a:415b:a5a6:4873:853f:6052:f601',
    header: 'Elian_Lang',
    headerMedia: '11/12/2019',
    content: 'Autem nesciunt quia magnam qui.',
    contentMedia: 'Repudiandae atque ipsum perspiciatis possimus tempora deleniti a.'
  },
  {
    key: 'item-72',
    media: 'c135:5daa:737b:aba0:2241:c19f:42ce:8a91',
    header: 'Filiberto_Runolfsdottir',
    headerMedia: '6/16/2019',
    content: 'Itaque nesciunt sit ducimus error adipisci et est vitae.',
    contentMedia: 'Doloribus praesentium ut ut qui sint mollitia quasi rem non.'
  },
  {
    key: 'item-73',
    media: '4e2d:cda6:9c1e:f561:a416:ce2d:4ed4:1807',
    header: 'Darwin_Price',
    headerMedia: '1/18/2020',
    content: 'Sit delectus corrupti omnis et alias reprehenderit praesentium nihil.',
    contentMedia: 'Aut minus sunt ut.'
  },
  {
    key: 'item-74',
    media: 'a8db:749a:e801:5d86:929a:f04f:0fe0:7f3c',
    header: 'River.Shields',
    headerMedia: '4/12/2019',
    content: 'Nobis voluptatem ipsum.',
    contentMedia: 'Deserunt non ex eos deserunt.'
  },
  {
    key: 'item-75',
    media: '65ca:2e7d:5a73:ab88:3d47:6e95:8ce0:c0be',
    header: 'Marcelina97',
    headerMedia: '11/12/2019',
    content: 'Dolores ex aut.',
    contentMedia: 'Ad dolorem ullam libero ipsam vel eum id molestiae qui.'
  },
  {
    key: 'item-76',
    media: '28b5:6f91:ba1a:a099:bd84:1805:3c4e:6d3a',
    header: 'Hector_Jacobs',
    headerMedia: '6/19/2019',
    content: 'Assumenda nostrum aut eum.',
    contentMedia: 'Accusamus quae rerum molestias reprehenderit ducimus in.'
  },
  {
    key: 'item-77',
    media: '5a9b:2b1c:0c64:978e:d0d8:a205:f1ba:d022',
    header: 'Hank.Gutkowski',
    headerMedia: '11/28/2019',
    content: 'Nam itaque et.',
    contentMedia: 'Esse aut ducimus illo sint error doloremque consequatur sunt assumenda.'
  },
  {
    key: 'item-78',
    media: '22e4:aa44:2ca1:3505:06a8:6eb8:fbfd:738c',
    header: 'Bianka_Bode',
    headerMedia: '10/14/2019',
    content: 'Hic incidunt officia.',
    contentMedia: 'Vitae sunt nostrum nobis occaecati sed molestiae est impedit.'
  },
  {
    key: 'item-79',
    media: 'fbee:c95c:d813:44ac:3925:7642:8e1c:7e16',
    header: 'Neil81',
    headerMedia: '2/23/2019',
    content: 'Excepturi et corporis sed autem unde qui doloribus.',
    contentMedia: 'Distinctio consequatur dignissimos enim.'
  },
  {
    key: 'item-80',
    media: 'a3f7:3619:438a:b723:1666:403f:864d:e8f1',
    header: 'Finn.Abshire29',
    headerMedia: '2/20/2019',
    content: 'Explicabo magni omnis eum consequatur numquam tenetur.',
    contentMedia: 'Quas exercitationem delectus quasi sequi ut repellat maiores recusandae aut.'
  },
  {
    key: 'item-81',
    media: '3a7a:9528:8159:40aa:4e91:1a05:886d:59e6',
    header: 'Bartholome_Bartoletti44',
    headerMedia: '8/11/2019',
    content: 'Adipisci et ducimus et pariatur consequatur quibusdam.',
    contentMedia: 'Omnis architecto odit illo enim.'
  },
  {
    key: 'item-82',
    media: 'e5fe:d840:e9ee:467f:a631:a5ee:26ea:f5e4',
    header: 'Amanda_Eichmann',
    headerMedia: '10/6/2019',
    content: 'Libero vitae laborum omnis consectetur beatae aut quas architecto quis.',
    contentMedia: 'Est iusto tempore quaerat.'
  },
  {
    key: 'item-83',
    media: '4398:93a6:1de1:94f3:903e:954c:77cd:d013',
    header: 'Izaiah30',
    headerMedia: '5/5/2019',
    content: 'Voluptate provident omnis sequi enim dolorem quod.',
    contentMedia: 'Assumenda aut officia deleniti velit corporis.'
  },
  {
    key: 'item-84',
    media: 'defd:93e0:086c:c54c:91f8:3cd3:f906:2399',
    header: 'Emmanuelle_Hodkiewicz',
    headerMedia: '10/20/2019',
    content: 'Quis quasi reiciendis cupiditate necessitatibus deleniti.',
    contentMedia: 'Nam debitis voluptate labore ea non vel eveniet sint consequuntur.'
  },
  {
    key: 'item-85',
    media: '5500:c4a6:1062:fb2b:1ec0:7a2f:2ff6:00a6',
    header: 'Bailee_Metz4',
    headerMedia: '9/11/2019',
    content: 'Cumque ut et ut voluptates aliquam dolore occaecati quisquam rem.',
    contentMedia: 'Consequatur deleniti sed illum cupiditate aliquam.'
  },
  {
    key: 'item-86',
    media: '28ff:bcb7:ba28:6f30:9193:8d67:fd3a:a95f',
    header: 'Roel14',
    headerMedia: '1/9/2020',
    content: 'Facere omnis itaque facere eligendi iusto corporis.',
    contentMedia: 'Et autem pariatur iste magnam esse ab.'
  },
  {
    key: 'item-87',
    media: '793d:32e6:3b90:1e5c:2974:4a05:9d15:a687',
    header: 'Liliane.Welch',
    headerMedia: '4/7/2019',
    content: 'Aut unde nostrum quis corrupti placeat quibusdam.',
    contentMedia: 'Saepe sit quis ullam.'
  },
  {
    key: 'item-88',
    media: 'ab9f:016b:aabe:45cd:6457:a5be:1449:9ac3',
    header: 'Emmet_Fritsch58',
    headerMedia: '11/5/2019',
    content: 'Sint culpa et corporis consequatur doloremque placeat fugiat nemo rerum.',
    contentMedia: 'Deserunt deleniti et consequuntur consequuntur nemo molestias excepturi rerum.'
  },
  {
    key: 'item-89',
    media: '5426:e139:7c43:360c:e540:305d:0dd3:c3d4',
    header: 'Alba9',
    headerMedia: '10/17/2019',
    content: 'Expedita commodi qui.',
    contentMedia: 'Quasi non sunt suscipit nesciunt enim ipsam quaerat.'
  },
  {
    key: 'item-90',
    media: '64fc:571b:ad34:65cb:deab:4ce8:220b:8e67',
    header: 'Colton_Stroman9',
    headerMedia: '11/6/2019',
    content: 'Impedit dolorum ut facilis neque qui.',
    contentMedia: 'At amet hic.'
  },
  {
    key: 'item-91',
    media: '7788:9eec:848d:468b:0264:2c4b:dd36:cec7',
    header: 'Baylee.Leffler9',
    headerMedia: '7/14/2019',
    content: 'Aut dolores aperiam.',
    contentMedia: 'Voluptatem aut aut molestias labore optio deserunt harum quos reprehenderit.'
  },
  {
    key: 'item-92',
    media: 'b4f5:008d:9fe0:cef5:e1a0:f291:8a2e:50c8',
    header: 'Emmanuel.Crona',
    headerMedia: '2/6/2019',
    content: 'Facere repudiandae rem voluptatem saepe rerum est velit porro.',
    contentMedia: 'Molestiae aut eum reiciendis et voluptatibus quasi ut quasi consectetur.'
  },
  {
    key: 'item-93',
    media: '77e2:f427:7f58:5e7e:7e70:c3b0:80cd:4495',
    header: 'Aurelia.Olson4',
    headerMedia: '10/17/2019',
    content: 'Tempore aut facilis laboriosam minus.',
    contentMedia: 'Id omnis est voluptatem sit non quo quaerat.'
  },
  {
    key: 'item-94',
    media: '0079:dea3:8261:4801:d2d5:7dea:0dc2:4c2c',
    header: 'Morris_Morar',
    headerMedia: '10/27/2019',
    content: 'Qui explicabo non.',
    contentMedia: 'Dolore consequatur totam modi et.'
  },
  {
    key: 'item-95',
    media: '6f85:fda7:38b4:e019:606d:6ed6:56c4:a4bf',
    header: 'Ray.Berge',
    headerMedia: '8/8/2019',
    content: 'Et amet ut rerum debitis consequatur.',
    contentMedia: 'Omnis voluptatum ut quisquam ut quidem.'
  },
  {
    key: 'item-96',
    media: 'f498:acb8:7241:3d26:3fa3:a63f:3fd9:da18',
    header: 'Freida.Keeling99',
    headerMedia: '7/7/2019',
    content: 'Et eveniet quae sapiente.',
    contentMedia: 'Ea optio voluptatem maxime sunt aliquam nesciunt quia dicta sint.'
  },
  {
    key: 'item-97',
    media: 'ca0a:c574:e92f:fc64:679b:27f6:930e:9379',
    header: 'Frederic_Schuppe',
    headerMedia: '2/10/2019',
    content: 'Aliquam incidunt est aut sit esse.',
    contentMedia: 'Non voluptatem quae adipisci et voluptatem voluptas velit ut.'
  },
  {
    key: 'item-98',
    media: 'd909:4f8a:12bc:921d:b8f2:b9d5:b036:e5f9',
    header: 'Selena.Schultz16',
    headerMedia: '5/21/2019',
    content: 'Quam dolorem rerum quo nulla.',
    contentMedia: 'Laudantium ut quia iusto.'
  },
  {
    key: 'item-99',
    media: 'd049:44b4:1d31:c7d1:62fd:db1c:2d79:b4c9',
    header: 'Chloe_Shields0',
    headerMedia: '2/10/2019',
    content: 'Optio quas culpa eum unde debitis laudantium et excepturi.',
    contentMedia: 'Molestias officia est delectus harum inventore dolor.'
  }
];

const ListNestedPerf = () => (
  <List
    selectable
    items={[
      ...items,
      {
        key: 'list-1',
        content: (
          <List
            selectable
            items={[
              ...items,
              {
                key: 'list-1',
                content: <List items={items} style={{ backgroundColor: 'green' }} />
              },
              {
                key: 'list-2',
                content: <List items={items} style={{ backgroundColor: 'yellow' }} />
              },
              {
                key: 'list-3',
                content: <List items={items} style={{ backgroundColor: 'red' }} />
              }
            ]}
          />
        )
      },
      {
        key: 'list-2',
        content: (
          <List
            selectable
            items={[
              ...items,
              {
                key: 'list-1',
                content: <List items={items} style={{ backgroundColor: 'green' }} />
              },
              {
                key: 'list-2',
                content: <List items={items} style={{ backgroundColor: 'yellow' }} />
              },
              {
                key: 'list-3',
                content: <List items={items} style={{ backgroundColor: 'red' }} />
              }
            ]}
          />
        )
      }
    ]}
  />
);

ListNestedPerf.iterations = 1;
ListNestedPerf.filename = 'ListNested.perf.tsx';

export default ListNestedPerf;
