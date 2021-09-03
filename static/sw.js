class Pwa {

    constructor(self) {
        this.scope = self;
        let Version = new URL(location).searchParams.get("version");
        this.CACHE_VERSION = Version;
        this.BASE_CACHE_FILES = [
            '/',
            '/favicon.ico',
            '/en/',
            '/en/about/',
            '/en/blog/',
            '/en/blog/index.xml',
            '/en/favicon.ico',
            '/en/index.xml',
            '/en/manifest.json',
            '/en/offline/',
            '/en/uses/',
            '/fr/',
            '/fr/about/',
            '/fr/blog/',
            '/fr/blog/index.xml',
            '/fr/favicon.ico',
            '/fr/index.xml',
            '/fr/manifest.json',
            '/fr/offline/',
            '/fr/uses/',
            '/static/css/main.min.f2f02de6e7e68e0f024c5b2981a9c3fff7dd98e704c97419c054923d55bd9a8b.css',
            '/static/js/vanilla-back-to-top.min.b8c249dc4a13c9f441a136d1fa5adfbb5b9143ced1646f0047771536e4157858.js',
            '/static/js/webmention.min.7ce29fd5f9dc2f3134a1eab3bfcd83f5c35603473b8f48acc38fe7e04d9c1930.js',
            '/static/modernizr-simple.9022aa18b96ab0f335d0c433a6e351da17bd2f09524c922ddfec345affe8c53c.js',
            '/static/theme.ee2ee27de0516e82d7cf4ea63464e50006cab9a754e32c1b800d641e9885936e.css',
            '/static/theme.79f8723c0bda82e2c04203d3e9b4e3c6242eef1c32d3d43569491d68c363c40d.js',
            '/static/images/badges/activemq.0ee475e5ff98e6a8051710b0ae731ee43be1833ef81edcb050eb0a2f78c75de0.svg',
            '/static/images/badges/algolia.fb906fa202a7296e5290e8fa6ca91c2dcc63b00cd424f739d193e7045108f5c8.svg',
            '/static/images/badges/altair.51d1f344f422256dfe3a6cecf4d89d49df22b604ea40d96c820b37d9a16696c8.svg',
            '/static/images/badges/analytics.1ce86e2e15b490c4d3dd3b3cbfca8684981f3dfb1a088d65152210e2d7ad22dd.svg',
            '/static/images/badges/android.06965bcd65a49a21ffbfb85c3ec2ec7aaf2ae8ff570bcd715531269c750dbccb.svg',
            '/static/images/badges/androidstudio.29610f51de7f35cbdeea858d728a80ec661adf8cd461911aedaba57501a3219c.svg',
            '/static/images/badges/ansible.610b289b52f877f5c9ef46f8eeb3da12871e50b7e2110a97df0ad8a0ef11c189.svg',
            '/static/images/badges/apachecamel.ddc578101a2ba97f623fad92b6d1db5f9bebf278d48925e0aedc67a76ff188cf.svg',
            '/static/images/badges/apachemaven.0ac91cdc196d99f2fd68f5aa0f10ece4a5961d23e2416b47dc86736a78d2a2b8.svg',
            '/static/images/badges/apicurio.670a69416e7a3dfd82acd35d8b421d8ba3fe916bcd17587c75c9ee0b59e80c74.svg',
            '/static/images/badges/apollographql.a587eb3e1c0152f522df7694b3b1bd7637ab7538de3df498fd7eaceed642238a.svg',
            '/static/images/badges/arduino.cae3e15b25f9f0931f926ef9a7bc5cdb7f60e4cecb008497eec891d5dfa511f4.svg',
            '/static/images/badges/asciidoc.7b63648055424e5089755bfde5e9193088d0e290297a0152db0d00cbdb95bfe1.svg',
            '/static/images/badges/asciidoctor.b86f2f565001975a94157ef02152868ac5d93e75c74f8052eb4a639545fe4abf.svg',
            '/static/images/badges/bamboo.72615b9342e68ef8a6e31ac5dc2f1a4339f696733c623cf5ff29be10dbb133ff.svg',
            '/static/images/badges/bash.cbff6ce4dfce3e64c9e0890d7976bf7c9b9ad7ff0bda585a8e076e4119ce7987.svg',
            '/static/images/badges/beats.077f9c04b78f4e0e410dd4de0b470568a99edc6323c7a1297b1aed5f6b25a097.svg',
            '/static/images/badges/bitbucket.b211d6e24ef18252f047e50a8dfeab38c662ef37b7d685972d7b1f6fd64c4e8c.svg',
            '/static/images/badges/bootstrap.7ec08f3510348c45f8ef0f2da0a05da6464f967b77b302035d43b25b6e74370c.svg',
            '/static/images/badges/brave.d8373a904b4aca4af08a4dc5058832bcc3d04672fbd7a007e4175cab28a0e332.svg',
            '/static/images/badges/calibre.42481e7a345ce4fcc521d08be83d39446a30378cd6ad61f413d2205f8699bc13.svg',
            '/static/images/badges/chocolatey.b3808b563d81419f4e16c637e2f77082adbd58a03ad816f1eaf24fc8098c2e20.svg',
            '/static/images/badges/chrome.af777b2dfc6ca19a3f42f5855ddf205b55afb99f339ff832fc9f9041a53831e1.svg',
            '/static/images/badges/circleci.88386bb5972142cc11b871dfd657c0caa2c01c8041a188c55b080135017ffe4f.svg',
            '/static/images/badges/cloudflare.1bb3d8130b00bf037ecbee9bf935cf8d97cb7e9eebf0d9cf9998df554f7036c7.svg',
            '/static/images/badges/clubhouse-badge.4836d3ec57e531ffe9c94af826d276d7e2b3369722ccf35caca6981752294a5e.svg',
            '/static/images/badges/clubhouse.96475c391fd198fba5c8b3984918ceca89716e862bdafdae0740e23e930d6af4.svg',
            '/static/images/badges/codacy.83f7b9f5566cdd74c869f184db1f2ad593092a7a7d8b8d79f783f5c859d53549.svg',
            '/static/images/badges/confluence.85d36447be292eed0982e638cc1409fb5b025272f72a201bc620678a02240369.svg',
            '/static/images/badges/consul.621e6b4941c7b4ae5a52de852e0f01d725f6cbb742f72d40ad832e318479cc00.svg',
            '/static/images/badges/css3.165f3c0a438fe3cea24ea0883ef320b19167174e4cf7f257b1adab0d8a1b94b8.svg',
            '/static/images/badges/curl.90c2e64b7b07eb35c0bfa7e85c33f7e06877d52faccc7a50fd58fa008ea87b70.svg',
            '/static/images/badges/deezer.fadd6b99065881f0c1a012a83ce9b632a96691500322df9d68aa2903bac857ee.svg',
            '/static/images/badges/dependabot.6646a8cbf217b3b7b0661c7049bef377f220e08e3aa2f37619bd8b2248e4e1f9.svg',
            '/static/images/badges/devto-large.7ccb27b5d51208dd9db5511ea33cf7a3a82e7576e97f6a9e34b9b04e75bd95f6.svg',
            '/static/images/badges/devto.51eaf7d897dd392b50c3d432acb6d1a7995f6abdd59234fbe1ee8cb1aade3ae3.svg',
            '/static/images/badges/diagramsnet.698b2c7426814bcc9753e4d69872455f70538f46c328debf64b4b70494abc8b4.svg',
            '/static/images/badges/discord-large.1b2a28785c798e7d9ce6fbdfa1f7aa3b241324be14760be8b987f8a5fdab1652.svg',
            '/static/images/badges/discord.55acc64c82453b33b8355097e2f7d8818a54bf6e56e60b60aa59bdc643f35f70.svg',
            '/static/images/badges/docker.ee2287a403d76322aa598de2521c17413aacb639d4304516de865ff797985aff.svg',
            '/static/images/badges/elasticsearch.63437af133fb71696912a2d64b25ee88df15a99a9d32a754a5df589b069ee18a.svg',
            '/static/images/badges/fastlane.5db528b1784d5cb76f41d5d5ec1afaf1089e98ce0d6f51f0f9d96ca237db2375.svg',
            '/static/images/badges/filezilla.62c03f7a2e8975c24869dd63bb8df16589bb5f4a04a375680b65ab20b0198261.svg',
            '/static/images/badges/focustodo.88ea0463442c8ab438435a1cf0fa6f9ad0c7c24b410a296b400feeab0fb50c7d.svg',
            '/static/images/badges/gatling.642508f58d9a9c05a8c2a6019ad9340b4b36adeb371425c0e73c69d45ea00530.svg',
            '/static/images/badges/gatsby.12436a269c4691f706ccb4e6a9124b84fbb93bd1f9fef88276d1c85d300e0f15.svg',
            '/static/images/badges/git.6008a1bc0d7db7490ba06a7874f218d753c7566dd84b654e56a4b59045d8ff63.svg',
            '/static/images/badges/github-large.5b49c853881fdb26b826f1431b146cd16db146c6b4787e8ad3884dcbf9c43388.svg',
            '/static/images/badges/github.e3bd5934203fdb7844c2a3faa48ba68981b514f9e0d69ec66554d290399125ce.svg',
            '/static/images/badges/githubactions.cc79e5ebfb428f135c2ffd23f54c1ba6999b2d52344b1b6540a3c1929d310c91.svg',
            '/static/images/badges/gitkraken.bac77a1466a02c0f48ddf243b43b066f25cb787e800b507805de5b71e5e86093.svg',
            '/static/images/badges/gitlab-large.9e9cf89bd0416581ce6951f905a50e51a809d16649a236330917ac8bb558389e.svg',
            '/static/images/badges/gitlab.eaff734cc859bda4097d821b950710b70f23c9664b5722e972c9ded0dacdb4fa.svg',
            '/static/images/badges/gitpod.a81d1ce60fe0e5e64728dc1cdc751d474e582be368ce09f0ea4db7c33a6558ee.svg',
            '/static/images/badges/gitter.3d93e4dcf392c29d61fcfae100347178337124deaffc42743796be337d2ce78c.svg',
            '/static/images/badges/gmail-large.3fbd01cc031393c6f1a44b724fa27aa4a91a844861f533333bf1ab2355a9e744.svg',
            '/static/images/badges/gmail.529d93af23567df3bec11bac874e510c19447b35153d4ca3e86272c95356cdaf.svg',
            '/static/images/badges/googlecloud.71b5acd3e49a32c29a927127d72a6bbb028e1db3418676e5ef873c922e2210b3.svg',
            '/static/images/badges/gradle.b65bf50dbdb9444d2100036c003753d28ee19d82ece73e9605a3f2850f113a30.svg',
            '/static/images/badges/grafana.a106bec0e5a61357657040a617e900cd79ec33d1d5a01126ca022a467575af60.svg',
            '/static/images/badges/graphql.431bf7d11a08c7b5daa598067a8cd7f5c4109e635c91562d226ca2c477c3f427.svg',
            '/static/images/badges/hangouts.692f31e7686784ce596e7878284731eaeeffb8aead247ec71586cf513c09653d.svg',
            '/static/images/badges/hashnode-large.18004d5647b230e8334dd4d3f7b1e03794a6086458b7724df8432f954f4d57d2.svg',
            '/static/images/badges/hashnode.2ec69df4aa9424b0ef992b7b372e69561fe32a380ce65e179d325b29daae973b.svg',
            '/static/images/badges/heidisql.cf4453aa0ed817dde575a28d311984372a3e12f5a5988077d3c3a088cf2c182e.svg',
            '/static/images/badges/hibernate.2b9b320f5cad2897a22f57429287a28ba8e772e3ca2d5b24776b44355d5f5c6e.svg',
            '/static/images/badges/html5.9f66ff9a9e6e87f9af42a9b8087d94d2ae94885cb8914a0971aa8ab8354107a3.svg',
            '/static/images/badges/hugo.37619eec71951eb2db66f1dd5a744330a37cc3dc3bf7283188b716113f9f78ad.svg',
            '/static/images/badges/hyper.a74a9261a6f172488ea708149c6ffd06fb6b483c56974933cf02a5ef05fda9cc.svg',
            '/static/images/badges/influxdb.ad8e8c2ac1f64a8892982efcdbd2e7dd064b32bc4de6319b05262ca8dd2f2d3f.svg',
            '/static/images/badges/intellijidea.1b9283bc890c8d47e2d3d4ac2eefb06ff0ce5ee4605f57da42de7ecbe10f4601.svg',
            '/static/images/badges/jamstack.444968944531e55ae9aa92e79af3daf4d6d01867c9a1765e9162b94c6eabe664.svg',
            '/static/images/badges/java.3b161c4563fe51da91c5aa429129fc3139751becf0ba1a762a481919a82f2b70.svg',
            '/static/images/badges/jekyll.648cd8dcd1a881570651d9501d218b0b760bfb87437d8c3c1f677ab91cd431bf.svg',
            '/static/images/badges/jenkins.084277d9af5512e940ff4d456815a1a4b0683eb03c589076dd0cb3e89e40dcd4.svg',
            '/static/images/badges/jira.a15169272bd56508a5041f3968f4325b7aaf9949a54f281d406786b16092786b.svg',
            '/static/images/badges/junit.f62529007e655b2222a333e7b1ac9e130ebea99da550cb2a2963d3fbf59c6fdc.svg',
            '/static/images/badges/keycloak.a4aa7253eea3b968b17aacb2cb322225020ad853b6471995d8f6c436c83ba4de.svg',
            '/static/images/badges/kibana.c05862e7e1082f55c39e07f7607712e1cc9e27c67a8b2a788b267f65c4b28da3.svg',
            '/static/images/badges/kong.704f3e3b1d6ae4092f765e2b87a7d55f5946f4210479146ae9977387b26efd7d.svg',
            '/static/images/badges/kotlin.79ffd089cb22fbc984004fb56e8f7da0ddbc42a52a2e02ff7ac2e11e80bc0e64.svg',
            '/static/images/badges/latex.41595b2fc6eac3f3deba207800e2c30cda83ad91f8aee3aae3bc3107a3a1206f.svg',
            '/static/images/badges/linkedin-large.0299573303ae377e45499987c2e0759327d35b50462d84422f171c5aef9b6342.svg',
            '/static/images/badges/linkedIn.9338f1c2966a1a1bbbf12656b40b1e533778bff206d45fc663af107249d15012.svg',
            '/static/images/badges/linux.54307eed25387d7052819723386e0b5ba6b352ba3f98d125f7ca3af1d3842040.svg',
            '/static/images/badges/logstash.39ba538eb156a75f478091a17c614286347f7c80c2f350fae8b8e1b3d9904675.svg',
            '/static/images/badges/macos.d87dbe27ce60128fd0de7855135b421de6b9e061fb226c2a27e288d6a16ec73d.svg',
            '/static/images/badges/maoudiacom-large.bf6113fa1b66691e8104a1ce7aec53d0eb625ba9d7176002a5ea7ab79eb716a3.svg',
            '/static/images/badges/maoudiacom.963aa00b4193c80f38390c492b235829e939eb3440ba2f39c1029d0548bcd5c7.svg',
            '/static/images/badges/mariadb.e577c7b77cb4ed18b5cca31e9b7dd6724541245010238e06b2bcf15af5108400.svg',
            '/static/images/badges/markdown.85b9a09ed766b5e54bbb59eb66a07fa372d0b78a7f9eac7d7b5afea392aaed10.svg',
            '/static/images/badges/mattermost.582b6e032f79c003878899cfcebc30190b617cdbd10e51eadd2dd630ca389c93.svg',
            '/static/images/badges/medium-large.3a077c94d085b5a20276b08c1564b878a569f453af76e8ecfcd4f04a0048c31b.svg',
            '/static/images/badges/medium.25de8d2d0efef7bd723e00cdacde1f33d4c4a8056f215d3a6e557ce2cb54596b.svg',
            '/static/images/badges/meet.7ce078cb2381f8388d5eeffe6ad0773ae98bea511f0989ea875e1c43ab0193e5.svg',
            '/static/images/badges/microcks.cf60217abe4c271e3c2b9cbc7cd6253a1c60339d5fb84ee163b472b7acd2615e.svg',
            '/static/images/badges/microservices.e702a24a34168247e5133badfdce4f1e491204dc6a3c76008bf44265edc2583c.svg',
            '/static/images/badges/mongodb.93cd6a92c6353b05f721f3d511527abcb76cbe67ac5a4c179ee1dfe357ef1f2c.svg',
            '/static/images/badges/mqtt.86ef1ce5b4a85784a65337225a6e38a530d2867dfe081fb335e6c8c7b2e3f2dd.svg',
            '/static/images/badges/mremoteng.dff4258e86726b812e7538ef330dfff5005c1ce9292f84de5133dd172125cc89.svg',
            '/static/images/badges/mutiny.6876a6acd37985366524350c78eb2bfa02ba8a6805a118f1694d64f2c5756e64.svg',
            '/static/images/badges/myki.ade50b9e5eabd417a358152c0536160f3f21afc7a0858e4fc694833589e6f091.svg',
            '/static/images/badges/mysql.797b0a0c7f4f28bc1211141d3792d9bcf2ab4db42e460cfbac60d8f7a64be5ed.svg',
            '/static/images/badges/netlify.65130edff6449d923d6c8a7e0d58401e2c08817b44a68bb9f88759b4fa835e75.svg',
            '/static/images/badges/npm.97ff5dadccf8dd63b42ab8f2f7f239709123e72fb3fbf9c64ea2d586a519a92d.svg',
            '/static/images/badges/numpy.a150b06b31d8074c3da1912f61fd1dfc5f67ccdef4175e9e9045693b6a5fa042.svg',
            '/static/images/badges/ohmyzsh.4f52f4fe47e0741cd39c5602835f48d56b590d323d7eff46005d243f48d8795c.svg',
            '/static/images/badges/openapi.878c492efb8f3de35ef48bed7464a1e2c7242fd231af7b9dcb006753957aa16e.svg',
            '/static/images/badges/oss.ebd8475a105c691f9b71d04bf37e55977af7953f20d4bd6d2d487cd80572c802.svg',
            '/static/images/badges/overleaf.22c704eb8223e724deddf2c8b007f31abf002dc95fd8cfaadf0e1b9bec5dbdf5.svg',
            '/static/images/badges/pandas.9a461aa1830d3716ed2948f929b1e072d396066158dfa18eac9323bb15a152b4.svg',
            '/static/images/badges/pocket-large.310c76ceeadf28e0943abebceaed2705bd7d8235335b302bd7da3d288a24dab9.svg',
            '/static/images/badges/pocket.7d1464dc8548a385ad33e4723a506c17261177bd8ac532955c96f2766150eff4.svg',
            '/static/images/badges/postgresql.0edfa9b5cb2c6d6500639479f927bdda55766a1c379d47a930c38f153700a655.svg',
            '/static/images/badges/postman.0dd164837ec709f91603f9de08dbc6b36c00f3fb2ba7f41048c581e881e1c923.svg',
            '/static/images/badges/python.ad92ab4777e6b8b37f658426e059c2fa560d00297350900bfd764bf7d2cd1581.svg',
            '/static/images/badges/quarkus.8f9ebb51e717a4ab0328cc61ba0ebfd2d1fa366ecd00927afb89f81f9258c70b.svg',
            '/static/images/badges/quora-large.e19f4c0ba25ee91469da8bdf240719521ebe7df6cf5bdbd800292180399a6a57.svg',
            '/static/images/badges/quora.552c089ef738b151770ea45e9bff2e838025b0a54192ebf758c7ac66cb6790bc.svg',
            '/static/images/badges/rainbow.d763f9bff4dad03b3229896246c309d37002699a43dbb8318dfd508f70aed3df.svg',
            '/static/images/badges/reactivex.6c9f041f9b317633153c1dd2be04b44da96f0d75f10d1b13c9131224c84ebe7e.svg',
            '/static/images/badges/reactor.fb7bc1c7368003852d23167fde62342c77e75aeeb72f848c1ef342b18e98df78.svg',
            '/static/images/badges/reddit-large.74de7208777bf8f15e4d60ea84c3277a7c0daab5cd1205c3184432244e20f8f9.svg',
            '/static/images/badges/reddit.44495c4590b1cd5b07277fdeaa1852ede67d0169b86bffd924f9321d2aa52a78.svg',
            '/static/images/badges/redis.18af010e33885a030ec0b1c0b7b38ee3703dc2c1e4d8c44e23f9046bb955041c.svg',
            '/static/images/badges/rss-large.ba5266d0b8e2ab31567ca87eb2508f49d430186e93c9eecd772cbc1a2a598bcc.svg',
            '/static/images/badges/rss.f5064983335bf8059a8a614fce10da072f2bcc6f89486b69618b9f171169e27b.svg',
            '/static/images/badges/rxjava.7e0527a20d3345bedd19551545beacb772d76de7749764e962f6bc39b46491e2.svg',
            '/static/images/badges/slack.8da2451a866d0d289838095f41f542b4bacb757c9fe223f39635ab5659700585.svg',
            '/static/images/badges/slides-large.08242139362a541784d79632f3dd89e2536b4bd479be8d0ecd6052faf8dad18f.svg',
            '/static/images/badges/slides.eb6bd89429cc9e4653493f6b4b0223bee4af95fba89c3f7e7889b09d3c00f27e.svg',
            '/static/images/badges/sonarqube.9be9000cba75a71bd868f27058f49301c4cc86ed311bccc3f32fecc78c58b3e1.svg',
            '/static/images/badges/sonatype.ce2bf38d9f68ca00df1564b83890c67829d573a38992caed2891aff1d211d49f.svg',
            '/static/images/badges/speakerdeck-large.b0659c5529948ef6da6b4cd4f868d2e5eb8ebef0a9aad1ec7cf6114c3a3bcd88.svg',
            '/static/images/badges/speakerdeck.69dbebcf006025a0c03ae03909704aa973d391ce59b9da7c58c85ce646d0df7f.svg',
            '/static/images/badges/spotify.a1a81bb51c25b22604550d5d41a452f2f1ba0d4eb394afc8b79bc7afc044e9de.svg',
            '/static/images/badges/spring.7206b3bdcc09e070b831cc087c250b2487a387f3d414124b1c5683ba04efe77c.svg',
            '/static/images/badges/springboot.16027d2cbfddcd296847f601a60a9a0b476dc3750451a67764098a3ee13ec9b7.svg',
            '/static/images/badges/sql.e4a5accfa1545508500224f1633a413e18b0793ff55d367af4537e390baa96d0.svg',
            '/static/images/badges/stackoverflow-large.f361dfc12cd880a0a2c36633883df4cc5bd0d07e2493d6ffb8c7c78be7a36160.svg',
            '/static/images/badges/stackoverflow.9f139481ca4d3fc86e9f131a85db91081051bca2df440e31ff9498f82ce441d0.svg',
            '/static/images/badges/travisci.619f236a9460e7bedf5c36b9afb4dc9f09ca57758458cfb8b17bdba8ff3c4efa.svg',
            '/static/images/badges/twitter-large.e8f1e37b86e3c29f8c9b84be01610c417ade797facafa8964a1d54c41ecaf98c.svg',
            '/static/images/badges/twitter.1488a76a8e01f5a601080a9bdcee6d789b5ff1cd370c61ac1f81642b4a6a1499.svg',
            '/static/images/badges/ublockorigin.b9486ada5198f29b6f76c6623a9b1a7c0ce52ab6fccd15f78421cf80eb6d0c07.svg',
            '/static/images/badges/ubuntu.c0c7fde7edd08b737af26a49da0397480b980b66a7e120795182514c427221dd.svg',
            '/static/images/badges/visualstudiocode.8c72e6be5da84ffb6775f12f355f6c3ba14d453e3ba5f7ff78219a7d6e399496.svg',
            '/static/images/badges/visualvm.9d95ed946c6e1192538c3fbafa90ba1e747665c09719c59794c557bc2e3d9a13.svg',
            '/static/images/badges/windows.b1458840edb50f1079895f8b076c71ea47ac13a4881805ca60438ab9f5d21beb.svg',
            '/static/images/badges/windowsterminal.0a22b2b83f1c2ee3bfef80dd9d9a76d2dfd3d38fe4abfea868c41bb5ebd4864d.svg',
            '/static/images/badges/winds.d0bf5a7eb6393f037ad84d772eba6daf042c049e2aa14b8659dd3546755ac061.svg',
            '/static/images/badges/yammer.186faa0bb11f5d92b850f650a138f7129d46293a26277571115011bf671165b5.svg',
            '/static/images/badges/zulip.37b1f575d1478f098543b2907abcd768eb2c956a211268cded407a205866ec6d.svg',
            '/static/images/banners/banner-700x350.f354a8909946bac2051f2dfbe4b616465dcbd36f9e6f918f303f5161919c26b6.png',
            '/static/images/favicons/splash.f9c116e0f087ad82848c9cbf22b05e1e60e3369067f198462f4fbba1c6ceab82.png',
            '/static/images/favicons/android-chrome-192x192.f354a8909946bac2051f2dfbe4b616465dcbd36f9e6f918f303f5161919c26b6.png',
            '/static/images/favicons/android-chrome-384x384.8b4d4c18f540207ccc4a1521b3985d8c461322f0936d43bdb4ded6bbc61338d7.png',
            '/static/images/favicons/apple-touch-icon-57x57.2b832d5f10f995ba241cc19153cc7ce31dad306703d74c53500dce4d84bb4aa1.png',
            '/static/images/favicons/apple-touch-icon-72x72.c21da18cc0406087d2f6622c6df41603bbcb75700bf9cb6d6b07898f4a6bcc34.png',
            '/static/images/favicons/apple-touch-icon-76x76.0b62aefcc147fe677058dedba7bcc974f1b3c4b5fb6a10e14565dac8ea492750.png',
            '/static/images/favicons/apple-touch-icon-114x114.3c2adbf2aaa9bb45d0dbbd29e21d92cd2688fcbd88d75e46bf55a2200682b77e.png',
            '/static/images/favicons/apple-touch-icon-120x120.b8314c8014d93c38f7d153513a6a2acc148422cab18016ba1936f96b90e3001b.png',
            '/static/images/favicons/apple-touch-icon-144x144.2da56c055352fcc5d0976ed72d2559caac0969d21c6a866e4956c1ff2b47309f.png',
            '/static/images/favicons/apple-touch-icon-152x152.f10dbd81442f70c37fcfa4c797b97fbd1ec849e8752ba72542e2aef6f42582c1.png',
            '/static/images/favicons/apple-touch-icon-180x180.4de8581470b22f9b779e5f6bbc2192dfb16fec56aad6d0e411afe5161d5bfe64.png',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-700.eot?c7ca28c1c26c2656fc6ed0abe74f225a',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-700.svg?2845e3afa6b5bb361e0e48a70f85361a',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-700.ttf?3deb9ec367c8a2d053209de1a09b9f7f',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-700.woff2?2efeb8cab5dd5cfbeb1b234ff52e92e6',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-700.woff?808b38da042ebf59e5ce43a183fe1fa7',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-regular.eot?ca3370bdf6e789fa43d1d0ed4d622e0b',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-regular.svg?c95b63541bd0954a0425455b7c143af5',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-regular.ttf?4c505fe62dfdc2d9effa0c8ab3a342f9',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-regular.woff2?8d1f49af5684c0ea50272b9c4bdce0dc',
            '/static/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-regular.woff?8cf3014a5c56a67f3c607987874fec6d',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-700.eot?8cbf8c368716be890b21b4265dcb824a',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-700.svg?7f2494be906ca7598f86304ffd02c7c5',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-700.ttf?a0ee1c29d1f65ea7c2340c364efac0aa',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-700.woff2?f93d7fe2ea295d075238ac5a05e69280',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-700.woff?068f5b8b0c059aa3dcab748e16104afa',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-regular.eot?1fd15db6875e15fb08104d9dde404a83',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-regular.svg?c679910c75a37234d7ab1e48a1749a71',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-regular.ttf?fadad44509477be8cc9e28a57bd158b6',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-regular.woff2?65669d5fde094d1d8536436e8f895a27',
            '/static/fonts/fira-code-v8-latin-ext_cyrillic-ext_greek-ext-regular.woff?b4ca3fb9da6173b86e6701243fda0773',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700.eot?95e6030d18875ffb591eb3daaf5ee480',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700.svg?9f5a774538ba87b28526abd3e988eda8',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700.ttf?72ef36bba0e50b8e32f69ccb87f255b4',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700.woff2?17c283b4e785e073ec09dc72acebafac',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700.woff?213e8c892aa1af1d690179b37b53e35a',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700italic.eot?4433130c0b5095a567c984a630be6b34',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700italic.svg?e8ebd85a67afc08370d9efc453bdbaad',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700italic.ttf?2a171df3756211a9a51b804f9e7df4ec',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700italic.woff2?b12383177da0a97afd44a9706a776ce1',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700italic.woff?ac4cda64bbce08ab7db496a795159879',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-italic.eot?8ab3c12f95585ac56c937d8b313f9885',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-italic.svg?427628806fa443fac21286fb154def5f',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-italic.ttf?8f5a7f589621d959978364181290f95d',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-italic.woff2?eaa7773c89001e5b4bca5092c248df2d',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-italic.woff?391454f0890b0e45ba599308488a341a',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-regular.eot?22e09ab0780f820b1663b3619644eee3',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-regular.svg?ddaaf4901aa3a2fa8805a235a7790f1f',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-regular.ttf?883e9763b74b94e2b8afa0bc8a429936',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-regular.woff2?a9557eb451f17dcd8e687327ea9383a0',
            '/static/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-regular.woff?e15b8743b41a23082780aee5ee1ee9a9',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.eot?592643a83b8541edc52063d84c468700',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.svg?1d5619cd804367cefe6da2d79289218a',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.ttf?513aa607d398efaccc559916c3431403',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.woff2?ed311c7a0ade9a75bb3ebf5a7670f31d',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.woff?1a575a4138e5f366474f0e7c5bd614a5',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.eot?b0e2db3b634d1bc3928e127458d993d8',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.svg?c5d109be8edd3de0f60eb472bd9ef691',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.ttf?766913e6c0088ab8c9f73e18b4127bc4',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.woff2?b91d376b8d7646d671cd820950d5f7f1',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.woff?d1d7e3b4c219fde0f7376c6facfd7149',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.eot?0c6bfc668a72935760178f91327aed3a',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.svg?37bc7099f6f1ba80236164f22e905837',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.ttf?b9625119ce4300f0ef890a8f3234c773',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.woff2?d824df7eb2e268626a2dd9a6a741ac4e',
            '/static/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.woff?d745348d289b149026921f197929a893',
            '/static/fonts/vendor/flexslider/flexslider-icon.eot?9c9cb7a6055043933ba68854f521af45',
            '/static/fonts/vendor/flexslider/flexslider-icon.svg?10e8a5455c4522c48aa975eacd4f0023',
            '/static/fonts/vendor/flexslider/flexslider-icon.ttf?b4c9e5057989b9727a5df4e0a21af33c',
            '/static/fonts/vendor/flexslider/flexslider-icon.woff?f8b92f66539473eea649c8514eb836a0'
        ];
        this.host = `${self.location.protocol}//${self.location.host}`;
        console.info(`Host: ${this.host}`);
        this.OFFLINE_PAGE = '/offline/';
        this.NOT_FOUND_PAGE = '/404.html';
        this.CACHE_NAME = `content-v${this.CACHE_VERSION}`;
        this.MAX_TTL = 86400;
        this.TTL_EXCEPTIONS = ["jpg", "jpeg", "png", "gif", "mp4"];
        let lang = new URL(location).searchParams.get("lang");
        this.LANG = lang
    }

    canCache(url) {
        if (url.startsWith("http://localhost")) {
            return true;
        }
        const result = url.toString().startsWith(this.host);
        return result;
    }

    getFileExtension(url) {
        const extension = url.split('.').reverse()[0].split('?')[0];
        return (extension.endsWith('/')) ? '/' : extension;
    }

    getTTL(url) {
        if (typeof url === 'string') {
            const extension = this.getFileExtension(url);
            return ~this.TTL_EXCEPTIONS.indexOf(extension) ?
                null : this.MAX_TTL;
        }
        return null;
    }

    async installServiceWorker() {
        try {
            await caches.open(this.CACHE_NAME).then((cache) => {
                return cache.addAll(this.BASE_CACHE_FILES);
            }, err => console.error(`Error with ${this.CACHE_NAME}`, err));
            return this.scope.skipWaiting();
        }
        catch (err) {
            return console.error("Error with installation: ", err);
        }
    }

    cleanupLegacyCache() {

        const currentCaches = [this.CACHE_NAME];

        return new Promise(
            (resolve, reject) => {
                caches.keys()
                    .then((keys) => keys.filter((key) => !~currentCaches.indexOf(key)))
                    .then((legacy) => {
                        if (legacy.length) {
                            Promise.all(legacy.map((legacyKey) => caches.delete(legacyKey))
                            ).then(() => resolve()).catch((err) => {
                                console.error("Error in legacy cleanup: ", err);
                                reject(err);
                            });
                        } else {
                            resolve();
                        }
                    }).catch((err) => {
                        console.error("Error in legacy cleanup: ", err);
                        reject(err);
                    });
            });
    }

    async preCacheUrl(url) {
        const cache = await caches.open(this.CACHE_NAME);
        const response = await cache.match(url);
        if (!response) {
            return fetch(url).then(resp => cache.put(url, resp.clone()));
        }
        return null;
    }

    register() {
        this.scope.addEventListener('install', event => {
            event.waitUntil(
                Promise.all([
                    this.installServiceWorker(),
                    this.scope.skipWaiting(),
                ]));
        });

        this.scope.addEventListener('activate', event => {
            event.waitUntil(Promise.all(
                [this.cleanupLegacyCache(),
                this.scope.clients.claim(),
                this.scope.skipWaiting()]).catch((err) => {
                    console.error("Activation error: ", err);
                    event.skipWaiting();
                }));
        });

        this.scope.addEventListener('fetch', event => {
            event.respondWith(
                caches.open(this.CACHE_NAME).then(async cache => {
                    if (!this.canCache(event.request.url)) {
                        return fetch(event.request);
                    }
                    const response = await cache.match(event.request);
                    if (response) {
                        const headers = response.headers.entries();
                        let date = null;
                        for (let pair of headers) {
                            if (pair[0] === 'date') {
                                date = new Date(pair[1]);
                                break;
                            }
                        }
                        if (!date) {
                            return response;
                        }
                        const age = parseInt(((new Date().getTime() - date.getTime()) / 1000).toString());
                        const ttl = this.getTTL(event.request.url);
                        if (ttl === null || (ttl && age < ttl)) {
                            return response;
                        }
                    }
                    return fetch(event.request.clone()).then(resp => {
                        if (resp.status < 400) {
                            if (this.canCache(event.request.url)) {
                                cache.put(event.request, resp.clone());
                            }
                            return resp;
                        }
                        else {
                            return cache.match(`/${this.LANG}${this.NOT_FOUND_PAGE}`);
                        }
                    }).catch(err => {
                        console.error(`Error fetching ${event.request.url} resulted in offline`, err);
                        return cache.match(`/${this.LANG}${this.OFFLINE_PAGE}`);
                    })
                }));
        });
    }
}

const pwa = new Pwa(self);
pwa.register();
