import { Section } from 'astro-boilerplate-components';
import React, { useState } from 'react';

interface InstagramPost {
  id?: string;
  media_url?: string;
  caption?: string;
  permalink?: string;
  timestamp?: string;
  media_type?: string;
  thumbnail_url?: string;
}

const InstagramFeed: React.FC = () => {
  // Hardcoded data
  const posts: InstagramPost[] = [
    {
      id: '18014147405093268',
      caption:
        "Short recap of the @subvibesociety show I had the pleasure of VJing last weekend. Headliner @levitationjones and all the other supporting acts threw the f*ck down. I have mad respect for everyone who performed and everyone in attendance. Thank you for showing love and interest in my work throughout the night - you don't understand how far such kind acts/words can go. I can't wait to see what the next chapters in life will bring me.\n~Become the Experience~\n.\n.\n.\n#vj #resolume #resolumearena #projectionmapping #visualjockey #pixelpushing #digitalcreation",
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/A843AA4F597945268A2ABC3B41E0B799_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=108&vs=2996884680474393_4100884752&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BODQzQUE0RjU5Nzk0NTI2OEEyQUJDM0I0MUUwQjc5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHMGZSUnFOSE9IWXBab0NBSncyMUYzM3lqTjBicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJrDsrLyyh4NAFQIoAkMzLBdAMIhysCDEnBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYBaZ4qE76Tq3MmIe1GpquzdeN1syMmoE2temEgJ6Rw_2Q&oe=6644935F&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C6W6S1fPnRK/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/441076085_710086407761082_2567605036439229988_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=cLB_AgVV7F0Q7kNvgGTEMFz&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDboRvDeFhipKn8lQdlyXgG0ghTVyA0Se6iEhPga648GQ&oe=664870E7',
      timestamp: '2024-04-29T20:04:26+0000',
    },
    {
      id: '18291676645094692',
      caption:
        "I wonder what it's thinking about.\n~Become the Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork",
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/DA49F54E0B702B111FE4A3146191E287_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=106&vs=307282475549425_2222620472&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EQTQ5RjU0RTBCNzAyQjExMUZFNEEzMTQ2MTkxRTI4N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJMWstUm1DV0N1Q0tBa0tBSHB6ZjQzNW1Oa2VicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoiWt5D4jbI%2FFQIoAkMzLBdAJAOVgQYk3RgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAE-iinscjjX5HkQfGr6samvcuzrjYKFawgjKaXN09TLA&oe=66449672&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C5yVumfA4AQ/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/437778543_3750760171870785_6345700678169592611_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=F825gLCby1QQ7kNvgFgcYz-&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDp7n30DUz5mniLhEYPcvEhQRcxgPFa1Z9EdLoHC0u3TA&oe=66488915',
      timestamp: '2024-04-15T15:07:21+0000',
    },
    {
      id: '17937335075813520',
      caption:
        'Transforming art into more art.\n~Become the Experience~\n.\n.\n.\n#resolume #resolumearena #projectionmapping #projector',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/74415A92B9B0EFC3E77158A997BF9F87_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&vs=1728667640992766_584571014&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83NDQxNUE5MkI5QjBFRkMzRTc3MTU4QTk5N0JGOUY4N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEQWNEQnBwdVY0amV5TUVBT3VlOF9BaUtqNXZicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJtif6rmPpdo%2FFQIoAkMzLBdAMYhysCDEnBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYC2h3Z1dZy6zqK2KxKKZuT3_IOuWaioYxnlUsq0h3mfbA&oe=66449240&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C5f7fNCg8cb/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/435621044_966757895053258_5635383471890612010_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZdCWlCKCOW4Q7kNvgG6Ea1p&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDRP9y3PyDYd_l2EKfGfF26hEbe1pgCGgjxzblpeVum5g&oe=664890D8',
      timestamp: '2024-04-08T11:31:35+0000',
    },
    {
      id: '17990664881439286',
      caption:
        'Got to show off some of my mixing skills last weekend. My love for this type of scene continues to grow especially when I get to curate parts of it.\n.\n.\n.\n#vj #resolume #resolumearena #visuals #rave #visualjockey',
      media_type: 'CAROUSEL_ALBUM',
      media_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/435251693_1149705246340704_2497543714706679059_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=cDFsP8UvvQYQ7kNvgEowy94&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAt2EXG-xvocXOnQWKmWHmWnpeHZRSMfKvCctVW4OKdZw&oe=66487A84',
      permalink: 'https://www.instagram.com/p/C5a-MuYgQW9/',
      timestamp: '2024-04-06T13:18:41+0000',
    },
    {
      id: '17992238306619844',
      caption:
        'Downloaded stable diffusion with the deforum extension. There is a ton to learn with this software but the results can be insane. Here are some clips I made with simple dragon prompts.\n~Become the Experience~\n.\n.\n.\n#stablediffision #stablediffusion_art #deforumstablediffusion #cgi',
      media_type: 'CAROUSEL_ALBUM',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/434521186_404293909017702_4724792633639637341_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=3W8ClaMa9sMQ7kNvgH8N0OG&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAWliHBVmgYP3Ie089zjpIJm9QGAWXZOJ9Qh5jQeiAZzg&oe=664890DF',
      permalink: 'https://www.instagram.com/p/C48rdBPvbqa/',
      timestamp: '2024-03-25T18:57:40+0000',
    },
    {
      id: '17907207893936187',
      caption:
        "Open up and see what's inside.\n~Become The Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork",
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/D746696FB8C0BAAD7C2088261201B495_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&vs=7324333394332037_427189853&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9ENzQ2Njk2RkI4QzBCQUFEN0MyMDg4MjYxMjAxQjQ5NV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMZnB1eGk4WU05UEpFNExBTi1QOXdrNHpFMWVicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJuCKzuPjk45AFQIoAkMzLBdANNnbItDlYBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYC7d1KA5ibo6C243g1EmTqXWoFb5ZMU2gxbivgLpt5G4A&oe=66447367&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C4qghEwAAXw/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/432725454_1583488468891616_830722712248416637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=iYhV4RoO6MUQ7kNvgFo6fVA&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA6HRSDI9DYPtjuICA8hiL23g1LwZwxJVhrwrs_bKJ_0Q&oe=66488875',
      timestamp: '2024-03-18T17:39:24+0000',
    },
    {
      id: '18020325139935765',
      caption:
        'Did some live mixing to @theradiatepositivityproject Episode 003 @cobi.wav mix!\n~Become The Experience~\n.\n.\n.\n#vj #resolume #resolumearena #projectionmapping #visualjockey',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f2/m69/An-BG8Uy9uPkP_GGL17fq0jZKqAiY6ZQXFkRQ1DjpY3h3vP-VTF3N3nPoRRdz2U90gnJecKyJmlsHV1ScudjL4Ww?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNDMyLmRhc2hfYmFzZWxpbmVfM192MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=103&vs=436504515572441_848852057&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSUNXbUFDYk9nUnltTmdEQU1HdTBKbjVMeWtWYnFDQkFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJQ1dtQURiZkh4WEctd0FBRldOQjlxQUd3cElicUNCQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvrPmLnxseU%2FFQIoAkMzLBdArBoBiTdLxxgSZGFzaF9iYXNlbGluZV8zX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYANR1561x4gW9YxKpQBQ0P17m6-PxJTUMxbPPdjSGniYw&oe=66449A96&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C4mdj7oMDFs/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/433382638_868658858348792_6575972820201083052_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=J_SD5NVLK1kQ7kNvgGGKdGx&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDijBpEnM3xZyfkEhVO4AHPbzonUN-b4qE6zYlSitm1xg&oe=66487784',
      timestamp: '2024-03-17T03:53:26+0000',
    },
    {
      id: '18000517067248791',
      caption:
        'Made this audio visualizer a while back in Blender 3D.\n~Become the Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/5E49BC19E763BF8A7525EE1E62EA3DA5_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=106&vs=774388727545069_3630568861&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC81RTQ5QkMxOUU3NjNCRjhBNzUyNUVFMUU2MkVBM0RBNV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMcjV4QmxOaExCLVBIOEJBQXZzOFJMSF9jNDRicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqKdpprer4hBFQIoAkMzLBdAMtS8an752xgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYDsbsMqzQgmsPJfRNxrkoCnc1UOBqXa2rUY95DnF39iYQ&oe=6644A189&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C4T-FO8v5yd/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/432447107_1122027522321677_4282858321447244351_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=0xiqOwQpTzQQ7kNvgHGjH0M&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDJK3wDqOShxpCJQopq2DDmOHAH5VhdgaEVrqsFTO2m-g&oe=66486124',
      timestamp: '2024-03-09T23:31:46+0000',
    },
    {
      id: '18005429045368912',
      caption:
        'Messing around with some projection mapping and slice transformation.\n~Become the Experience~',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/4C4F8D8093096A7A1EABD54711C268AD_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&vs=953201222832473_3743165700&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC80QzRGOEQ4MDkzMDk2QTdBMUVBQkQ1NDcxMUMyNjhBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHTU1xeGxXUGJBX2RWMEJBQlNiLWJHRzFrQTJicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsLomaLR%2FLVBFQIoAkMzLBdAJVBiTdLxqhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYC_YfW75JLWWFY1lOI9sVCH-_TGpjgBoyyIRp4kzbl0og&oe=66446FDC&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C3018PxPGYH/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/430144288_415640484304167_5082131763793469767_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=TDy7uCYuuMYQ7kNvgE8N9Wx&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBa5Q4SL34NhGr8qTZaSKaFgW6cwkxi199spHb5z1QilQ&oe=66488B58',
      timestamp: '2024-02-26T21:24:10+0000',
    },
    {
      id: '18065596096494331',
      caption:
        'Glass rose.\n~Become the Experience~\n.\n.\n.\n@casraven3d @xppen.spain #casxppenfebruary',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/284F008B8C98C43AF7C34978CCE8AC9C_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=101&vs=374248168797696_33994808&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8yODRGMDA4QjhDOThDNDNBRjdDMzQ5NzhDQ0U4QUM5Q192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dETmlpUm16UU1XWHVvMEVBTTlYNjdLRFJoNUticV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqrqjaDv0bs%2FFQIoAkMzLBdAJAQYk3S8ahgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYA6SjTW5trLhidl23lyU-SUjagbnN1PlPvA0lheSa7FRg&oe=664489D6&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C3nvAHhv9P8/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/429286063_927904348539930_850801109200214065_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=IvWRO_eI-GsQ7kNvgHOrBHO&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAVKf3o99E56im1Y3A4-4B_AWK05ShtZcFdzwo_Vxt1Gg&oe=66488D4A',
      timestamp: '2024-02-21T19:18:52+0000',
    },
    {
      id: '17984925098469395',
      caption:
        'Viewport vs. Render. Seeing if this full screen style gets more interactions.\n~Become the Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/D64F190D063860A61BF1C7318B000A80_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&vs=1573066483529578_3646887414&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9ENjRGMTkwRDA2Mzg2MEE2MUJGMUM3MzE4QjAwMEE4MF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFQS1leGxYQ24zNmk4QURBRms4LWVNQ203MXNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJr6gyIqP38A%2FFQIoAkMzLBdAGt0vGp%2B%2BdxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAm0S47BlK0285LdmdBjx1olfX9XDoQQlLgb1cvLzloHw&oe=66447633&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C3XnetIAz0E/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/427264437_404996545387041_7917860800536858222_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=1cX3ckUJot0Q7kNvgF-0eFH&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDvKCLi8k5_5oP1ioPvZaHP8mio5p6lxpWlyXEtBJS0Yw&oe=66488287',
      timestamp: '2024-02-15T13:01:24+0000',
    },
    {
      id: '18025355539805214',
      caption:
        'It’s crazy what simple lighting and textures can do.\n~Become the Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork #becometheexperience',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/714D7740B089FC63C27F61ED25031484_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=109&vs=923188522509416_1421065276&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83MTRENzc0MEIwODlGQzYzQzI3RjYxRUQyNTAzMTQ4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBb0JheGw2OEVUUWY2a0NBQUR6OEtlTUZ1QmlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqbchtPO8blBFQIoAkMzLBdAGw9cKPXCjxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYD-p6ghEl84xFENrNSaeOO5KhyPshpTeplixnXMNsgJPA&oe=664477E1&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C3Tm8DAvci1/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/426723694_3695214970763635_1280746091953477329_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=2woqUnnbhewQ7kNvgHF7QR2&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAmnJNwYhsOgnhc9PnAQSuL4CmmdiCLvczQu1KWxfjnqw&oe=66485E45',
      timestamp: '2024-02-13T23:39:35+0000',
    },
    {
      id: '17856880473097577',
      caption:
        'Made my first Unreal Engine 5 project following a Magnet VFX tutorial. This is such a powerful software that I cannot wait to learn more of. Realistic environment design is right up my alley. Also used Unreal Engine to render out in PNGs and blenders video sequence to process them into a video!\n\nThere are a ton of software out there, don’t hesitate to expand on your knowledge! The limitations are endless.\n~Become the Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork #unrealengine5 #ue5',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/8B48DDDEC52A5A4D87125FD6AB4618AE_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&vs=1858695234572856_26239012&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84QjQ4RERERUM1MkE1QTREODcxMjVGRDZBQjQ2MThBRV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dLclZHeG1yODAwdUlUOERBTFQ4TDlJOVVqdzdicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoqx1bWBzotAFQIoAkMzLBdAFAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYA9uKQDW5jk3En-SzCvP725iUve-1wu575C-wyxgbZpIw&oe=664489F6&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C2VZgdMvYUf/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/420464553_1126639281911708_3032391613216581949_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=o_pODffNgMoQ7kNvgHAXZel&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCBJ2Z66c3z1luSKyzOWBe91c1jui48lWXj9MG4pyS19w&oe=66487C8D',
      timestamp: '2024-01-20T19:51:25+0000',
    },
    {
      id: '17944936112654280',
      caption:
        'Bringing ideas to life. Worked directly with the client on this one to bring their visions to life. Excited to see what other ideas I can make a reality.\n~Become the Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork',
      media_type: 'CAROUSEL_ALBUM',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/420028181_359734796812114_2477111529873381635_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=_tfdpjtg6EoQ7kNvgH0d0mt&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYD30KphoobGWex5fvBpHlD0C3lKyIvejzc9jwiN0EFv4w&oe=664871D7',
      permalink: 'https://www.instagram.com/p/C2QUf0YP3VO/',
      timestamp: '2024-01-18T20:27:43+0000',
    },
    {
      id: '18023351824767888',
      caption:
        'Throwing together a bunch of different techniques I’ve learned over the year.\n~Become the Experience~\n.\n.\n.\n#cgi #blender #blender3d #render #3ddesign #3dartist #cgiart #3dmodelling #3dart  #blenderartwork',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/4C4614D03066C6EFF32089F40C4BCE89_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNjA4LmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&vs=1586120215467133_3359236538&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC80QzQ2MTREMDMwNjZDNkVGRjMyMDg5RjQwQzRCQ0U4OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOZlkteGpMUWNnVUJ6WURBSGphenN5NFdVRTNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoyasr6slpdAFQIoAkMzLBdANAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYARtDWJd0GSWtg6bh4wkLbAGclyFaVUdD3bJE2r2lRRlQ&oe=66447749&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C2AmNkBg9nu/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/419062469_1401466210500064_9150261511028345481_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=YWJGjk4lH-0Q7kNvgEEfp6z&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBEAl9SDLnwAtsX6j_62pR-BXtdPecN0zcAQifcjCby7w&oe=6648922F',
      timestamp: '2024-01-12T17:56:19+0000',
    },
    {
      id: '17847703476133227',
      caption:
        'Been cranking out some work for the homies and their upcoming shows. These came out crispy and I can’t wait to see them in action 🤌🏽 If you want some custom work done don’t hesitate to hit my DM’s.',
      media_type: 'CAROUSEL_ALBUM',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/418011357_2410863142452458_5749523814955703877_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=CCqyF3TWyw8Q7kNvgFUOnyS&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCPu4tvowZjF8wqheE4dNU32YS83icp84eRxqrbNyy3vQ&oe=66486CBE',
      permalink: 'https://www.instagram.com/p/C193Ak8A2Ay/',
      timestamp: '2024-01-11T16:23:42+0000',
    },
    {
      id: '18219887029259254',
      caption:
        'Some recent client work for the very talented @nito.wav Slide on into those DM’s if you’re interested in working together!',
      media_type: 'CAROUSEL_ALBUM',
      media_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/416648669_386982737160981_7251411176095678101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=Iu59z-H28vAQ7kNvgGuIgtd&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA2V1UQGjaIChdaj_HZh4CHJ4sz183H2kaFgYrkD9j0jQ&oe=66488A12',
      permalink: 'https://www.instagram.com/p/C1uhX4XgU0m/',
      timestamp: '2024-01-05T17:26:03+0000',
    },
    {
      id: '17986871606564161',
      caption:
        'Going into 2024 with a whole new outlook on life. Cheers to a good year, and cheers to many more!\n\n~Become the Experience~\n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/F64465404531CD41E4BE058873AC838C_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=105&vs=380142701219799_3484524883&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GNjQ0NjU0MDQ1MzFDRDQxRTRCRTA1ODg3M0FDODM4Q192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dCdG4wQmhJa25SYkp6Y0RBTkcwRndmeHZqQUlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJr6cvL7kkvU%2FFQIoAkMzLBdAJAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYCbbfIVFFvZQz_bbvbe_fKDtKW3dGRCUghNERd1_klQqg&oe=664498C6&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C1kp24avqmZ/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/416163536_1049877729463496_4644459752496612437_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=jxloCRedZzQQ7kNvgHOGHbo&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBexZPKcW_JNpQFwf5SVU5kmKfJgUeXsjkRNpwgAVu7jg&oe=66488CDD',
      timestamp: '2024-01-01T21:30:00+0000',
    },
    {
      id: '18002625425511141',
      caption:
        'Followed this one to a T, look at my Christmas Tree! 🎄 @casraven3d @xppen.spain #casxppen3d \n<Become the experience>\n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/FE4733774F02896A5516250B2967B982_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=107&vs=1705737336567310_3791714051&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GRTQ3MzM3NzRGMDI4OTZBNTUxNjI1MEIyOTY3Qjk4Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHcGxuQmhSc2tPRVZOVUFBRUdoLUhya0NBSUNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsbwxoHxyIZAFQIoAkMzLBdAFAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAbwUg4jjFl82NraFHOqD7BgaC6tU9U4LW44JpJUJk4zw&oe=66449758&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C1I0Po1sstX/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/412117225_201995549648677_1199881934897248520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=Qp3l3oeiGTAQ7kNvgFHTtS6&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBYxf87qifTTOAHCBZa1IDv6-gS0rGDNT-4jqRX6qoIJQ&oe=66489244',
      timestamp: '2023-12-22T02:01:55+0000',
    },
    {
      id: '17992463441439826',
      caption:
        'Some more art for the @casraven3d and @xppen.spain #casxppen3d challenge. Made this one a still because my computer had difficulties rendering the particle system for the fuzz look.\n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'IMAGE',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/411992886_2899729486833679_4756455466084043559_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=LWYmzv4bYgIQ7kNvgH3OtYp&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDbNxwvgAbCZtOZJTHDwb0Bp1C12Acd161_70e3WlPZfQ&oe=66486703',
      permalink: 'https://www.instagram.com/p/C1FyJ9YPh8t/',
      timestamp: '2023-12-20T21:43:50+0000',
    },
    {
      id: '18024317863889799',
      caption:
        '@casraven3d partnered up with @xppen.spain to give away some drawing tablets for the holiday season in a little holiday competition! Here is my rendition on the candy cane tutorial #casxppen3d \n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/A8403DE332D9E2E50445070C9C747DB8_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=101&vs=1318085985551932_232111664&_nc_vs=HBkcFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BODQwM0RFMzMyRDlFMkU1MDQ0NTA3MEM5Qzc0N0RCOF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaWhOyZqdTwPxUCKAJDMywXQCQAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdQAA&ccb=9-4&oh=00_AYBoFfb6hnNJWYDCvAwnMtKRNVrsfJgKGPg3TWvBC2UfZA&oe=664486C4&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C1CvaFuAmkP/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/412613960_1095484418567927_4899521378748172908_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=glsFb5ApLHMQ7kNvgGtBQzS&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCvCXvHEZZwP_HvWwM8OpAsIFzDCBhy3ZU_RDJc4zjMjQ&oe=66488CD2',
      timestamp: '2023-12-19T17:27:09+0000',
    },
    {
      id: '18218745670256202',
      caption:
        'Nothing beats the beauty that comes from snow falling.\n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/6B4A8F61B007E0846DC6C7E57268C087_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=108&vs=1089153722257891_1992779244&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC82QjRBOEY2MUIwMDdFMDg0NkRDNkM3RTU3MjY4QzA4N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHa3hsUmhTSFBqWE5WVUJBQkpxRVlqUF90QnlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoDUg7rm1fg%2FFQIoAkMzLBdALgAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAidwBVfO-avraxbvy18WLfFzq0l4NRzNyaSv5z03expQ&oe=664490E7&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C0_7Z2Ag83L/',
      thumbnail_url:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/412544612_382084570948498_2460817949090166433_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=502jOjacpPMQ7kNvgHbFZ-y&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBNqV-2hBdOMe4eEFMnQ1pkNbpSZi-aqtFpyKbb_hTPXA&oe=664894C1',
      timestamp: '2023-12-18T15:14:12+0000',
    },
    {
      id: '17980452992412216',
      caption:
        'WIP. Trying to become more comfortable posting unfinished work. Have to start documenting the process as well. That way everyone can see the progression! For now - here is a still.\n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'IMAGE',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/408265502_867447581826542_5663951667827822799_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=_VKWQUNS6LEQ7kNvgGIEGXM&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBuqKF7NT3sy2Su8BeVwHcw3JAui_sv2zuXidiT6EDiuQ&oe=664876F5',
      permalink: 'https://www.instagram.com/p/C0mvHEfP2sn/',
      timestamp: '2023-12-08T20:20:46+0000',
    },
    {
      id: '18014770936987107',
      caption:
        'Pistons.\n~Become the experience~\n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/1044B50A3646D4A4880CB99894E19FA7_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=108&vs=1909788086085662_846409896&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8xMDQ0QjUwQTM2NDZENEE0ODgwQ0I5OTg5NEUxOUZBN192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQNThVQmdnb1F0bGZCTUJBQ2NiS3pUS1U2MFBicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqSCmMTW3Og%2FFQIoAkMzLBdAJAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAMZjyEGAUy07P0X3HMGPoEu4bGKeW_RiEIjxq0ibs7Gw&oe=66446B87&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C0hHkc5g6Zz/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/407711849_1045575353312473_7987287868463450870_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=j-SioIYM-lUQ7kNvgGmIKNr&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBcwnJWXNtQ22kWJf90S1FxH6CaGvRwjALf6efFDcCfXw&oe=66488710',
      timestamp: '2023-12-06T16:02:19+0000',
    },
    {
      id: '18009360970921241',
      caption:
        'Upgraded Resolume to Arena and now I can projection map. I have a nice wall in my apartment that I’ve been practicing on. Hope to use these newly obtained skills for bigger set designs one day.\n\nSong: As Above So Below by @neekobass\n.\n.\n.\n#3dmodeling #3dart #cgi #cgiart #3d #blender #blender3d #digital3d #cgartist #rendering3d #3ddesign #blender3dmodel #3dartist #blendercycles #cgiart #3drendering #3dmodelling #rendering3d #blenderartwork #worldofblender #vj #vjing #resolume #resolumearena #projectionmapping',
      media_type: 'VIDEO',
      media_url:
        'https://scontent-ord5-2.cdninstagram.com/o1/v/t16/f1/m82/A64A9346AC4B762FB6B9E590D29F8285_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=105&vs=1058952672091693_1619220727&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BNjRBOTM0NkFDNEI3NjJGQjZCOUU1OTBEMjlGODI4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dObHlWeFVwaFNqaE5CNEJBQzVvX0tzSjVXWTZicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvbWhtCjkfc%2FFQIoAkMzLBdASMQ5WBBiThgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYBs85Xd79MlBkSQw6Zw59Nej7WRJlGcVm5aMeeZynCebw&oe=6644A033&_nc_sid=1d576d',
      permalink: 'https://www.instagram.com/reel/C0UUBhGgpbk/',
      thumbnail_url:
        'https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/405527001_1070942477260504_2907000892996852495_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=JDd8GrA2b-4Q7kNvgHbdTfx&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAlBRHQdnoTAieuz9LMXL3b70IDCBaKV8K4THTPuYKaTA&oe=66486F06',
      timestamp: '2023-12-01T16:38:13+0000',
    },
  ];

  // Grouping posts into rows
  const groupedPosts: InstagramPost[][] = [];
  for (let i = 0; i < posts.length; i += 3) {
    groupedPosts.push(posts.slice(i, i + 3));
  }

  // State for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(posts.length);

  // Pagination handlers
  const goToNextPage = () => {
    console.log('Next button clicked');
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const goToPrevPage = () => {
    console.log('Previous button clicked');
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Verify button visibility and accessibility
  console.log('Current Page:', currentPage);
  console.log('Total Pages:', totalPages);

  return (
    <Section title="Recent Work">
      <table className="mx-auto border-collapse">
        <tbody>
          {groupedPosts
            .slice(currentPage * 3, (currentPage + 1) * 3)
            .map((row: InstagramPost[], rowIndex: number) => (
              <tr key={rowIndex} className="h-56">
                {row.map((post: InstagramPost) => (
                  <td key={post.id} className="border-2 border-gray-300 p-3">
                    <a
                      href={post.media_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width={260}
                        height={224}
                        className="w-full hover:opacity-90"
                        src={post.thumbnail_url}
                        alt="Instagram post"
                      />
                    </a>
                  </td>
                ))}
                {/* Add empty cells if the row has less than 3 posts */}
                {row.length < 3 &&
                  Array.from({ length: 3 - row.length }).map((_, index) => (
                    <td key={`empty-${index}`} />
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={goToPrevPage} disabled={currentPage === 0}>
            Previous
          </button>
          <span style={{ margin: '0 10px' }}>
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      )}
    </Section>
  );
};

export default InstagramFeed;
