const fashionData = [
    {
        companyName: 'fastColors',
        gender: 'male',
        type: 't-shirt',
        price: '$284',
        size: 'S,M,L,XL,XXL',
        src:'https://rukminim1.flixcart.com/image/660/792/kjuby4w0/t-shirt/s/x/z/m-fc4058-fastcolors-original-imafzbj546kdvbh8.jpeg?q=50'
    },
    {
        companyName: 'peter england',
        gender: 'male',
        type: 'shirt',
        price: '$834',
        size: 'S,M,L,XL,XXL',
        src:'https://rukminim1.flixcart.com/image/660/792/kpzt7680/shirt/t/b/x/40-pusfusspl88479-peter-england-university-original-imag43zjqhjecjfv.jpeg?q=50'
    },
    {
        companyName: 'Helmont',
        gender: 'male',
        type: 'shirt',
        price: '$834',
        size: 'S,M,L,XL,XXL',
        src:'https://rukminim1.flixcart.com/image/660/792/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50'
    },
    {
        companyName: 'Helmont',
        gender: 'male',
        type: 'shirt',
        price: '$834',
        size: 'S,M,L,XL,XXL',
        src:'https://rukminim1.flixcart.com/image/660/792/kl2mljk0/t-shirt/a/3/k/4xl-tblhdfulmask-lion-tripr-original-imagy9tcx7q25wym.jpeg?q=50'
    },
    {
        companyName: 'Surhi',
        gender: 'male',
        type: 'shirt',
        price: '$399',
        size: 'M,XL',
        src:'https://rukminim1.flixcart.com/image/660/792/kc0u7bk0/shirt/k/a/a/m-pk19sh09g-surhi-original-imaft8vgvhmhbhsy.jpeg?q=50'
    },
    {
        companyName: 'tripr',
        gender: 'male',
        type: 't-shirt',
        price: '$279',
        size: 'S,M,L,XL,XXL',
        src:'https://rukminim1.flixcart.com/image/660/792/ksgehzk0/t-shirt/i/l/3/s-togrwtylrn-d39-tripr-original-imag6yu2jhqfxhjg.jpeg?q=50'
    },
    {
        companyName: 'seven rocks',
        gender: 'male',
        type: 't-shirt',
        price: '$261',
        size: 'S,M,L,XL,XXL',
        src:'https://rukminim1.flixcart.com/image/660/792/kf75fgw0-0/t-shirt/8/8/h/xxl-t325-wrwh-seven-rocks-original-imafvpbgtqv66tpu.jpeg?q=50'
    },
    {
        companyName: 'tripr',
        gender: 'male',
        type: 't-shirt',
        price: '$265',
        size: 'S,M,L,XL,XXL',
        src:'https://rukminim1.flixcart.com/image/660/792/knj7wcw0/t-shirt/c/o/p/m-tlorblhenful-d37-tripr-original-imag2747grvpz4gq.jpeg?q=50'
    },
    {
        companyName: 'leelavati',
        gender: 'female',
        type: 'saari',
        price: '$279',
        size:'6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/k5y7tzk0/sari/b/x/q/free-vs-197-blue-leelavati-original-imafzgnpqee8mppa.jpeg?q=50'
    },
    {
        companyName: 'ksevencreation',
        gender: 'female',
        type: 'saari',
        price: '$401',
        size:'6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/kflftzk0-0/sari/o/y/c/free-hitesh2series-fumvel-unstitched-original-imafwypg4fwky3a7.jpeg?q=50'
    },
    {
        companyName: 'anand',
        gender: 'female',
        type: 'saari',
        price: '$266',
        size:'6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/keaaavk0-0/sari/u/j/a/free-as-1152-1-anand-unstitched-original-imafuzuhfjbz7jh5.jpeg?q=50'
    },
    {
        companyName: 'leelavati',
        gender: 'female',
        type: 'saari',
        price: '$499',
        size:'6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/knj7wcw0/sari/m/u/v/free-vs-5067-leelavati-unstitched-original-imag26qzv6guygnk.jpeg?q=50'
    },
    {
        companyName: 'sarilatest',
        gender: 'female',
        type: 'saari',
        price: '$449',
        size:'6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/k12go7k0/sari/p/h/c/free-bd030-bollydoll-designer-original-imafgjen5kwbudbm.jpeg?q=50'
    },
    {
        companyName: 'shopershopee',
        gender: 'female',
        type: 'saari',
        price: '$575',
        size:'6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/k66sh3k0/sari/5/t/8/free-pari-24-maroon-dharm-enterprises-original-imafbb2hvzxqhs3x.jpeg?q=50'
    },
    {
        companyName: 'anand sari',
        gender: 'female',
        type: 'saari',
        price: '$267',
        size:'7 m',
        src:'https://rukminim1.flixcart.com/image/660/792/kay9bbk0/sari/a/s/z/free-1262-5-kashvi-sarees-unstitched-original-imafsepbpnpbxgsz.jpeg?q=50'
    },
    {
        companyName: 'saara',
        gender: 'female',
        type: 'saari',
        price: '$267',
        size:'5.5 m',
        src:'https://rukminim1.flixcart.com/image/660/792/kqpj4i80/sari/y/v/w/free-2019s121-saara-unstitched-original-imag4nxhvy9k2zcy.jpeg?q=50'
    },
    {
        companyName: 'fashion day',
        gender: 'female',
        type: 'saari',
        price: '$524',
        size:'6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/k4ss2a80/sari/s/e/b/free-1051b-fashion-day-original-imafnmt93zgkktmz.jpeg?q=50'
    },
   
    {
        companyName: 'fab teg',
        gender: 'child',
        type: 't-shirt',
        price: '$599',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/jmxrwy80/kids-t-shirt/s/7/x/9-10-years-boys-6c-tshirts-09-ml-kiddeo-original-imaf9pe4gzkwrkxa.jpeg?q=50'
    },
    {
        companyName: 'chandadrika',
        gender: 'child',
        type: 'pilice',
        price: '$380',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/kh6lg280/kid-costume-wear/k/c/6/84-cpgl001a-ips-chandrika-96-original-imafx98tfzqxdqr9.jpeg?q=50'
    },
    {
        companyName: 'ftc fabrics',
        gender: 'child',
        type: 'kanha',
        price: '$179',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/kc0u7bk0/kids-ethnic-set/j/j/n/3-4-years-whitejabla-ftc-fashions-original-imaft8pzfzegxtyb.jpeg?q=50'
    },
    {
        companyName: 'zadmus',
        gender: 'child',
        type: 't-shirt shorts',
        price: '$599',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/k5wse4w0/kids-apparel-combo/t/j/m/6-12-months-jb-2199w-zadmus-original-imafzgv54hfyuaay.jpeg?q=50'
    },
    {
        companyName: 'ftc fashions',
        gender: 'child',
        type: 'kurta',
        price: '$189',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/kqse07k0/kids-ethnic-set/2/r/y/5-6-years-aqua-ftc-fashions-original-imag4qyjzt35zsbw.jpeg?q=50'
    },
    {
        companyName: 'gkfashion',
        gender: 'child',
        type: 'midi',
        price: '$199',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/ktbu6q80/kids-dress/l/w/k/15-16-years-skjir-gkidz-original-imag6pf6st2dzymw.jpeg?q=50'
    },
    {
        companyName: 'ftc fashions',
        gender: 'child',
        type: 'maxi',
        price: '$198',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/k5r2mq80/kids-dress/g/g/h/10-11-years-multi-ftc-fashions-original-imafzde86edxjfrp.jpeg?q=50'
    },
    {
        companyName: 'ftc fashions',
        gender: 'child',
        type: 'suit',
        price: '$479',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/k3khevk0/kids-apparel-combo/h/h/7/4-5-years-fc012-182grey-fourfolds-original-imafmnc6pczj3qym.jpeg?q=50'
    },
    {
        companyName: 'ftc fashions',
        gender: 'child',
        type: 't-shirt',
        price: '$574',
        size:'0-1 m,1-3 m,3-6 m',
        src:'https://rukminim1.flixcart.com/image/660/792/kay9bbk0/kids-t-shirt/6/r/p/6-7-years-kuctshrt119-kuchipoo-original-imafseneg9dhf4xr.jpeg?q=50'
    },
]
export { fashionData }