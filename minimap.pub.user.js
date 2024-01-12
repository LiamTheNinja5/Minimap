// ==UserScript==
// @name         PixelAtlas - Minimap
// @namespace    http://tampermonkey.net/
// @version      0.13
// @description  Minimap for PixelCanvas
// @author       Exel80#0001 & olegispe#2453
// @match        http://pixelcanvas.io/*
// @match        https://pixelcanvas.io/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://use.fontawesome.com/releases/v5.0.10/js/all.js
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource     jQueryCss https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css
// @copyright    2018 © Exel80#0080 & Olegisp#9389
// @license     https://creativecommons.org/licenses/by-nc-nd/4.0/
// @updateURL    https://github.com/PixelAtlas/Minimap/raw/master/minimap.pub.user.js
// @downloadURL  https://github.com/PixelAtlas/Minimap/raw/master/minimap.pub.user.js
// ==/UserScript==

var _0x58a2 = ["VG1nUGw=", "dGV4dERpc3BsYXk=", "Z0l3ems=", "I2NvbmZpZy10ZXh0", "WlBTWVU=", "eXF0cHU=", "SWNvbnMgYW5kIFRleHQ=", "Zm9tTlI=", "Lm1lbnUtdGV4dA==", "dVBRY1A=", "VGV4dCBvbmx5", "c250dWg=", "YWNUUlU=", "Lm1lbnUtaWNvbg==", "Q1ZoQ04=", "SWNvbnMgb25seQ==", "TURkVEU=", "em9vbQ==", "aklzbWM=", "Y2F0ZWdvcmllcw==", "SkVqa3U=", "IWRhdGEuanNvbg==", "RE9ZT0o=", "R0VU", "bkdSYnk=", "anNvbg==", "ZmFsc2U=", "Q3FIakM=", "aGlkZQ==", "TGhSdXo=", "c2hvdw==", "bG9n", "Z2VjQ3M=", "I2NvbmZpZy1oaWRlem9vbQ==", "dGV4dA==", "c3VLbG0=", "T1F3RVc=", "Y2VudGVyUGFsbGV0", "cElyVlU=", "YWRkQ2xhc3M=", "a29VUEg=", "UXRBSW4=", "cHJvcA==", "SHNJTFY=", "cG93", "Q2hlY2tlZCBjYXRlZ29yaWVzOiA=", "LCBDb29raWU6IA==", "YWpheA==", "cGFyc2VKU09O", "c3RyaW5naWZ5", "Q2F0ZWdvcmllcw==", "c29ydA==", "cUR4R3o=", "aW5BcnJheQ==", "Y2NGUHc=", "IGlkPSJjaGVjay0=", "PC9sYWJlbD4=", "amRLVHg=", "d01NTmM=", "anZlZE0=", "I0Nvb2tpZUJhcg==", "RUF2WnM=", "ZWpjWlM=", "RGRSSlM=", "VmthUmI=", "dlVwdnk=", "b3pGaUQ=", "b0R5dUU=", "M3wyfDF8NHww", "eFp3QWM=", "LkdvdG9Dc3M6dmlzaWJsZQ==", "VU5MS3A=", "VHBvS0I=", "I2dvdG8=", "RFRPam0=", "bFdVT0Y=", "QmJreEc=", "UGtoZkk=", "dUVqR2I=", "UlhsZmE=", "c3NEdGM=", "WHJ4d0c=", "aGNaR08=", "M3wwfDZ8MTh8OXwxNHwxOXwyMHwxNXw3fDEwfDE3fDEyfDExfDE2fDF8NXwyfDR8MTN8OA==", "SHp2enY=", "Rld1dmk=", "VHJkeFM=", "ZGhMYlk=", "a3hHVWk=", "cXhwWWU=", "VGhjZVk=", "I2NvbmZpZy10ZXh0IG9wdGlvbjpzZWxlY3RlZA==", "VVdFWEU=", "QmxKa0Y=", "a1lZRVA=", "U1VJYUg=", "ZXJnZG0=", "S1dmSVg=", "YWFnUE4=", "aWpLUVg=", "dVJ6cUU=", "d1BKS0E=", "UldpckE=", "QUVjb1I=", "bGhwUEI=", "d0FkZlE=", "eFVjRWo=", "ZFpwY3M=", "Y2ZYSk0=", "WmtBd0Y=", "I2NvbmZpZy1jZW50ZXJwYWxsZXQ=", "T3Bob24=", "Q2VudGVy", "RVV1Q1k=", "eEtiRmE=", "U0FBdlg=", "a2ZZbWQ=", "UUR6THc=", "eWpOb20=", "blF4UkU=", "Z3JvdXBVcA==", "T3JNYU0=", "bHdvaW0=", "VWdPbEI=", "M3wxfDJ8NHww", "bGlMc2g=", "LlNldHRpbmdzQ3NzOnZpc2libGU=", "b3dMbE0=", "WHhUeXQ=", "dG5ZZ0Q=", "I3NldHRpbmdz", "b1RYWHc=", "ZUhuUk0=", "OnZpc2libGU=", "cElXbEU=", "bFhIeXc=", "aHhxRWE=", "d1BxZ0g=", "cWpVUUs=", "Rm16ekI=", "MnwzfDV8NHwxfDA=", "UmpIelQ=", "aUJmZmg=", "b1NMb0w=", "I0N1cnNvckNvbG9y", "aklGc28=", "empqZ0E=", "dGZyWVI=", "I2VudGVyLWdvdG8=", "VHpCZWc=", "I29wZW4tZ290bw==", "TkFkc2k=", "I2N1c3RvbS1zbGlkZXItZ3JpZA==", "Qmtrc0U=", "I3NsaWRlci1ncmlk", "QmlrR0s=", "UGpxUE8=", "Tkx0QXY=", "TXJyaGg=", "aVlkWlk=", "I29wZW4tc2V0dGluZ3M=", "THlFYWY=", "TUdEaW0=", "I2Nsb3NlLXNldHRpbmdz", "I2Nsb3NlLWdvdG8=", "cGhYcGs=", "aFN6cWg=", "I2hpZGUtbWFw", "cEZJbHM=", "Y2hhbmdl", "dmFs", "Zkt2WGk=", "I0Nvb2tpZXNPaw==", "Y2xpY2s=", "c2xpZGVVcA==", "eVVDalg=", "I2Rpc2NvcmQtbGluaw==", "b3Blbg==", "VU5VVlA=", "YXV0b2NvbXBsZXRl", "aGFzT3duUHJvcGVydHk=", "cm91bmQ=", "VUtqcUw=", "aGVpZ2h0", "bG9jYXRpb24=", "cmVwbGFjZQ==", "aHR0cDovL3BpeGVsY2FudmFzLmlvL0A=", "I2lucHV0TmFtZQ==", "WVJMbms=", "c2xpZGVEb3du", "bGVuZ3Ro", "Y1FvcUY=", "I2N1c3RvbS1zbGlkZXItY3Vyc29y", "I3NsaWRlci1jdXJzb3I=", "T1dUS0o=", "Y29uZmlybQ==", "QXJlIHlvdSBzdXJlPw==", "cmVsb2Fk", "R1V2RU4=", "QnN0Z00=", "dG9nZ2xlQ2xhc3M=", "Rm9PY3g=", "ZkNRYnQ=", "VVB2RFY=", "VlVuR2w=", "bW91c2VvdmVy", "ZEJEUFA=", "aGFzQ2xhc3M=", "cmVtb3ZlQ2xhc3M=", "ZVJHWFI=", "bW91c2Vtb3Zl", "ZGl2W3N0eWxlKj0icG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxZW07IGJvdHRvbTogMWVtOyJd", "aW5uZXJUZXh0", "YVppQ1I=", "amlKcEM=", "bWxxTGM=", "YmFja2dyb3VuZC1jb2xvcg==", "RnJWQW4=", "REFHU3U=", "QkxVRQ==", "ZUJBYXk=", "Y0JCR1k=", "IzAwNzREOQ==", "TnJabkU=", "QVFVQQ==", "WW5jSks=", "dFJISXY=", "IzdGREJGRg==", "VHBIeVM=", "TXJDS08=", "ZmtPT2U=", "IzM5Q0NDQw==", "T09KVVQ=", "T0xJVkU=", "UnBWREw=", "ekhoeW4=", "R1JFRU4=", "ZERZRHg=", "IzJFQ0M0MA==", "dHlvblI=", "TElNRQ==", "dVpCWno=", "IzAxRkY3MA==", "SUF3T0o=", "WUVMTE9X", "VUluYWQ=", "RUROWkg=", "bUFSWFE=", "R1lRUk8=", "I0ZGODUxQg==", "ckR6aWI=", "UkVE", "akpvYko=", "I0ZGNDEzNg==", "TUFST09O", "QkhNd2E=", "Izg1MTQ0Yg==", "RlVDSFNJQQ==", "aUZ0SVA=", "UFVSUExF", "dG9OV3g=", "I0IxMERDOQ==", "S1dMeG8=", "QkxBQ0s=", "cVBMUlY=", "IzExMTExMQ==", "YmNmVFA=", "R1JBWQ==", "I0FBQUFBQQ==", "c1d6UmU=", "U0lMVkVS", "T0J4Q1U=", "VVhOSW0=", "Y3Nz", "aXNZZ2Y=", "bER2Z2c=", "I0YwMTJCRQ==", "ZnNveGg=", "TW9GSEw=", "TFd0V2o=", "SGdNaEk=", "T2lOTW4=", "aE9KV3k=", "SExEeUI=", "aFpiclk=", "R0ZmbHM=", "WXVJUUY=", "UnhodHE=", "bnpJbWI=", "cUFWcUs=", "S1hja2M=", "Y3BaU00=", "VGVtcGxhdGVz", "WHZRbUk=", "ZXhlYw==", "dXFwVEY=", "VVVyZnY=", "S05uUlM=", "ZmVHZnc=", "dmR2Z3Q=", "cmZhb2k=", "alBOTGU=", "ZURuZlo=", "UHhLSng=", "c3Ryb2tlU3R5bGU=", "cmdiYSg=", "YmVnaW5QYXRo", "d2lkdGg=", "cmVjdA==", "bGluZVdpZHRo", "Y2xlYXJSZWN0", "c3Ryb2tl", "aFBwenY=", "M3w0fDJ8MHwx", "dmJyR20=", "SGl0em9uZQ==", "YmlWUks=", "Umxwc04=", "UFVDUVA=", "UkpVUlc=", "ZVl3b2w=", "bGFzQWg=", "UUNmZ3I=", "UnlqbVE=", "b21rZkQ=", "aHNLQ2Y=", "R2tJYXQ=", "amNCaU8=", "dnhPcFg=", "dHJhbnNsYXRl", "RHJhd2luZyBncmlkIGJvYXJkID0gWw==", "XSBhbmQgb2Zmc2V0ID0gWw==", "ZmlsbFN0eWxl", "cmdiYSgzNCwgMzQsIDM0LCA=", "ZmlsbFJlY3Q=", "TGRvcU4=", "MXw4fDd8NXw5fDJ8MHw2fDN8NA==", "U0FyYmI=", "RFBvZ1k=", "bnRkamo=", "TEdSQ2k=", "WVB5RHM=", "dFdIZEM=", "bWluaW1pemU=", "b3F5dWI=", "eDog", "IHk6IA==", "IFc6IA==", "IEg6IA==", "IHwgejogKA==", "KSAo", "ZHJhd0ltYWdl", "c3Jj", "LnBuZw==", "b25sb2Fk", "U0RCa0c=", "cHVzaA==", "dldJRm0=", "NHwxfDN8NXwyfDA=", "Q3BvaEs=", "VlluZlk=", "bHdrU24=", "Q2NuaWY=", "QkdNZHE=", "akJGWUk=", "YWFHa0c=", "Y09rVVc=", "RVBqalg=", "RHJhd2luZw==", "c254ckQ=", "SHZUYUs=", "c1hoc2o=", "aW5jbHVkZXM=", "V0ZnU3g=", "I2NvbmZpZy1jYXRlZ29yaWUgaW5wdXQ6Y2hlY2tlZA==", "ZWFjaA==", "YXR0cg==", "am9pbg==", "I21pbmltYXA=", "c29tZQ==", "YnhheEE=", "eGhRSFY=", "UGRXWUo=", "RHRud0c=", "U1NLZlc=", "aGtRRFM=", "Z2V0", "aW1hZ2VTbW9vdGhpbmdFbmFibGVk", "bW96SW1hZ2VTbW9vdGhpbmdFbmFibGVk", "d2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVk", "SVBxV00=", "Z2V0Q29udGV4dA==", "Z2V0SW1hZ2VEYXRh", "ZGF0YQ==", "cHJvdG90eXBl", "YmV0d2Vlbg==", "VVR2c04=", "bWlu", "YXBwbHk=", "bWF4", "aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BpeGVsQXRsYXMvTWluaW1hcC9tYXN0ZXIvdGVtcGxhdGVzLw==", "aGVhZA==", "YXBwZW5k", "PGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2NvZGUuanF1ZXJ5LmNvbS91aS8xLjEyLjEvdGhlbWVzL2Jhc2UvanF1ZXJ5LXVpLm1pbi5jc3MnIHR5cGU9J3RleHQvY3NzJyBtZWRpYT0nc2NyZWVuJz4=", "PHN0eWxlPmgyLnRpdGxlIHsgbWFyZ2luOjBweCBhdXRvOyBwYWRkaW5nOjEwcHg7IH0KLm1vdmVVcCB7cG9zaXRpb246YWJzb2x1dGU7IGJvdHRvbTo2ZW07IGxlZnQ6MC4zMzMzZW07fQouZ3JvdXBVcCB7IGJvdHRvbTogaW5pdGlhbCAhaW1wb3J0YW50OyBsZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7IHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7IGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O30KLmNvbG9yc0xlZnQge21hcmdpbi1sZWZ0OjAuMzMzZW0gIWltcG9ydGFudDt9Ci5jbG9zZSB7IGNvbG9yOmJsYWNrOyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjAuOGVtOyByaWdodDoxZW07IGN1cnNvcjpwb2ludGVyOyB9Ci5kaXNjb3JkIHsgY29sb3I6YmxhY2s7IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6MC43NWVtOyByaWdodDoyLjU1ZW07IGN1cnNvcjpwb2ludGVyOyB9Ci5zbW9vdGggeyBvdmVyZmxvdzphdXRvOyBwYWRkaW5nLXRvcDo0cHg7IHBhZGRpbmctYm90dG9tOjRweDsgfQouc2V0dGluZ3MtbGlzdCB7IG1hcmdpbjoycHg7IHRleHQtc2hhZG93OjFweCAxcHggOHB4IHdoaXRlOyBwb3NpdGlvbjpyZWxhdGl2ZTsgbGlzdC1zdHlsZS10eXBlOm5vbmU7IHBhZGRpbmc6MDsgZGlzcGxheTp0YWJsZTsgd2lkdGg6OTklO30KLnNldHRpbmdzLWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyMjgsMjI4LDIyOCwwLjY1KSwgcmdiYSgwLDAsMCwwKSk7IH0KLnNldHRpbmdzLWJ1dHRvbiB7IHJpZ2h0OjAuNWVtOyB9IC5zbWFsbHtmb250LXNpemU6MTJweDt9IC5zbWFsbHRleHR7Zm9udC1zaXplOjEwcHg7IHdpZHRoOjEyMHB4O30KLlNldHRpbmdzQ3NzIHsgd2lkdGg6MjgwcHg7IGhlaWdodDo0MDBweDsgZGlzcGxheTpub25lOyBib3JkZXI6M3B4IHNvbGlkIHJnYmEoMzQsMzQsMzQsMC43NSk7IG92ZXJmbG93OmhpZGRlbjsgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuOTUpOyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi0xMCU7IGJvdHRvbTowOyBsZWZ0OjA7IHJpZ2h0OjA7IG1hcmdpbjphdXRvOyB9Ci5Hb3RvQ3NzIHsgd2lkdGg6MjgwcHg7IGhlaWdodDoxMTBweDsgZGlzcGxheTpub25lOyBib3JkZXI6M3B4IHNvbGlkIHJnYmEoMzQsMzQsMzQsMC43NSk7IG92ZXJmbG93OmhpZGRlbjsgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuOTUpOyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi0yMCU7IGJvdHRvbTowOyBsZWZ0OjA7IHJpZ2h0OjA7IG1hcmdpbjphdXRvOyB9CiNtaW5pbWFwLWJhY2t1cCB7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNzUpOyBoZWlnaHQ6NTBweDsgYm9yZGVyLXJhZGl1czo1cHg7IHBvc2l0aW9uOmFic29sdXRlOyByaWdodDoxZW07IGJvdHRvbToxZW07fQojbWluaW1hcC1jb250ZW50IHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC43NSk7IHdpZHRoOjQ4MHB4OyBoZWlnaHQ6MjcwcHg7IGJvcmRlci1yYWRpdXM6NXB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6MWVtOyBib3R0b206MWVtO30KLmZsZWZ0IHtmbG9hdDpsZWZ0O30gLmZyaWdodCB7ZmxvYXQ6cmlnaHQ7fQoubWluaW1pemUgeyBvcGFjaXR5OiAwLjQ1OyBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDUpOyAvKiBGb3IgSUU4IGFuZCBlYXJsaWVyICovIH0KI21pbmltYXAtc2V0dGluZ3MgeyB6LWluZGV4OjY7IHBvc2l0aW9uOmFic29sdXRlOyByaWdodDowZW07IGJvdHRvbTowOyB3aWR0aDo0ODBweDsgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNSk7fQojbWluaW1hcCB7d2lkdGg6MTAwJTsgdG9wOjA7IGhlaWdodDoxMDAlOyB6LWluZGV4OjA7fSAjbWluaW1hcC1ncmlkIHt3aWR0aDoxMDAlOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IHotaW5kZXg6MTt9ICNtaW5pbWFwLWN1cnNvciB7d2lkdGg6MTAwJTsgdG9wOjA7IGhlaWdodDoxMDAlOyB6LWluZGV4OjI7fQouY2xpY2thYmxlIHsgY3Vyc29yOnBvaW50ZXI7IGZvbnQtd2VpZ2h0OmJvbGQ7IH0KdWwudG9vbGJhciB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB3aGl0ZS1zcGFjZTpub3dyYXA7ICBkaXNwbGF5Oi13ZWJraXQtZmxleDsgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IHotaW5kZXg6NjsgcG9zaXRpb246cmVsYXRpdmUgIWltcG9ydGFudDsgbGluZS1oZWlnaHQ6MjVweDsgbGlzdC1zdHlsZS10eXBlOm5vbmU7IG1hcmdpbjowOyBib3JkZXItc3R5bGU6bm9uZTsgb3ZlcmZsb3c6aGlkZGVuOyB0ZXh0LWFsaWduOmNlbnRlcjsgY29sb3I6d2hpdGU7IH0KbGkudG9vbGJhciB7IHotaW5kZXg6NjsgZmxvYXQ6bGVmdDsgfSBsaS5wYWRkaW5nIHsgcGFkZGluZy1sZWZ0OjIwcHg7IH0gbGkuc21hbGxQYWRkaW5nIHsgcGFkZGluZy1sZWZ0OjRweDsgfQoudWktc2xpZGVyIC51aS1zbGlkZXItaGFuZGxlIHsgd2lkdGg6MWVtICFpbXBvcnRhbnQ7IH0KLmZvb3RlciB7IGZvbnQtc2l6ZTo4cHg7IHBvc2l0aW9uOmFic29sdXRlOyBib3R0b206LjVlbTsgdGV4dC1hbGlnbjpjZW50ZXI7IH0KLnNsaWRlciB7IHJpZ2h0OjBlbSAhaW1wb3J0YW50OyB3aWR0aDo2LjI1ZW0gIWltcG9ydGFudDsgfQojY29uZmlnLWNhdGVnb3JpZSB7IGhlaWdodDo1MHB4O3dpZHRoOjI3NXB4O2JvcmRlcjoxcHggc29saWQgI2NjYzsgb3ZlcmZsb3c6YXV0bzsgZm9udC1zaXplOiAxNHB4OyB9CiNCb3hlZFNldHRpbmdzIHsgaGVpZ2h0OjE4MHB4O3dpZHRoOjI3NXB4O2JvcmRlcjoxcHggc29saWQgI2NjYzsgb3ZlcmZsb3c6YXV0bzsgZm9udC1zaXplOiAxNHB4OyB9CiNpMSwgI2kyLCAjaTMgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyB3aWR0aDogMzMuMyU7IH0KI2N1c3RvbS1zbGlkZXItY3Vyc29yIHsgd2lkdGg6IDFlbSAhaW1wb3J0YW50OyBmb250LXNpemU6MTJweDsgcG9zaXRpb246cmVsYXRpdmUgIWltcG9ydGFudDsgaGVpZ2h0OiAxLjI1ZW07IHRvcDogNTAlOyBtYXJnaW4tdG9wOiAtLjc1ZW07IHRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDEuNmVtICFpbXBvcnRhbnQ7IH0KI2N1c3RvbS1zbGlkZXItZ3JpZCB7IHdpZHRoOiAxZW0gIWltcG9ydGFudDsgZm9udC1zaXplOjEycHg7IHBvc2l0aW9uOnJlbGF0aXZlICFpbXBvcnRhbnQ7IGhlaWdodDogMS4yNWVtOyB0b3A6IDUwJTsgbWFyZ2luLXRvcDogLS43NWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiAxLjZlbSAhaW1wb3J0YW50OyB9CmNhbnZhcyB7IHBvc2l0aW9uOmFic29sdXRlOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVTcGVlZDsgaW1hZ2UtcmVuZGVyaW5nOi1tb3otY3Jpc3AtZWRnZXM7IGltYWdlLXJlbmRlcmluZzotd2Via2l0LW9wdGltaXplLWNvbnRyYXN0OyBpbWFnZS1yZW5kZXJpbmc6LW8tY3Jpc3AtZWRnZXM7IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZS1jb250cmFzdDsgLW1zLWludGVycG9sYXRpb24tbW9kZTpuZWFyZXN0LW5laWdoYm9yOyB9Ci5tZW51LXRleHQgeyBkaXNwbGF5OmlubGluZTsgfQouQ29va2llc0J1dHRvbiB7IGZsb2F0OnJpZ2h0OyBiYWNrZ3JvdW5kLWNvbG9yOkRhcmtHcmVlbjsgY29sb3I6d2hpdGU7IGZvbnQtd2VpZ2h0OmJvbGQ7IGN1cnNvcjpwb2ludGVyOyBib3JkZXItY29sb3I6RGFya0dyZWVuOyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgfQouQ29va2llc0J1dHRvbjpob3ZlciB7IGZsb2F0OnJpZ2h0OyBiYWNrZ3JvdW5kLWNvbG9yOkRhcmtHcmVlbiAhaW1wb3J0YW50OyBjb2xvcjp3aGl0ZTsgZm9udC13ZWlnaHQ6Ym9sZDsgY3Vyc29yOnBvaW50ZXI7IGJvcmRlci1jb2xvcjpsaW1lICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50OyB9CnNwYW4uY29va2llc0FuZE1pbGsgeyBjb2xvcjp3aGl0ZTsgZmxvYXQ6bGVmdDsgcGFkZGluZy10b3A6NXB4OyBkaXNwbGF5OmJsb2NrOyBtYXJnaW4tbGVmdDouNWVtOyBmb250LXNpemU6IDEzcHg7IH08L3N0eWxlPg==", "CjxkaXYgaWQ9ImdvdG8iIGNsYXNzPSJHb3RvQ3NzIj4KICA8aDIgY2xhc3M9InRpdGxlIj4gR290byB0ZW1wbGF0ZSA8L2gyPgogIDxkaXYgaWQ9ImNsb3NlLWdvdG8iIGNsYXNzPSJjbG9zZSI+PGkgY2xhc3M9ImZhcyBmYS13aW5kb3ctY2xvc2UiPjwvaT48L2Rpdj4KICA8ZGl2IGNsYXNzPSJ1aS13aWRnZXQiIHN0eWxlPSJwYWRkaW5nOjVweDsiPgogICAgPGxhYmVsIGZvcj0iaW5wdXROYW1lIj5UZW1wbGF0ZSBuYW1lOiA8L2xhYmVsPgogICAgPGlucHV0IGlkPSJpbnB1dE5hbWUiPgogICAgPGJ1dHRvbiBpZD0iZW50ZXItZ290byIgY2xhc3M9InVpLWJ1dHRvbiB1aS13aWRnZXQgdWktY29ybmVyLWFsbCI+R08hPC9idXR0b24+CiAgPC9kaXY+CjwvZGl2Pgo8ZGl2IGlkPSJzZXR0aW5ncyIgY2xhc3M9IlNldHRpbmdzQ3NzIj4KICAgPGgyIGNsYXNzPSJ0aXRsZSI+IFNldHRpbmdzIDwvaDI+CiAgIDxkaXYgaWQ9ImRpc2NvcmQtbGluayIgY2xhc3M9ImRpc2NvcmQiPjxzbWFsbD48dT5Kb2luIERpc2NvcmQ8L3U+PC9zbWFsbD4gPGkgY2xhc3M9ImZhYiBmYS1kaXNjb3JkIj48L2k+PC9kaXY+CiAgIDxkaXYgaWQ9ImNsb3NlLXNldHRpbmdzIiBjbGFzcz0iY2xvc2UiPjxpIGNsYXNzPSJmYXMgZmEtd2luZG93LWNsb3NlIj48L2k+PC9kaXY+CiAgIDx1bCBjbGFzcz0ic2V0dGluZ3MtbGlzdCI+CgogICAgICA8IS0tIENBVEVHT1JJRSAgLS0+CiAgICAgIDxsaSBjbGFzcz0ic21vb3RoIj48ZGl2IGNsYXNzPSJmbGVmdCBzbWFsbCI+VGVtcGxhdGUgY2F0ZWdvcmllKHMpOiA8L2Rpdj4KICAgICAgPGRpdiBpZD0iY29uZmlnLWNhdGVnb3JpZSI+PC9kaXY+PC9saT4KCiAgICAgPGRpdiBpZD0iQm94ZWRTZXR0aW5ncyI+CiAgICAgICAgPCEtLSBISURFIFpPT00gLS0+CiAgICAgICAgPGxpIGNsYXNzPSJzbW9vdGgiPjxkaXYgY2xhc3M9ImZsZWZ0IHNtYWxsIj5IaWRlIHpvb20gc2xpZGVyPC9kaXY+CiAgICAgICAgICA8ZGl2IGlkPSJjb25maWctaGlkZXpvb20iIGNsYXNzPSJmcmlnaHQgY2xpY2thYmxlIHNldHRpbmdzLWJ1dHRvbiI+SGlkZTwvZGl2PgogICAgICAgIDwvbGk+CgogICAgICAgIDwhLS0gSElERSBDVVJTT1IgIC0tPgogICAgICAgIDxsaSBjbGFzcz0ic21vb3RoIj48ZGl2IGNsYXNzPSJmbGVmdCBzbWFsbCI+SGlkZSBjdXJzb3I8L2Rpdj4KICAgICAgICAgIDxkaXYgaWQ9ImNvbmZpZy1oaWRlY3Vyc29yIiBjbGFzcz0iZnJpZ2h0IGNsaWNrYWJsZSBzZXR0aW5ncy1idXR0b24iPkhpZGU8L2Rpdj4KICAgICAgICA8L2xpPgoKICAgICAgICA8IS0tIEhJREUgR1JJRCAgLS0+CiAgICAgICAgPGxpIGNsYXNzPSJzbW9vdGgiPjxkaXYgY2xhc3M9ImZsZWZ0IHNtYWxsIj5IaWRlIGdyaWQ8L2Rpdj4KICAgICAgICAgIDxkaXYgaWQ9ImNvbmZpZy1oaWRlZ3JpZCIgY2xhc3M9ImZyaWdodCBjbGlja2FibGUgc2V0dGluZ3MtYnV0dG9uIj5IaWRlPC9kaXY+CiAgICAgICAgPC9saT4KCiAgICAgICAgPCEtLSBQTEFDRSBQQUxMRVQgLS0+CiAgICAgICAgPGxpIGNsYXNzPSJzbW9vdGgiPjxkaXYgY2xhc3M9ImZsZWZ0IHNtYWxsIj5QbGFjZSBwYWxldHRlPC9kaXY+CiAgICAgICAgICA8ZGl2IGlkPSJjb25maWctY2VudGVycGFsbGV0IiBjbGFzcz0iZnJpZ2h0IGNsaWNrYWJsZSBzZXR0aW5ncy1idXR0b24iPkNlbnRlcjwvZGl2PgogICAgICAgIDwvbGk+CgogICAgICAgIDwhLS0gRElTUExBWSBURVhUICAtLT4KICAgICAgICA8bGkgY2xhc3M9InNtb290aCI+PGRpdiBjbGFzcz0iZmxlZnQgc21hbGwiPkRpc3BsYXkgdGV4dDwvZGl2PjxkaXYgaWQ9ImNvbmZpZy1kaXNwbGF5dGV4dCIgY2xhc3M9ImZyaWdodCBzZXR0aW5ncy1idXR0b24iPgogICAgICAgIDxzZWxlY3QgaWQ9ImNvbmZpZy10ZXh0IiBjbGFzcz0iZnJpZ2h0Ij4KICAgICAgICAgIDxvcHRpb24+SWNvbnMgYW5kIFRleHQ8L29wdGlvbj4KICAgICAgICAgIDxvcHRpb24+VGV4dCBvbmx5PC9vcHRpb24+CiAgICAgICAgICA8b3B0aW9uPkljb25zIG9ubHk8L29wdGlvbj4KICAgICAgICA8L3NlbGVjdD4KICAgICAgICA8L2Rpdj48L2xpPgoKICAgICAgICA8IS0tIENVUlNPUiBDT0xPUiAgLS0+CiAgICAgICAgPGxpIGNsYXNzPSJzbW9vdGgiIHN0eWxlPSJwYWRkaW5nLWJvdHRvbTowLjVlbTsiPjxkaXYgY2xhc3M9ImZsZWZ0IHNtYWxsIj5DdXJzb3IgY29sb3I8L2Rpdj48ZGl2IGlkPSJjb25maWctY3Vyc29yY29sb3IiIGNsYXNzPSJmcmlnaHQgc2V0dGluZ3MtYnV0dG9uIj4KICAgICAgICAgIDxzZWxlY3QgcnVuYXQ9InNlcnZlciIgaWQ9IkN1cnNvckNvbG9yIiBzdHlsZT0ibWluLXdpZHRoOjEwNXB4OyI+CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ik5BVlkiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmOyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iQkxVRSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICMwMDc0RDk7IiAvPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJBUVVBIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzdGREJGRjsiIC8+CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IlRFQUwiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMzlDQ0NDOyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iT0xJVkUiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q5OTcwOyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iR1JFRU4iIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzQwOyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iTElNRSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICMwMUZGNzA7IiAvPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJZRUxMT1ciIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQzAwOyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iT1JBTkdFIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogI0ZGODUxQjsiIC8+CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IlJFRCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNGRjQxMzY7IiAvPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJNQVJPT04iIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjODUxNDRiOyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iRlVDSFNJQSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNGMDEyQkU7IiAvPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJQVVJQTEUiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjQjEwREM5OyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iQkxBQ0siIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExOyIgLz4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iR1JBWSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7IiAvPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJTSUxWRVIiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREOyIgLz4KICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgIDwvZGl2PjwvbGk+CgogICAgICAgIDwhLS0gU0xJREVSIENVUlNPUiAgLS0+CiAgICAgICAgPGxpIGNsYXNzPSJzbW9vdGgiPjxkaXYgY2xhc3M9ImZsZWZ0IHNtYWxsIj5DdXJzb3IgdHJhbnNwYXJlbmN5PC9kaXY+PGRpdiBpZD0iY29uZmlnLWN1cnNvcmFscGhhIiBjbGFzcz0iZnJpZ2h0IHNldHRpbmdzLWJ1dHRvbiI+CiAgICAgICAgICA8ZGl2IGlkPSJzbGlkZXItY3Vyc29yIiBjbGFzcz0ic2xpZGVyIj48ZGl2IGlkPSJjdXN0b20tc2xpZGVyLWN1cnNvciIgY2xhc3M9InVpLXNsaWRlci1oYW5kbGUiPjwvZGl2PjwvZGl2PgogICAgICAgIDwvZGl2PjwvbGk+CgogICAgICAgIDwhLS0gU0xJREVSIEdSSUQgIC0tPgogICAgICAgIDxsaSBjbGFzcz0ic21vb3RoIj48ZGl2IGNsYXNzPSJmbGVmdCBzbWFsbCI+R3JpZCB0cmFuc3BhcmVuY3k8L2Rpdj48ZGl2IGlkPSJjb25maWctZ3JpZGFscGhhIiBjbGFzcz0iZnJpZ2h0IHNldHRpbmdzLWJ1dHRvbiI+CiAgICAgICAgICA8ZGl2IGlkPSJzbGlkZXItZ3JpZCIgY2xhc3M9InNsaWRlciI+PGRpdiBpZD0iY3VzdG9tLXNsaWRlci1ncmlkIiBjbGFzcz0idWktc2xpZGVyLWhhbmRsZSI+PC9kaXY+PC9kaXY+CiAgICAgICAgPC9kaXY+PC9saT4KICAgIDwvZGl2PgoKICAgICA8bGkgc3R5bGU9InBhZGRpbmc6M3B4Ij48IS0tIFNQQUNFIC0tPjwvbGk+CgogICAgIDwhLS0gUkVTRVQgQlVUVE9OIC0tPgogICAgIDxsaSBjbGFzcz0ic21vb3RoIj4KICAgICAgIDxkaXYgaWQ9ImNvbmZpZy1yZXNldCIgY2xhc3M9ImZyaWdodCBjbGlja2FibGUgc2V0dGluZ3MtYnV0dG9uIj5SZXNldCBzZXR0aW5nczwvZGl2PgogICAgIDwvbGk+CiAgIDwvdWw+CgogICA8ZGl2IGNsYXNzPSJmb290ZXIiPjxhIHJlbD0ibGljZW5zZSIgaHJlZj0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMtbmQvNC4wLyIgdGFyZ2V0PSJfYmxhbmsiPjxpbWcgYWx0PSJDcmVhdGl2ZSBDb21tb25zIExpY2Vuc2UiIHN0eWxlPSJib3JkZXItd2lkdGg6MDsgZmxvYXQ6bGVmdDsgbWFyZ2luLXRvcDoxMHB4OyBtYXJnaW4tbGVmdDo1cHg7IiBzcmM9Imh0dHBzOi8vaS5jcmVhdGl2ZWNvbW1vbnMub3JnL2wvYnktbmMtbmQvNC4wLzg4eDMxLnBuZyIgLz48L2E+PGJyIC8+VGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIGEgPGEgcmVsPSJsaWNlbnNlIiBocmVmPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy1uZC80LjAvIiB0YXJnZXQ9Il9ibGFuayI+Q3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1Ob25Db21tZXJjaWFsLU5vRGVyaXZhdGl2ZXMgNC4wIEludGVybmF0aW9uYWwgTGljZW5zZTwvYT4uPC9kaXY+CjwvZGl2Pgo8ZGl2IGlkPSJtaW5pbWFwLWJhY2t1cCIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+PHNwYW4gY2xhc3M9ImNsaWNrYWJsZSIgc3R5bGU9ImNvbG9yOndoaXRlOyBkaXNwbGF5OmJsb2NrO3BhZGRpbmc6IDE1cHggMjBweDsiPiA8aSBjbGFzcz0iZmFzIGZhLWV5ZSBtZW51LWljb24iPjwvaT4gPGRpdiBjbGFzcz0ibWVudS10ZXh0Ij4gT3BlbiBtaW5pbWFwIDwvZGl2PiA8L3NwYW4+PC9kaXY+CjxkaXYgaWQ9Im1pbmltYXAtY29udGVudCI+CiAgIDxkaXYgaWQ9InNsaWRlci12ZXJ0aWNhbCIgc3R5bGU9ImhlaWdodDoyMDBweDsgd2lkdGg6MC41ZW07IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6MWVtOyByaWdodDoxZW07IG9wYWNpdHk6MC40NTsgei1pbmRleDo5OyI+PC9kaXY+CiAgIDxjYW52YXMgaWQ9Im1pbmltYXAiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjU0MCI+PC9jYW52YXM+CiAgIDxjYW52YXMgaWQ9Im1pbmltYXAtZ3JpZCIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNTQwIj48L2NhbnZhcz4KICAgPGNhbnZhcyBpZD0ibWluaW1hcC1jdXJzb3IiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjU0MCI+PC9jYW52YXM+CjxkaXYgaWQ9Im1pbmltYXAtc2V0dGluZ3MiIHN0eWxlPSJtYXJnaW4tbGVmdDogLTIwcHgiPgogIDx1bCBjbGFzcz0idG9vbGJhciI+CiAgICAgIDxkaXYgaWQ9ImkxIj4gPGxpIGNsYXNzPSJ0b29sYmFyIGNsaWNrYWJsZSIgaWQ9ImhpZGUtbWFwIj4gPGkgY2xhc3M9ImZhcyBmYS1leWUtc2xhc2ggbWVudS1pY29uIj48L2k+IDxkaXYgY2xhc3M9Im1lbnUtdGV4dCI+IEhpZGUgbWluaW1hcCA8L2Rpdj4gPC9saT4gPC9kaXY+CiAgICAgIDxkaXYgaWQ9ImkyIj4gPGxpIGNsYXNzPSJ0b29sYmFyIGNsaWNrYWJsZSIgaWQ9Im9wZW4tZ290byI+IDxpIGNsYXNzPSJmYXMgZmEtY2hldnJvbi1jaXJjbGUtdXAgbWVudS1pY29uIj48L2k+IDxkaXYgY2xhc3M9Im1lbnUtdGV4dCI+IEdvdG8gdGVtcGxhdGUgPC9kaXY+IDwvbGk+IDwvZGl2PgogICAgICA8ZGl2IGlkPSJpMyI+IDxsaSBjbGFzcz0idG9vbGJhciBjbGlja2FibGUiIGlkPSJvcGVuLXNldHRpbmdzIj4gPGkgY2xhc3M9ImZhcyBmYS1jb2cgbWVudS1pY29uIj48L2k+IDxkaXYgY2xhc3M9Im1lbnUtdGV4dCI+IFNldHRpbmdzIDwvZGl2PiA8L2xpPiA8L2Rpdj4KICA8L3VsPgo8L2Rpdj4KPC9kaXY+", "CjxkaXYgaWQ9IkNvb2tpZUJhciIgc3R5bGU9InotaW5kZXg6OTk5OyBwb3NpdGlvbjphYnNvbHV0ZTsgYmFja2dyb3VuZC1jb2xvcjpibGFjazsgcmlnaHQ6MDsgdG9wOjA7IHdpZHRoOjQ4MHB4OyI+CiAgPHNwYW4gY2xhc3M9ImNvb2tpZXNBbmRNaWxrIj5XZSB1c2UgY29va2llcyBhbmQgbWlsayB0byBrZWVwIHRyYWNrIHlvdXIgc2V0dGluZ3MuPC9zcGFuPgogIDxidXR0b24gaWQ9IkNvb2tpZXNPayIgY2xhc3M9IkNvb2tpZXNCdXR0b24gdWktYnV0dG9uIHVpLXdpZGdldCB1aS1jb3JuZXItYWxsIj5JIFVuZGVyc3RhbmQhPC9idXR0b24+CjwvZGl2Pg==", "IzAwMWYzZg==", "cmVhZHk=", "bkVaSkQ=", "U29Zam8=", "I3NsaWRlci12ZXJ0aWNhbA==", "dmd2ZEY=", "dmFsdWU=", "UENFamM=", "THdLSFY=", "ZVZMS2M=", "QVNxRVI=", "WnBMQWY=", "V2VVc2VDb29raWVz", "eGxWYkY=", "ZGl2I21pbmltYXAtY29udGVudA==", "c3BsaXQ=", "Y2hpbGRyZW4=", "c2xpZGVy", "Y29va2ll", "dmR5bUc=", "dW5kZWZpbmVk", "aFpqalI=", "UXlmWk8=", "Y2hlY2tlZD10cnVl", "b1RhWUk=", "Q3JyZFQ=", "THVmcVM=", "c2hvd01pbmltYXA=", "Z0ZhTlY=", "dHJ1ZQ==", "WVRWb0U=", "SkpnRlY=", "I21pbmltYXAtY29udGVudA==", "I21pbmltYXAtYmFja3Vw", "dE5vS1U=", "Y3Vyc29yQ29sb3I=", "U3dYY1I=", "UGp5Tmw=", "TkFWWQ==", "WW5RcGs=", "QmppbWk=", "Y3Vyc29yQWxwaGE=", "YVdrQXg=", "Z3JpZEFscGhh", "Y3N0ZVM=", "TnFraXc=", "c2hvd1NsaWRlcg==", "U3F0Zk0=", "U2hvdw==", "TmtHeWc=", "SGlkZQ==", "QUdYSHA=", "cklJYm8=", "eXhubE4=", "QUxmaUk=", "c2hvd0N1cnNvcg==", "bGpXUmg=", "V3V2Y2o=", "I2NvbmZpZy1oaWRlY3Vyc29y", "c25XVWM=", "c2hvd0dyaWQ=", "enJ0aWo=", "I2NvbmZpZy1oaWRlZ3JpZA==", "clFpZ0g=", "REV4VW4=", "dklhYlk=", "WHdNeXE=", "TGVmdA==", "WEFVclU=", "Y29sb3JzTGVmdA==", "eGxQanI=", "cUJCTUE=", "I2FwcCA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDkp", "RWJiaWo=", "bW92ZVVw", "ZGJ1Vm0=", "I2FwcCA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDkpID4gZGl2Om50aC1jaGlsZCgyKQ==", "eG1IUVc=", "I2FwcCA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDkpID4gZGl2Om50aC1jaGlsZCgxKQ=="];
(function (_0xa96417, _0x4ace23) {
  var _0x4859a8 = function (_0x8f6849) {
    while (--_0x8f6849) {
      _0xa96417.push(_0xa96417.shift());
    }
  };
  var _0x4760d2 = function () {
    var _0x4ba707 = {
      'data': {
        'key': 'cookie',
        'value': 'timeout'
      },
      'setCookie': function (_0x1dcaec, _0x35c631, _0x1739ab, _0x147f85) {
        _0x147f85 = _0x147f85 || {};
        var _0x166e38 = _0x35c631 + '=' + _0x1739ab;
        var _0x4837f0 = 0x0;
        var _0x4837f0 = 0x0;
        for (var _0x45ded7 = _0x1dcaec.length; _0x4837f0 < _0x45ded7; _0x4837f0++) {
          var _0x387dff = _0x1dcaec[_0x4837f0];
          _0x166e38 += "; " + _0x387dff;
          var _0x2f8a1d = _0x1dcaec[_0x387dff];
          _0x1dcaec.push(_0x2f8a1d);
          _0x45ded7 = _0x1dcaec.length;
          if (_0x2f8a1d !== true) {
            _0x166e38 += '=' + _0x2f8a1d;
          }
        }
        _0x147f85.cookie = _0x166e38;
      },
      'removeCookie': function () {
        return 'dev';
      },
      'getCookie': function (_0x26f737, _0x227271) {
        _0x26f737 = _0x26f737 || function (_0x63a4ab) {
          return _0x63a4ab;
        };
        var _0x41b154 = _0x26f737(new RegExp("(?:^|; )" + _0x227271.replace(/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
        var _0x3a6be3 = function (_0x41623e, _0x586f1b) {
          _0x41623e(++_0x586f1b);
        };
        _0x3a6be3(_0x4859a8, _0x4ace23);
        return _0x41b154 ? decodeURIComponent(_0x41b154[0x1]) : undefined;
      }
    };
    var _0x24b4c6 = function () {
      var _0x28c5c2 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return _0x28c5c2.test(_0x4ba707.removeCookie.toString());
    };
    _0x4ba707.updateCookie = _0x24b4c6;
    var _0x36cb5c = '';
    var _0x2a8c16 = _0x4ba707.updateCookie();
    if (!_0x2a8c16) {
      _0x4ba707.setCookie(['*'], 'counter', 0x1);
    } else if (_0x2a8c16) {
      _0x36cb5c = _0x4ba707.getCookie(null, 'counter');
    } else {
      'dev';
    }
  };
  _0x4760d2();
})(_0x58a2, 0x18a);
var _0x41f5 = function (_0xc12aa2, _0x17f353) {
  _0xc12aa2 = _0xc12aa2 - 0x0;
  var _0x23d31c = _0x58a2[_0xc12aa2];
  if (_0x41f5.HsbJYd === undefined) {
    (function () {
      var _0x468d75 = function () {
        var _0x4abcca;
        try {
          _0x4abcca = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x3307fb) {
          _0x4abcca = window;
        }
        return _0x4abcca;
      };
      var _0x5d4259 = _0x468d75();
      if (!_0x5d4259.atob) {
        _0x5d4259.atob = function (_0x3399a3) {
          var _0x462427 = String(_0x3399a3).replace(/=+$/, '');
          var _0x298797 = 0x0;
          var _0x4e8928;
          var _0x1f0d8d;
          var _0x1887b9 = 0x0;
          for (var _0x1466a3 = ''; _0x1f0d8d = _0x462427.charAt(_0x1887b9++); ~_0x1f0d8d && (_0x4e8928 = _0x298797 % 0x4 ? _0x4e8928 * 0x40 + _0x1f0d8d : _0x1f0d8d, _0x298797++ % 0x4) ? _0x1466a3 += String.fromCharCode(0xff & _0x4e8928 >> (-0x2 * _0x298797 & 0x6)) : 0x0) {
            _0x1f0d8d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(_0x1f0d8d);
          }
          return _0x1466a3;
        };
      }
    })();
    _0x41f5.OwfZKd = function (_0x4c66af) {
      var _0xb161fc = atob(_0x4c66af);
      var _0x2b3357 = [];
      var _0x3fc422 = 0x0;
      for (var _0x5c51e7 = _0xb161fc.length; _0x3fc422 < _0x5c51e7; _0x3fc422++) {
        _0x2b3357 += '%' + ('00' + _0xb161fc.charCodeAt(_0x3fc422).toString(0x10)).slice(-0x2);
      }
      return decodeURIComponent(_0x2b3357);
    };
    _0x41f5.bRJSQu = {};
    _0x41f5.HsbJYd = true;
  }
  var _0x105190 = _0x41f5.bRJSQu[_0xc12aa2];
  if (_0x105190 === undefined) {
    var _0x253715 = function (_0x550849) {
      this.TJOpJu = _0x550849;
      this.vMpEEo = [0x1, 0x0, 0x0];
      this.hdLgdD = function () {
        return 'newState';
      };
      this.PQvcmD = "\\w+ *\\(\\) *{\\w+ *";
      this.jUjBDe = "['|\"].+['|\"];? *}";
    };
    _0x253715.prototype.htQUEe = function () {
      var _0x5ab6be = new RegExp(this.PQvcmD + this.jUjBDe);
      var _0x4e6202 = _0x5ab6be.test(this.hdLgdD.toString()) ? --this.vMpEEo[0x1] : --this.vMpEEo[0x0];
      return this.FxXenE(_0x4e6202);
    };
    _0x253715.prototype.FxXenE = function (_0x9421) {
      if (!Boolean(~_0x9421)) {
        return _0x9421;
      }
      return this.xogNZP(this.TJOpJu);
    };
    _0x253715.prototype.xogNZP = function (_0x298c39) {
      var _0x49af22 = 0x0;
      for (var _0x4cbe3c = this.vMpEEo.length; _0x49af22 < _0x4cbe3c; _0x49af22++) {
        this.vMpEEo.push(Math.round(Math.random()));
        _0x4cbe3c = this.vMpEEo.length;
      }
      return _0x298c39(this.vMpEEo[0x0]);
    };
    new _0x253715(_0x41f5).htQUEe();
    _0x23d31c = _0x41f5.OwfZKd(_0x23d31c);
    _0x41f5.bRJSQu[_0xc12aa2] = _0x23d31c;
  } else {
    _0x23d31c = _0x105190;
  }
  return _0x23d31c;
};
Number[_0x41f5('0x0')][_0x41f5('0x1')] = function (_0x3f3bd8, _0x4114d8) {
  var _0x35786e = {
    [_0x41f5('0x2')]: function (_0x41eba2, _0x543cbf) {
      return _0x41eba2 > _0x543cbf;
    }
  };
  var _0x29cf58 = Math[_0x41f5('0x3')][_0x41f5('0x4')](Math, [_0x3f3bd8, _0x4114d8]);
  var _0x44d501 = Math[_0x41f5('0x5')][_0x41f5('0x4')](Math, [_0x3f3bd8, _0x4114d8]);
  return _0x35786e[_0x41f5('0x2')](this, _0x29cf58) && this < _0x44d501;
};
dataUrl = _0x41f5('0x6');
$(_0x41f5('0x7'))[_0x41f5('0x8')](_0x41f5('0x9'));
$(_0x41f5('0x7'))[_0x41f5('0x8')]($(_0x41f5('0xa')));
minimapHTML = _0x41f5('0xb');
cookieHTML = _0x41f5('0xc');
var attempt = 0x0;
var curX = null;
var curY = null;
var _zoom = 0x23;
var max_zoom = 0x3c;
var FinalZoom = calcZoom(Math.pow(1.1, _zoom));
var templateList = [];
var categorieList = [];
var storedTemplates = {};
var cursorColor = _0x41f5('0xd');
var cursorAlpha = 0x5a;
var gridAlpha = 0x32;
var showSlider = true;
var showCursor = true;
var showGrid = true;
var textDisplay = 0x0;
var centerPallet = true;
var availableFactions = [];
var hitzone = 0x0;
$(document)[_0x41f5('0xe')](function () {
  var _0x5bac57 = {
    [_0x41f5('0xf')]: function (_0x28ff44, _0x806b28) {
      return _0x28ff44(_0x806b28);
    },
    [_0x41f5('0x10')]: _0x41f5('0x11'),
    [_0x41f5('0x12')]: _0x41f5('0x13'),
    [_0x41f5('0x14')]: function (_0xe3a46) {
      return _0xe3a46();
    },
    [_0x41f5('0x15')]: function (_0x2a96ee) {
      return _0x2a96ee();
    },
    [_0x41f5('0x16')]: function (_0x2c25da) {
      return _0x2c25da();
    },
    [_0x41f5('0x17')]: function (_0x2e3fc8, _0x43913f) {
      return _0x2e3fc8 === _0x43913f;
    },
    [_0x41f5('0x18')]: function (_0x307c6d, _0x4563eb) {
      return _0x307c6d === _0x4563eb;
    },
    "vdymG": _0x41f5('0x19'),
    [_0x41f5('0x1a')]: _0x41f5('0x1b')
  };
  var _0x2ff01d = "4|5|7|0|8|6|3|2|1"[_0x41f5('0x1c')]("|");
  var _0x17cca3 = 0x0;
  while (true) {
    switch (_0x2ff01d[_0x17cca3++]) {
      case "0":
        _0x5bac57[_0x41f5('0xf')]($, "div#app")[_0x41f5('0x1d')]()[_0x41f5('0x8')](minimapHTML);
        continue;
      case "1":
        $(_0x5bac57[_0x41f5('0x10')])[_0x41f5('0x1e')](_0x5bac57[_0x41f5('0x12')], _zoom);
        continue;
      case "2":
        _0x5bac57.PCEjc(setupEvents);
        continue;
      case "3":
        _0x5bac57[_0x41f5('0x15')](setupCanvas);
        continue;
      case "4":
        'use strict';
        continue;
      case "5":
        _0x5bac57[_0x41f5('0x15')](loadJsonLoop);
        continue;
      case "6":
        _0x5bac57[_0x41f5('0x16')](setupCookies);
        continue;
      case "7":
        loadTemplates();
        continue;
      case "8":
        if (_0x5bac57[_0x41f5('0x17')]($.cookie("WeUseCookies"), "0") || _0x5bac57[_0x41f5('0x18')](typeof $[_0x41f5('0x1f')](_0x5bac57[_0x41f5('0x20')]), _0x41f5('0x21'))) {
          $(_0x5bac57.xlVbF).append(cookieHTML);
        }
        continue;
    }
    break;
  }
});
function setupCookies() {
  var _0x2c74c3 = {
    [_0x41f5('0x22')]: function (_0x3be564, _0x19523b) {
      return _0x3be564 < _0x19523b;
    },
    [_0x41f5('0x23')]: function (_0x526daf, _0x2bbea5) {
      return _0x526daf(_0x2bbea5);
    },
    "qDxGz": function (_0x3bc81, _0x27e436) {
      return _0x3bc81 > _0x27e436;
    },
    "ccFPw": _0x41f5('0x24'),
    [_0x41f5('0x25')]: function (_0x53471e, _0x3934d7) {
      return _0x53471e === _0x3934d7;
    },
    [_0x41f5('0x26')]: _0x41f5('0x21'),
    [_0x41f5('0x27')]: _0x41f5('0x28'),
    [_0x41f5('0x29')]: _0x41f5('0x2a'),
    [_0x41f5('0x2b')]: function (_0x3e70da, _0x5f5bd1) {
      return _0x3e70da === _0x5f5bd1;
    },
    [_0x41f5('0x2c')]: function (_0x16cda5, _0x3416c5) {
      return _0x16cda5(_0x3416c5);
    },
    "CqHjC": _0x41f5('0x2d'),
    "LhRuz": _0x41f5('0x2e'),
    [_0x41f5('0x2f')]: _0x41f5('0x30'),
    [_0x41f5('0x31')]: function (_0x4c28f6, _0x4dd270, _0x23bf20) {
      return _0x4c28f6(_0x4dd270, _0x23bf20);
    },
    [_0x41f5('0x32')]: _0x41f5('0x33'),
    "uuFmo": function (_0x255945, _0x9a75d1) {
      return _0x255945(_0x9a75d1);
    },
    [_0x41f5('0x34')]: function (_0xf618a5, _0x349fb0) {
      return _0xf618a5(_0x349fb0);
    },
    "gecCs": _0x41f5('0x19'),
    [_0x41f5('0x35')]: _0x41f5('0x36'),
    [_0x41f5('0x37')]: _0x41f5('0x38'),
    [_0x41f5('0x39')]: function (_0x39099, _0x5a3c3e) {
      return _0x39099 === _0x5a3c3e;
    },
    [_0x41f5('0x3a')]: _0x41f5('0x3b'),
    [_0x41f5('0x3c')]: _0x41f5('0x3d'),
    [_0x41f5('0x3e')]: _0x41f5('0x3f'),
    [_0x41f5('0x40')]: function (_0xb8829d, _0x2798b6) {
      return _0xb8829d(_0x2798b6);
    },
    [_0x41f5('0x41')]: _0x41f5('0x11'),
    [_0x41f5('0x42')]: function (_0x6cfadb, _0xc1c96e) {
      return _0x6cfadb === _0xc1c96e;
    },
    [_0x41f5('0x43')]: _0x41f5('0x44'),
    [_0x41f5('0x45')]: function (_0x16459c, _0x3af87f) {
      return _0x16459c === _0x3af87f;
    },
    [_0x41f5('0x46')]: _0x41f5('0x47'),
    [_0x41f5('0x48')]: function (_0x527f8e, _0x1358af) {
      return _0x527f8e === _0x1358af;
    },
    "suKlm": _0x41f5('0x49'),
    [_0x41f5('0x4a')]: function (_0x54a7a1, _0x5536bd) {
      return _0x54a7a1(_0x5536bd);
    },
    "OQwEW": _0x41f5('0x4b'),
    [_0x41f5('0x4c')]: function (_0x1d8f98, _0x4da909) {
      return _0x1d8f98 === _0x4da909;
    },
    [_0x41f5('0x4d')]: "centerPallet",
    [_0x41f5('0x4e')]: "#config-centerpallet",
    [_0x41f5('0x4f')]: "Center",
    "pIrVU": _0x41f5('0x50'),
    [_0x41f5('0x51')]: "div#colors",
    "koUPH": _0x41f5('0x52'),
    [_0x41f5('0x53')]: function (_0x415cca, _0x276876) {
      return _0x415cca(_0x276876);
    },
    [_0x41f5('0x54')]: _0x41f5('0x55'),
    [_0x41f5('0x56')]: _0x41f5('0x57'),
    [_0x41f5('0x58')]: _0x41f5('0x59'),
    "QtAIn": "groupUp",
    [_0x41f5('0x5a')]: _0x41f5('0x5b'),
    [_0x41f5('0x5c')]: _0x41f5('0x5d'),
    [_0x41f5('0x5e')]: _0x41f5('0x5f'),
    [_0x41f5('0x60')]: "#config-text option:selected",
    [_0x41f5('0x61')]: _0x41f5('0x62'),
    [_0x41f5('0x63')]: function (_0x3b1f82, _0x4ccf5d) {
      return _0x3b1f82(_0x4ccf5d);
    },
    "HsILV": _0x41f5('0x64'),
    [_0x41f5('0x65')]: _0x41f5('0x66'),
    [_0x41f5('0x67')]: function (_0xbd21a6, _0x3a039d) {
      return _0xbd21a6(_0x3a039d);
    },
    [_0x41f5('0x68')]: _0x41f5('0x69'),
    [_0x41f5('0x6a')]: _0x41f5('0x6b'),
    [_0x41f5('0x6c')]: _0x41f5('0x6d'),
    [_0x41f5('0x6e')]: _0x41f5('0x6f'),
    [_0x41f5('0x70')]: _0x41f5('0x71'),
    [_0x41f5('0x72')]: _0x41f5('0x73'),
    [_0x41f5('0x74')]: _0x41f5('0x75')
  };
  if (_0x2c74c3[_0x41f5('0x25')](typeof $.cookie(_0x41f5('0x28')), _0x2c74c3[_0x41f5('0x26')])) {
    $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x27')], _0x2c74c3[_0x41f5('0x29')], {
      'expires': 0x16d
    });
  } else {
    if (_0x2c74c3[_0x41f5('0x2b')]($[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x27')]), _0x41f5('0x76'))) {
      _0x2c74c3[_0x41f5('0x2c')]($, _0x2c74c3[_0x41f5('0x77')])[_0x41f5('0x78')]();
      _0x2c74c3.JJgFV($, _0x2c74c3[_0x41f5('0x79')])[_0x41f5('0x7a')]();
    }
  }
  if (typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x2f')]) === _0x2c74c3[_0x41f5('0x26')]) {
    _0x2c74c3[_0x41f5('0x31')](getCursorColor, _0x2c74c3[_0x41f5('0x32')], true);
  } else {
    console[_0x41f5('0x7b')](getCursorColor($.cookie(_0x2c74c3[_0x41f5('0x2f')])));
    _0x2c74c3[_0x41f5('0x34')](getCursorColor, $[_0x41f5('0x1f')](_0x41f5('0x30')));
  }
  if (_0x2c74c3[_0x41f5('0x2b')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7c')]), _0x2c74c3[_0x41f5('0x26')])) {
    $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7c')], 0x0, {
      'expires': 0x16d
    });
  }
  if (_0x2c74c3[_0x41f5('0x2b')](typeof $.cookie(_0x2c74c3[_0x41f5('0x35')]), _0x41f5('0x21'))) {
    $.cookie(_0x41f5('0x36'), cursorAlpha, {
      'expires': 0x16d
    });
  } else {
    cursorAlpha = $.cookie(_0x41f5('0x36'));
  }
  if (_0x2c74c3[_0x41f5('0x2b')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x37')]), _0x2c74c3.CrrdT)) {
    $[_0x41f5('0x1f')](_0x41f5('0x38'), gridAlpha, {
      'expires': 0x16d
    });
  } else {
    gridAlpha = $.cookie(_0x2c74c3[_0x41f5('0x37')]);
  }
  if (_0x2c74c3[_0x41f5('0x39')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x3a')]), _0x2c74c3[_0x41f5('0x26')])) {
    $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x3a')], _0x2c74c3[_0x41f5('0x29')], {
      'expires': 0x16d
    });
  } else {
    showSlider = !!($[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x3a')]) === _0x2c74c3[_0x41f5('0x29')]);
    _0x2c74c3[_0x41f5('0x34')]($, _0x41f5('0x7d'))[_0x41f5('0x7e')](!showSlider ? _0x2c74c3[_0x41f5('0x3c')] : _0x2c74c3[_0x41f5('0x3e')]);
    if (showSlider) {
      _0x2c74c3[_0x41f5('0x40')]($, _0x2c74c3[_0x41f5('0x41')]).show();
    } else {
      _0x2c74c3[_0x41f5('0x40')]($, _0x2c74c3[_0x41f5('0x41')])[_0x41f5('0x78')]();
    }
  }
  if (_0x2c74c3[_0x41f5('0x42')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x43')]), _0x41f5('0x21'))) {
    $.cookie(_0x2c74c3[_0x41f5('0x43')], _0x2c74c3[_0x41f5('0x29')], {
      'expires': 0x16d
    });
  } else {
    showCursor = !!_0x2c74c3[_0x41f5('0x45')]($[_0x41f5('0x1f')](_0x41f5('0x44')), _0x2c74c3[_0x41f5('0x29')]);
    $(_0x2c74c3[_0x41f5('0x46')])[_0x41f5('0x7e')](!showCursor ? _0x2c74c3[_0x41f5('0x3c')] : _0x2c74c3[_0x41f5('0x3e')]);
  }
  if (_0x2c74c3.snWUc(typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7f')]), _0x2c74c3[_0x41f5('0x26')])) {
    $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7f')], _0x2c74c3[_0x41f5('0x29')], {
      'expires': 0x16d
    });
  } else {
    showGrid = !!($.cookie("showGrid") === "true");
    _0x2c74c3.zrtij($, _0x2c74c3[_0x41f5('0x80')])[_0x41f5('0x7e')](!showGrid ? _0x2c74c3[_0x41f5('0x3c')] : _0x2c74c3.NkGyg);
  }
  if (_0x2c74c3[_0x41f5('0x4c')](typeof $.cookie(_0x41f5('0x81')), _0x2c74c3.CrrdT)) {
    $.cookie(_0x2c74c3[_0x41f5('0x4d')], _0x2c74c3[_0x41f5('0x29')], {
      'expires': 0x16d
    });
  } else {
    centerPallet = !!_0x2c74c3[_0x41f5('0x4c')]($[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x4d')]), _0x2c74c3[_0x41f5('0x29')]);
    _0x2c74c3.zrtij($, _0x2c74c3[_0x41f5('0x4e')])[_0x41f5('0x7e')](!centerPallet ? _0x2c74c3[_0x41f5('0x4f')] : _0x2c74c3[_0x41f5('0x82')]);
    if (!centerPallet) {
      $(_0x2c74c3.XAUrU)[_0x41f5('0x83')](_0x2c74c3[_0x41f5('0x84')]);
      _0x2c74c3.xlPjr($, _0x2c74c3.qBBMA)[_0x41f5('0x83')](_0x2c74c3.Ebbij);
      _0x2c74c3[_0x41f5('0x53')]($, _0x2c74c3[_0x41f5('0x58')])[_0x41f5('0x83')](_0x2c74c3[_0x41f5('0x85')]);
      _0x2c74c3[_0x41f5('0x53')]($, _0x2c74c3[_0x41f5('0x5a')])[_0x41f5('0x83')]("groupUp");
    }
  }
  if (_0x2c74c3[_0x41f5('0x4c')](typeof $[_0x41f5('0x1f')](_0x2c74c3.TmgPl), _0x2c74c3[_0x41f5('0x26')])) {
    $.cookie(_0x2c74c3[_0x41f5('0x5c')], textDisplay, {
      'expires': 0x16d
    });
  } else {
    textDisplay = $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')]);
    _0x2c74c3[_0x41f5('0x53')]($, _0x2c74c3[_0x41f5('0x5e')])[_0x41f5('0x86')]("selectedIndex", textDisplay);
    _displayText = _0x2c74c3[_0x41f5('0x53')]($, _0x2c74c3[_0x41f5('0x60')]).text();
    if (_0x2c74c3[_0x41f5('0x4c')](_displayText, _0x2c74c3.yqtpu)) {
      textDisplay = 0x0;
      $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')], 0x0, {
        'expires': 0x16d
      });
      _0x2c74c3[_0x41f5('0x63')]($, _0x2c74c3[_0x41f5('0x87')])[_0x41f5('0x7a')]();
      _0x2c74c3[_0x41f5('0x63')]($, _0x41f5('0x69'))[_0x41f5('0x7a')]();
    } else if (_0x2c74c3[_0x41f5('0x4c')](_displayText, _0x2c74c3[_0x41f5('0x65')])) {
      textDisplay = 0x1;
      $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')], 0x1, {
        'expires': 0x16d
      });
      _0x2c74c3[_0x41f5('0x67')]($, _0x41f5('0x64'))[_0x41f5('0x7a')]();
      _0x2c74c3[_0x41f5('0x67')]($, _0x2c74c3[_0x41f5('0x68')])[_0x41f5('0x78')]();
    } else if (_0x2c74c3[_0x41f5('0x4c')](_displayText, _0x2c74c3[_0x41f5('0x6a')])) {
      textDisplay = 0x2;
      $[_0x41f5('0x1f')](_0x2c74c3.TmgPl, 0x2, {
        'expires': 0x16d
      });
      _0x2c74c3[_0x41f5('0x67')]($, _0x41f5('0x64'))[_0x41f5('0x78')]();
      $(_0x2c74c3[_0x41f5('0x68')]).show();
    }
  }
  if (typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x6c')]) === _0x2c74c3[_0x41f5('0x26')]) {
    $[_0x41f5('0x1f')](_0x41f5('0x6d'), _zoom, {
      'expires': 0x16d
    });
  } else {
    _zoom = $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x6c')]);
    FinalZoom = _0x2c74c3[_0x41f5('0x67')](calcZoom, Math[_0x41f5('0x88')](1.1, _zoom));
  }
  if (_0x2c74c3[_0x41f5('0x4c')](typeof $[_0x41f5('0x1f')]("categories"), _0x2c74c3[_0x41f5('0x26')])) {
    $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x6e')], '', {
      'expires': 0x16d
    });
  } else {
    var _0x396274 = $[_0x41f5('0x1f')](_0x2c74c3.jIsmc).split(" ");
    console.log(_0x41f5('0x89') + _0x396274 + _0x41f5('0x8a') + $.cookie(_0x2c74c3.jIsmc) + ", ");
    _url = dataUrl + _0x2c74c3[_0x41f5('0x70')];
    $[_0x41f5('0x8b')]({
      'type': _0x2c74c3[_0x41f5('0x72')],
      'url': _url,
      'dataType': _0x2c74c3[_0x41f5('0x74')],
      'success': function (_0x44e860) {
        categories = jQuery[_0x41f5('0x8c')](JSON[_0x41f5('0x8d')](_0x44e860))[_0x41f5('0x8e')];
        categories[_0x41f5('0x8f')]();
        for (var _0x5261f4 = 0x0; _0x2c74c3.hZjjR(_0x5261f4, categories.length); _0x5261f4++) {
          _0x2c74c3[_0x41f5('0x23')]($, "#config-categorie")[_0x41f5('0x8')]("<label><input type=\"checkbox\" name=\"" + categories[_0x5261f4][0x1] + "\" " + (_0x2c74c3[_0x41f5('0x90')]($[_0x41f5('0x91')](categories[_0x5261f4][0x1], _0x396274), -0x1) ? _0x2c74c3[_0x41f5('0x92')] : '') + _0x41f5('0x93') + categories[_0x5261f4][0x1] + "\">" + categories[_0x5261f4][0x0] + _0x41f5('0x94'));
        }
      }
    });
  }
  console[_0x41f5('0x7b')]($[_0x41f5('0x1f')](_0x2c74c3.Bjimi) + " " + $[_0x41f5('0x1f')](_0x2c74c3.aWkAx) + " " + $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x43')]) + " " + $[_0x41f5('0x1f')](_0x41f5('0x49')) + " " + $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')]) + " " + $[_0x41f5('0x1f')](_0x41f5('0x6d')));
}
function setupEvents() {
  var _0x1cd393 = {
    [_0x41f5('0x95')]: function (_0x459eac, _0x140c70, _0xbe528c) {
      return _0x459eac(_0x140c70, _0xbe528c);
    },
    [_0x41f5('0x96')]: function (_0x50f060, _0x4fe4da) {
      return _0x50f060(_0x4fe4da);
    },
    [_0x41f5('0x97')]: _0x41f5('0x98'),
    [_0x41f5('0x99')]: "https://discord.io/pixelatlas",
    [_0x41f5('0x9a')]: "_blank",
    "UNUVP": "#inputName",
    [_0x41f5('0x9b')]: function (_0x4b08d7, _0x36d31f) {
      return _0x4b08d7 / _0x36d31f;
    },
    [_0x41f5('0x9c')]: function (_0x9a1a27, _0x177190) {
      return _0x9a1a27 + _0x177190;
    },
    "UKjqL": function (_0x17624c, _0x2336f5) {
      return _0x17624c / _0x2336f5;
    },
    [_0x41f5('0x9d')]: function (_0x20cf5f, _0xc65ae5) {
      return _0x20cf5f == _0xc65ae5;
    },
    [_0x41f5('0x9e')]: function (_0x5b9f72, _0x403a3e) {
      return _0x5b9f72(_0x403a3e);
    },
    [_0x41f5('0x9f')]: function (_0x56a729, _0x225a3e) {
      return _0x56a729 + _0x225a3e;
    },
    "YRLnk": _0x41f5('0xa0'),
    [_0x41f5('0xa1')]: _0x41f5('0xa2'),
    [_0x41f5('0xa3')]: function (_0x340abe, _0x55d904) {
      return _0x340abe(_0x55d904);
    },
    [_0x41f5('0xa4')]: _0x41f5('0xa5'),
    [_0x41f5('0xa6')]: function (_0x34cd51) {
      return _0x34cd51();
    },
    [_0x41f5('0xa7')]: function (_0x475c31, _0xe990fb) {
      return _0x475c31(_0xe990fb);
    },
    [_0x41f5('0xa8')]: _0x41f5('0x13'),
    [_0x41f5('0xa9')]: "cursorAlpha",
    [_0x41f5('0xaa')]: function (_0x384ee0, _0x3b579f) {
      return _0x384ee0(_0x3b579f);
    },
    [_0x41f5('0xab')]: function (_0x1e383d, _0x34479c) {
      return _0x1e383d(_0x34479c);
    },
    [_0x41f5('0xac')]: function (_0x2cf85e, _0x4b3a80) {
      return _0x2cf85e(_0x4b3a80);
    },
    "OWTKJ": _0x41f5('0x38'),
    [_0x41f5('0xad')]: function (_0x1681b5, _0x182c32) {
      return _0x1681b5(_0x182c32);
    },
    [_0x41f5('0xae')]: _0x41f5('0xaf'),
    [_0x41f5('0xb0')]: _0x41f5('0x33'),
    [_0x41f5('0xb1')]: _0x41f5('0x81'),
    [_0x41f5('0xb2')]: "categories",
    [_0x41f5('0xb3')]: "zoom",
    [_0x41f5('0xb4')]: _0x41f5('0x30'),
    [_0x41f5('0xb5')]: "showGrid",
    [_0x41f5('0xb6')]: _0x41f5('0xb7'),
    [_0x41f5('0xb8')]: function (_0x2b54d7, _0x50885a) {
      return _0x2b54d7 === _0x50885a;
    },
    [_0x41f5('0xb9')]: "textDisplay",
    [_0x41f5('0xba')]: _0x41f5('0x64'),
    [_0x41f5('0xbb')]: function (_0x30a135, _0x585d32) {
      return _0x30a135(_0x585d32);
    },
    [_0x41f5('0xbc')]: _0x41f5('0x69'),
    [_0x41f5('0xbd')]: function (_0x47d377, _0x5d71d6) {
      return _0x47d377(_0x5d71d6);
    },
    [_0x41f5('0xbe')]: _0x41f5('0x6b'),
    "GUvEN": function (_0x481721, _0x1cd5f0) {
      return _0x481721(_0x1cd5f0);
    },
    [_0x41f5('0xbf')]: function (_0x2d523b, _0x402691) {
      return _0x2d523b(_0x402691);
    },
    [_0x41f5('0xc0')]: _0x41f5('0x47'),
    [_0x41f5('0xc1')]: "Show",
    [_0x41f5('0xc2')]: _0x41f5('0x44'),
    [_0x41f5('0xc3')]: "#config-hidegrid",
    [_0x41f5('0xc4')]: _0x41f5('0x3f'),
    [_0x41f5('0xc5')]: function (_0x416ab0, _0x3c0877) {
      return _0x416ab0(_0x3c0877);
    },
    [_0x41f5('0xc6')]: "#config-hidezoom",
    [_0x41f5('0xc7')]: function (_0x699491, _0xb0b502) {
      return _0x699491(_0xb0b502);
    },
    [_0x41f5('0xc8')]: _0x41f5('0x11'),
    "BstgM": _0x41f5('0x3b'),
    [_0x41f5('0xc9')]: _0x41f5('0xca'),
    [_0x41f5('0xcb')]: _0x41f5('0xcc'),
    [_0x41f5('0xcd')]: _0x41f5('0x50'),
    [_0x41f5('0xce')]: function (_0x39e7d6, _0xb38309) {
      return _0x39e7d6(_0xb38309);
    },
    [_0x41f5('0xcf')]: "div#colors",
    [_0x41f5('0xd0')]: "colorsLeft",
    [_0x41f5('0xd1')]: _0x41f5('0x55'),
    [_0x41f5('0xd2')]: _0x41f5('0x57'),
    "FoOcx": _0x41f5('0x59'),
    [_0x41f5('0xd3')]: _0x41f5('0xd4'),
    [_0x41f5('0xd5')]: function (_0x58b2b7, _0x3687d6) {
      return _0x58b2b7(_0x3687d6);
    },
    [_0x41f5('0xd6')]: _0x41f5('0x5b'),
    [_0x41f5('0xd7')]: _0x41f5('0xd8'),
    "fCQbt": function (_0xb7a1c, _0x2c0c13) {
      return _0xb7a1c(_0x2c0c13);
    },
    [_0x41f5('0xd9')]: _0x41f5('0xda'),
    [_0x41f5('0xdb')]: function (_0xb54215, _0x2eb378) {
      return _0xb54215 > _0x2eb378;
    },
    [_0x41f5('0xdc')]: function (_0x49c399, _0x814681) {
      return _0x49c399(_0x814681);
    },
    [_0x41f5('0xdd')]: _0x41f5('0xde'),
    [_0x41f5('0xdf')]: function (_0x36b20f) {
      return _0x36b20f();
    },
    [_0x41f5('0xe0')]: _0x41f5('0xe1'),
    "VUnGl": function (_0x5b1748, _0x9617b7) {
      return _0x5b1748(_0x9617b7);
    },
    [_0x41f5('0xe2')]: function (_0x199612, _0xec4b7d) {
      return _0x199612(_0xec4b7d);
    },
    "dBDPP": _0x41f5('0x2d'),
    [_0x41f5('0xe3')]: "minimize",
    "eRGXR": _0x41f5('0x2e'),
    [_0x41f5('0xe4')]: _0x41f5('0x28'),
    [_0x41f5('0xe5')]: function (_0x345e9f, _0x5d1262) {
      return _0x345e9f(_0x5d1262);
    },
    [_0x41f5('0xe6')]: _0x41f5('0x2a'),
    [_0x41f5('0xe7')]: _0x41f5('0xe8'),
    "aZiCR": function (_0x1f0d82, _0x4ef0f3) {
      return _0x1f0d82(_0x4ef0f3);
    },
    [_0x41f5('0xe9')]: function (_0x455238) {
      return _0x455238();
    },
    [_0x41f5('0xea')]: function (_0xda4090, _0x29d753) {
      return _0xda4090(_0x29d753);
    },
    [_0x41f5('0xeb')]: _0x41f5('0xec'),
    "fKvXi": function (_0x1d40e4, _0x1d5779) {
      return _0x1d40e4(_0x1d5779);
    },
    "yUCjX": function (_0x2efe4b, _0x434362) {
      return _0x2efe4b(_0x434362);
    },
    [_0x41f5('0xed')]: function (_0x17434d, _0x9491e8) {
      return _0x17434d(_0x9491e8);
    },
    [_0x41f5('0xee')]: function (_0x127637, _0x4758d7) {
      return _0x127637(_0x4758d7);
    },
    [_0x41f5('0xef')]: _0x41f5('0xf0'),
    [_0x41f5('0xf1')]: _0x41f5('0xf2'),
    "cQoqF": function (_0x2d924b, _0x18675e) {
      return _0x2d924b(_0x18675e);
    },
    [_0x41f5('0xf3')]: _0x41f5('0xf4'),
    [_0x41f5('0xf5')]: _0x41f5('0xf6'),
    [_0x41f5('0xf7')]: "#config-reset",
    [_0x41f5('0xf8')]: "#config-text",
    [_0x41f5('0xf9')]: "vertical",
    [_0x41f5('0xfa')]: _0x41f5('0x3'),
    [_0x41f5('0xfb')]: _0x41f5('0xfc'),
    [_0x41f5('0xfd')]: function (_0x4c5ccc, _0x2984ac) {
      return _0x4c5ccc(_0x2984ac);
    },
    [_0x41f5('0xfe')]: _0x41f5('0xff'),
    "UPvDV": _0x41f5('0x100'),
    [_0x41f5('0x101')]: function (_0x43b970, _0x1a9ed0) {
      return _0x43b970(_0x1a9ed0);
    },
    [_0x41f5('0x102')]: _0x41f5('0x103'),
    [_0x41f5('0x104')]: "#gameWindow"
  };
  _0x1cd393[_0x41f5('0xea')]($, _0x1cd393.oSLoL)[_0x41f5('0x105')](function () {
    _0x1cd393[_0x41f5('0x95')](getCursorColor, $(this)[_0x41f5('0x106')](), true);
  });
  _0x1cd393[_0x41f5('0x107')]($, _0x41f5('0x108'))[_0x41f5('0x109')](function () {
    $[_0x41f5('0x1f')](_0x41f5('0x19'), 0x1, {
      'expires': 0x16d
    });
    _0x1cd393[_0x41f5('0x96')]($, _0x1cd393[_0x41f5('0x97')])[_0x41f5('0x10a')](0x64);
  });
  _0x1cd393[_0x41f5('0x10b')]($, _0x41f5('0x10c'))[_0x41f5('0x109')](function () {
    window[_0x41f5('0x10d')](_0x1cd393[_0x41f5('0x99')], _0x1cd393.ejcZS);
  });
  _0x1cd393[_0x41f5('0xed')]($, _0x1cd393[_0x41f5('0x10e')])[_0x41f5('0x10f')]({
    'source': availableFactions
  });
  _0x1cd393[_0x41f5('0xee')]($, _0x1cd393.tfrYR)[_0x41f5('0x109')](function () {
    inputTxt = _0x1cd393[_0x41f5('0x96')]($, "#inputName")[_0x41f5('0x106')]();
    if (templateList[_0x41f5('0x110')](inputTxt)) {
      var _0x4ed03f = Math[_0x41f5('0x111')](templateList[inputTxt].x + _0x1cd393.DdRJS(templateList[inputTxt].width, 0x2));
      var _0x237aa0 = Math.round(_0x1cd393[_0x41f5('0x9c')](templateList[inputTxt].y, _0x1cd393[_0x41f5('0x112')](templateList[inputTxt][_0x41f5('0x113')], 0x2)));
      window[_0x41f5('0x114')][_0x41f5('0x115')](_0x41f5('0x116') + _0x4ed03f + "," + _0x237aa0);
    }
  });
  _0x1cd393[_0x41f5('0xee')]($, _0x1cd393[_0x41f5('0x10e')]).keypress(function (_0xd167a) {
    if (_0x1cd393.vUpvy(_0xd167a.which, 0xd)) {
      inputTxt = _0x1cd393[_0x41f5('0x9e')]($, _0x41f5('0x117'))[_0x41f5('0x106')]();
      if (templateList[_0x41f5('0x110')](inputTxt)) {
        var _0x55e907 = Math[_0x41f5('0x111')](templateList[inputTxt].x + _0x1cd393[_0x41f5('0x112')](templateList[inputTxt].width, 0x2));
        var _0x4de2db = Math[_0x41f5('0x111')](_0x1cd393[_0x41f5('0x9f')](templateList[inputTxt].y, templateList[inputTxt][_0x41f5('0x113')] / 0x2));
        window[_0x41f5('0x114')][_0x41f5('0x115')](_0x41f5('0x116') + _0x55e907 + "," + _0x4de2db);
      }
    }
  });
  _0x1cd393[_0x41f5('0xee')]($, _0x1cd393[_0x41f5('0xf1')])[_0x41f5('0x109')](function () {
    var _0x390412 = _0x1cd393[_0x41f5('0x118')][_0x41f5('0x1c')]("|");
    var _0xed5296 = 0x0;
    while (true) {
      switch (_0x390412[_0xed5296++]) {
        case "0":
          _0xf031b2[_0x41f5('0x119')](0x1f4);
          continue;
        case "1":
          if (_0x53f2ab[_0x41f5('0x11a')] > 0x0) {
            _0x1cd393.ozFiD($, _0x1cd393[_0x41f5('0xa1')])[_0x41f5('0x10a')](0x1f4);
            return;
          }
          continue;
        case "2":
          var _0x53f2ab = $(_0x1cd393.xZwAc);
          continue;
        case "3":
          var _0xf031b2 = _0x1cd393[_0x41f5('0xa3')]($, _0x1cd393[_0x41f5('0xa4')]);
          continue;
        case "4":
          _0x1cd393[_0x41f5('0xa6')](VisibleBoxies);
          continue;
      }
      break;
    }
  });
  var _0x55304d = _0x1cd393[_0x41f5('0x11b')]($, _0x41f5('0x11c'));
  $(_0x41f5('0x11d'))[_0x41f5('0x1e')]({
    'range': _0x41f5('0x3'),
    'min': 0x0,
    'max': 0x64,
    'value': $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xa9')]),
    'create': function () {
      val = _0x1cd393[_0x41f5('0xa7')]($, this)[_0x41f5('0x1e')](_0x1cd393.BbkxG);
      _0x55304d.text(val);
      cursorAlpha = parseInt(val);
      $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xa9')], cursorAlpha, {
        'expires': 0x16d
      });
    },
    'slide': function (_0x4da056, _0x31ef8f) {
      val = _0x31ef8f[_0x41f5('0x13')];
      _0x55304d[_0x41f5('0x7e')](_0x31ef8f[_0x41f5('0x13')]);
      cursorAlpha = _0x1cd393[_0x41f5('0xaa')](parseInt, val);
      $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xa9')], cursorAlpha, {
        'expires': 0x16d
      });
    }
  });
  var _0x451535 = $(_0x1cd393[_0x41f5('0xf3')]);
  $(_0x1cd393[_0x41f5('0xf5')])[_0x41f5('0x1e')]({
    'range': "min",
    'min': 0x0,
    'max': 0x64,
    'value': $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0x11e')]),
    'create': function () {
      val = _0x1cd393[_0x41f5('0xab')]($, this)[_0x41f5('0x1e')](_0x1cd393[_0x41f5('0xa8')]);
      _0x451535.text($(this)[_0x41f5('0x1e')](_0x41f5('0x13')));
      gridAlpha = _0x1cd393[_0x41f5('0xac')](parseInt, val);
      $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0x11e')], gridAlpha, {
        'expires': 0x16d
      });
    },
    'slide': function (_0x71bb6, _0xa04f5) {
      val = _0xa04f5[_0x41f5('0x13')];
      _0x451535[_0x41f5('0x7e')](_0xa04f5[_0x41f5('0x13')]);
      gridAlpha = _0x1cd393[_0x41f5('0xad')](parseInt, val);
      $[_0x41f5('0x1f')]("gridAlpha", gridAlpha, {
        'expires': 0x16d
      });
    }
  });
  _0x1cd393[_0x41f5('0x11b')]($, _0x1cd393[_0x41f5('0xf7')])[_0x41f5('0x109')](function () {
    if (window[_0x41f5('0x11f')](_0x41f5('0x120'))) {
      var _0x4db085 = _0x1cd393.hcZGO[_0x41f5('0x1c')]("|");
      var _0x5b8047 = 0x0;
      while (true) {
        switch (_0x4db085[_0x5b8047++]) {
          case "0":
            cursorColor = _0x1cd393[_0x41f5('0xb0')];
            continue;
          case "1":
            $[_0x41f5('0x1f')](_0x41f5('0x5d'), textDisplay, {
              'expires': 0x16d
            });
            continue;
          case "2":
            $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb1')], centerPallet, {
              'expires': 0x16d
            });
            continue;
          case "3":
            cursorAlpha = 0x5a;
            continue;
          case "4":
            $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb2')], '', {
              'expires': 0x16d
            });
            continue;
          case "5":
            $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb3')], _zoom, {
              'expires': 0x16d
            });
            continue;
          case "6":
            gridAlpha = 0x32;
            continue;
          case "7":
            _0x55304d[_0x41f5('0x7e')](cursorAlpha);
            continue;
          case "8":
            window[_0x41f5('0x114')][_0x41f5('0x121')]();
            continue;
          case "9":
            showCursor = true;
            continue;
          case "10":
            _0x451535[_0x41f5('0x7e')](gridAlpha);
            continue;
          case "11":
            $[_0x41f5('0x1f')](_0x41f5('0x44'), showCursor, {
              'expires': 0x16d
            });
            continue;
          case "12":
            $.cookie(_0x1cd393.OWTKJ, gridAlpha, {
              'expires': 0x16d
            });
            continue;
          case "13":
            $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb4')], _0x1cd393[_0x41f5('0xb0')], {
              'expires': 0x16d
            });
            continue;
          case "14":
            showGrid = true;
            continue;
          case "15":
            centerPallet = true;
            continue;
          case "16":
            $.cookie(_0x1cd393[_0x41f5('0xb5')], showGrid, {
              'expires': 0x16d
            });
            continue;
          case "17":
            $[_0x41f5('0x1f')](_0x1cd393.PkhfI, cursorAlpha, {
              'expires': 0x16d
            });
            continue;
          case "18":
            showSlider = true;
            continue;
          case "19":
            textDisplay = 0x0;
            continue;
          case "20":
            _zoom = 0x1e;
            continue;
        }
        break;
      }
    }
  });
  $(_0x1cd393[_0x41f5('0xf8')])[_0x41f5('0x109')](function () {
    _displayText = $(_0x1cd393[_0x41f5('0xb6')])[_0x41f5('0x7e')]();
    console[_0x41f5('0x7b')](_displayText);
    if (_0x1cd393.UWEXE(_displayText, _0x41f5('0x62'))) {
      textDisplay = 0x0;
      $.cookie(_0x1cd393.BlJkF, 0x0, {
        'expires': 0x16d
      });
      _0x1cd393[_0x41f5('0xad')]($, _0x1cd393[_0x41f5('0xba')])[_0x41f5('0x7a')]();
      _0x1cd393[_0x41f5('0xbb')]($, _0x1cd393.ergdm)[_0x41f5('0x7a')]();
    } else if (_displayText === "Text only") {
      textDisplay = 0x1;
      $[_0x41f5('0x1f')](_0x1cd393.BlJkF, 0x1, {
        'expires': 0x16d
      });
      _0x1cd393[_0x41f5('0xbd')]($, _0x1cd393[_0x41f5('0xba')])[_0x41f5('0x7a')]();
      _0x1cd393.KWfIX($, _0x1cd393[_0x41f5('0xbc')]).hide();
    } else if (_0x1cd393[_0x41f5('0xb8')](_displayText, _0x1cd393.aagPN)) {
      textDisplay = 0x2;
      $[_0x41f5('0x1f')](_0x1cd393.BlJkF, 0x2, {
        'expires': 0x16d
      });
      _0x1cd393[_0x41f5('0x122')]($, _0x41f5('0x64'))[_0x41f5('0x78')]();
      _0x1cd393[_0x41f5('0x122')]($, _0x41f5('0x69'))[_0x41f5('0x7a')]();
    }
  });
  _0x1cd393[_0x41f5('0x11b')]($, _0x1cd393[_0x41f5('0xc0')])[_0x41f5('0x109')](function () {
    showCursor = !showCursor;
    _0x1cd393[_0x41f5('0xbf')]($, _0x1cd393[_0x41f5('0xc0')])[_0x41f5('0x7e')](!showCursor ? _0x1cd393[_0x41f5('0xc1')] : _0x41f5('0x3f'));
    $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xc2')], showCursor, {
      'expires': 0x16d
    });
  });
  $(_0x1cd393.AEcoR)[_0x41f5('0x109')](function () {
    showGrid = !showGrid;
    $(_0x1cd393[_0x41f5('0xc3')])[_0x41f5('0x7e')](!showGrid ? _0x1cd393[_0x41f5('0xc1')] : _0x1cd393[_0x41f5('0xc4')]);
    $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb5')], showGrid, {
      'expires': 0x16d
    });
  });
  $(_0x1cd393[_0x41f5('0xc6')])[_0x41f5('0x109')](function () {
    showSlider = !showSlider;
    _0x1cd393[_0x41f5('0xc5')]($, _0x1cd393[_0x41f5('0xc6')])[_0x41f5('0x7e')](!showSlider ? _0x41f5('0x3d') : _0x1cd393[_0x41f5('0xc4')]);
    if (showSlider) {
      _0x1cd393[_0x41f5('0xc7')]($, _0x1cd393[_0x41f5('0xc8')])[_0x41f5('0x7a')]();
    } else {
      _0x1cd393[_0x41f5('0xc7')]($, _0x1cd393[_0x41f5('0xc8')]).hide();
    }
    $.cookie(_0x1cd393[_0x41f5('0x123')], showSlider, {
      'expires': 0x16d
    });
  });
  _0x1cd393[_0x41f5('0x11b')]($, _0x1cd393[_0x41f5('0xc9')]).click(function () {
    centerPallet = !centerPallet;
    $(_0x1cd393.ZkAwF)[_0x41f5('0x7e')](!centerPallet ? _0x1cd393[_0x41f5('0xcb')] : _0x1cd393[_0x41f5('0xcd')]);
    _0x1cd393[_0x41f5('0xce')]($, _0x1cd393[_0x41f5('0xcf')])[_0x41f5('0x124')](_0x1cd393.kfYmd);
    $(_0x1cd393[_0x41f5('0xd1')]).toggleClass(_0x1cd393[_0x41f5('0xd2')]);
    $(_0x1cd393[_0x41f5('0x125')])[_0x41f5('0x124')](_0x1cd393[_0x41f5('0xd3')]);
    _0x1cd393[_0x41f5('0xd5')]($, _0x1cd393[_0x41f5('0xd6')])[_0x41f5('0x124')](_0x1cd393[_0x41f5('0xd3')]);
    $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb1')], centerPallet, {
      'expires': 0x16d
    });
  });
  $(_0x1cd393[_0x41f5('0xc8')]).slider({
    'orientation': _0x1cd393[_0x41f5('0xf9')],
    'range': _0x1cd393[_0x41f5('0xfa')],
    'min': 0xa,
    'max': 0x3c,
    'value': 0x1e,
    'slide': function (_0x54d3b0, _0x23bd3d) {
      _zoom = _0x23bd3d[_0x41f5('0x13')];
      FinalZoom = calcZoom(Math[_0x41f5('0x88')](1.1, _zoom));
      $[_0x41f5('0x1f')](_0x41f5('0x6d'), _zoom, {
        'expires': 0x16d
      });
    }
  });
  _0x1cd393[_0x41f5('0x11b')]($, _0x1cd393[_0x41f5('0xfb')])[_0x41f5('0x109')](function () {
    var _0x1bf50a = _0x1cd393[_0x41f5('0xd7')][_0x41f5('0x1c')]("|");
    var _0x2bb8f2 = 0x0;
    while (true) {
      switch (_0x1bf50a[_0x2bb8f2++]) {
        case "0":
          _0x3a05a6[_0x41f5('0x119')](0x1f4);
          continue;
        case "1":
          var _0x500551 = _0x1cd393[_0x41f5('0x126')]($, _0x1cd393.liLsh);
          continue;
        case "2":
          if (_0x1cd393[_0x41f5('0xdb')](_0x500551[_0x41f5('0x11a')], 0x0)) {
            _0x1cd393[_0x41f5('0xdc')]($, _0x1cd393[_0x41f5('0xd9')]).slideUp(0x1f4);
            return;
          }
          continue;
        case "3":
          var _0x3a05a6 = $(_0x1cd393.tnYgD);
          continue;
        case "4":
          _0x1cd393[_0x41f5('0xdf')](VisibleBoxies);
          continue;
      }
      break;
    }
  });
  _0x1cd393[_0x41f5('0xfd')]($, _0x1cd393[_0x41f5('0xfe')])[_0x41f5('0x109')](function () {
    var _0x449425 = $(_0x1cd393[_0x41f5('0xdd')]);
    if (_0x449425.is(_0x1cd393[_0x41f5('0xe0')])) {
      _0x449425[_0x41f5('0x10a')](0x1f4);
      return;
    }
    var _0xe76531 = _0x1cd393[_0x41f5('0xdc')]($, _0x1cd393[_0x41f5('0xd9')]);
    if (_0x1cd393[_0x41f5('0xdb')](_0xe76531[_0x41f5('0x11a')], 0x0)) {
      _0x1cd393[_0x41f5('0xdc')]($, _0x1cd393[_0x41f5('0xd9')])[_0x41f5('0x10a')](0x1f4);
    }
  });
  _0x1cd393[_0x41f5('0xfd')]($, _0x1cd393[_0x41f5('0x127')])[_0x41f5('0x109')](function () {
    var _0x11141f = _0x1cd393[_0x41f5('0xdc')]($, _0x1cd393[_0x41f5('0xa4')]);
    if (_0x11141f.is(_0x1cd393.eHnRM)) {
      _0x11141f[_0x41f5('0x10a')](0x1f4);
      return;
    }
    var _0x4f128f = _0x1cd393[_0x41f5('0x128')]($, _0x41f5('0xa2'));
    if (_0x4f128f[_0x41f5('0x11a')] > 0x0) {
      _0x1cd393[_0x41f5('0xe2')]($, _0x1cd393[_0x41f5('0xa1')])[_0x41f5('0x10a')](0x1f4);
    }
  });
  _0x1cd393[_0x41f5('0x101')]($, _0x41f5('0x2d'))[_0x41f5('0x129')](function () {
    if ($(_0x1cd393[_0x41f5('0x12a')])[_0x41f5('0x12b')](_0x1cd393[_0x41f5('0xe3')])) {
      _0x1cd393[_0x41f5('0xe2')]($, _0x1cd393[_0x41f5('0x12a')])[_0x41f5('0x12c')](_0x1cd393[_0x41f5('0xe3')]);
    }
  });
  _0x1cd393[_0x41f5('0x101')]($, _0x1cd393[_0x41f5('0x102')])[_0x41f5('0x109')](function () {
    $(_0x1cd393[_0x41f5('0x12a')])[_0x41f5('0x78')]();
    $(_0x1cd393[_0x41f5('0x12d')])[_0x41f5('0x7a')]();
    $.cookie(_0x1cd393.hxqEa, "false", {
      'expires': 0x16d
    });
  });
  _0x1cd393[_0x41f5('0x101')]($, _0x1cd393[_0x41f5('0x12d')])[_0x41f5('0x109')](function () {
    $(_0x1cd393[_0x41f5('0x12a')]).show();
    _0x1cd393[_0x41f5('0xe5')]($, _0x1cd393[_0x41f5('0x12d')])[_0x41f5('0x78')]();
    $[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xe4')], _0x1cd393[_0x41f5('0xe6')], {
      'expires': 0x16d
    });
  });
  _0x1cd393[_0x41f5('0x101')]($, _0x1cd393[_0x41f5('0x104')])[_0x41f5('0x12e')](function () {
    var _0x1d5eb1 = _0x1cd393[_0x41f5('0xe7')][_0x41f5('0x1c')]("|");
    var _0x2c870 = 0x0;
    while (true) {
      switch (_0x1d5eb1[_0x2c870++]) {
        case "0":
          _0x1cd393.oTXXw(drawCursor);
          continue;
        case "1":
          _0x1cd393.oTXXw(drawGrid);
          continue;
        case "2":
          var _0xd7e6f0 = _0x1cd393.wPqgH($, _0x41f5('0x12f'))[0x0][_0x41f5('0x130')][_0x41f5('0x115')]("(", '').replace(")", '').split(",");
          continue;
        case "3":
          curX = _0x1cd393[_0x41f5('0x131')](parseInt, _0xd7e6f0[0x0]);
          continue;
        case "4":
          _0x1cd393[_0x41f5('0xe9')](loadTemplates);
          continue;
        case "5":
          curY = _0x1cd393[_0x41f5('0xea')](parseInt, _0xd7e6f0[0x1]);
          continue;
      }
      break;
    }
  });
}
function getCursorColor(_0x4d6b0b, _0x49e0d1 = false) {
  var _0x5a6ee7 = {
    "UXNIm": _0x41f5('0x33'),
    [_0x41f5('0x132')]: "#CursorColor",
    [_0x41f5('0x133')]: _0x41f5('0x134'),
    "isYgf": _0x41f5('0xd'),
    [_0x41f5('0x135')]: _0x41f5('0x30'),
    [_0x41f5('0x136')]: _0x41f5('0x137'),
    [_0x41f5('0x138')]: function (_0x105f67, _0x4682f5) {
      return _0x105f67(_0x4682f5);
    },
    [_0x41f5('0x139')]: _0x41f5('0x13a'),
    [_0x41f5('0x13b')]: _0x41f5('0x13c'),
    [_0x41f5('0x13d')]: function (_0x24233d, _0x3273e3) {
      return _0x24233d(_0x3273e3);
    },
    [_0x41f5('0x13e')]: _0x41f5('0x13f'),
    [_0x41f5('0x140')]: "TEAL",
    [_0x41f5('0x141')]: function (_0xcde2, _0x50485f) {
      return _0xcde2(_0x50485f);
    },
    [_0x41f5('0x142')]: _0x41f5('0x143'),
    [_0x41f5('0x144')]: _0x41f5('0x145'),
    [_0x41f5('0x146')]: "#3D9970",
    [_0x41f5('0x147')]: _0x41f5('0x148'),
    [_0x41f5('0x149')]: _0x41f5('0x14a'),
    [_0x41f5('0x14b')]: _0x41f5('0x14c'),
    [_0x41f5('0x14d')]: _0x41f5('0x14e'),
    [_0x41f5('0x14f')]: _0x41f5('0x150'),
    [_0x41f5('0x151')]: "#FFDC00",
    [_0x41f5('0x152')]: "ORANGE",
    [_0x41f5('0x153')]: function (_0x109a46, _0x1576c5) {
      return _0x109a46(_0x1576c5);
    },
    [_0x41f5('0x154')]: _0x41f5('0x155'),
    [_0x41f5('0x156')]: _0x41f5('0x157'),
    [_0x41f5('0x158')]: _0x41f5('0x159'),
    "lDvgg": _0x41f5('0x15a'),
    [_0x41f5('0x15b')]: _0x41f5('0x15c'),
    "fsoxh": _0x41f5('0x15d'),
    "MoFHL": "#F012BE",
    [_0x41f5('0x15e')]: _0x41f5('0x15f'),
    [_0x41f5('0x160')]: _0x41f5('0x161'),
    [_0x41f5('0x162')]: _0x41f5('0x163'),
    [_0x41f5('0x164')]: _0x41f5('0x165'),
    [_0x41f5('0x166')]: _0x41f5('0x167'),
    "LWtWj": _0x41f5('0x168'),
    [_0x41f5('0x169')]: _0x41f5('0x16a'),
    [_0x41f5('0x16b')]: "#DDDDDD"
  };
  switch (_0x4d6b0b) {
    default:
    case _0x5a6ee7[_0x41f5('0x16c')]:
      {
        $(_0x5a6ee7[_0x41f5('0x132')])[_0x41f5('0x16d')](_0x5a6ee7.mlqLc, _0x5a6ee7[_0x41f5('0x16e')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7.FrVAn, _0x5a6ee7[_0x41f5('0x16c')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7.isYgf;
        return _0x5a6ee7[_0x41f5('0x16e')];
      }
      break;
    case _0x5a6ee7[_0x41f5('0x136')]:
      {
        _0x5a6ee7[_0x41f5('0x138')]($, _0x5a6ee7.jiJpC).css(_0x5a6ee7[_0x41f5('0x133')], _0x5a6ee7[_0x41f5('0x139')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x5a6ee7[_0x41f5('0x136')], {
            'expires': 0x16d
          });
        }
        cursorColor = "#0074D9";
        return _0x5a6ee7.cBBGY;
      }
      break;
    case _0x5a6ee7[_0x41f5('0x13b')]:
      {
        _0x5a6ee7.YncJK($, _0x41f5('0xec'))[_0x41f5('0x16d')](_0x5a6ee7[_0x41f5('0x133')], _0x5a6ee7[_0x41f5('0x13e')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x5a6ee7[_0x41f5('0x13b')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x13e')];
        return _0x5a6ee7[_0x41f5('0x13e')];
      }
      break;
    case _0x5a6ee7[_0x41f5('0x140')]:
      {
        _0x5a6ee7.MrCKO($, _0x5a6ee7.jiJpC)[_0x41f5('0x16d')](_0x5a6ee7[_0x41f5('0x133')], _0x41f5('0x143'));
        if (_0x49e0d1) {
          $.cookie(_0x41f5('0x30'), _0x5a6ee7[_0x41f5('0x140')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x142')];
        return _0x41f5('0x143');
      }
      break;
    case _0x5a6ee7.OOJUT:
      {
        _0x5a6ee7[_0x41f5('0x141')]($, _0x5a6ee7[_0x41f5('0x132')])[_0x41f5('0x16d')](_0x41f5('0x134'), _0x5a6ee7.RpVDL);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')]("cursorColor", _0x5a6ee7[_0x41f5('0x144')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7.RpVDL;
        return _0x5a6ee7.RpVDL;
      }
      break;
    case _0x5a6ee7.zHhyn:
      {
        $(_0x41f5('0xec'))[_0x41f5('0x16d')](_0x41f5('0x134'), _0x5a6ee7[_0x41f5('0x149')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x5a6ee7[_0x41f5('0x147')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x149')];
        return _0x5a6ee7[_0x41f5('0x149')];
      }
      break;
    case _0x5a6ee7[_0x41f5('0x14b')]:
      {
        $(_0x5a6ee7[_0x41f5('0x132')])[_0x41f5('0x16d')](_0x41f5('0x134'), _0x5a6ee7[_0x41f5('0x14d')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x41f5('0x14c'), {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x14d')];
        return _0x5a6ee7[_0x41f5('0x14d')];
      }
      break;
    case _0x5a6ee7[_0x41f5('0x14f')]:
      {
        $(_0x5a6ee7[_0x41f5('0x132')]).css("background-color", _0x5a6ee7.UInad);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7.FrVAn, _0x5a6ee7[_0x41f5('0x14f')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x151')];
        return _0x5a6ee7[_0x41f5('0x151')];
      }
      break;
    case _0x5a6ee7.EDNZH:
      {
        _0x5a6ee7[_0x41f5('0x153')]($, _0x5a6ee7[_0x41f5('0x132')])[_0x41f5('0x16d')](_0x41f5('0x134'), _0x41f5('0x155'));
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x41f5('0x30'), "ORANGE", {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7.GYQRO;
        return _0x5a6ee7[_0x41f5('0x154')];
      }
      break;
    case _0x5a6ee7[_0x41f5('0x156')]:
      {
        _0x5a6ee7[_0x41f5('0x153')]($, "#CursorColor").css(_0x5a6ee7[_0x41f5('0x133')], _0x41f5('0x159'));
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x5a6ee7[_0x41f5('0x156')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x158')];
        return _0x5a6ee7[_0x41f5('0x158')];
      }
      break;
    case _0x5a6ee7[_0x41f5('0x16f')]:
      {
        _0x5a6ee7[_0x41f5('0x153')]($, _0x5a6ee7[_0x41f5('0x132')]).css(_0x41f5('0x134'), _0x5a6ee7[_0x41f5('0x15b')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x41f5('0x15a'), {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x15b')];
        return _0x41f5('0x15c');
      }
      break;
    case _0x41f5('0x15d'):
      {
        $(_0x5a6ee7[_0x41f5('0x132')])[_0x41f5('0x16d')](_0x5a6ee7[_0x41f5('0x133')], _0x41f5('0x170'));
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x5a6ee7[_0x41f5('0x171')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x172')];
        return _0x5a6ee7[_0x41f5('0x172')];
      }
      break;
    case _0x5a6ee7.iFtIP:
      {
        _0x5a6ee7.mARXQ($, _0x5a6ee7[_0x41f5('0x132')])[_0x41f5('0x16d')](_0x5a6ee7.mlqLc, _0x5a6ee7[_0x41f5('0x160')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')]("cursorColor", _0x5a6ee7[_0x41f5('0x15e')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x41f5('0x161');
        return _0x5a6ee7[_0x41f5('0x160')];
      }
      break;
    case _0x5a6ee7[_0x41f5('0x162')]:
      {
        $(_0x5a6ee7[_0x41f5('0x132')]).css(_0x41f5('0x134'), _0x5a6ee7[_0x41f5('0x164')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x5a6ee7[_0x41f5('0x162')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x164')];
        return _0x5a6ee7.qPLRV;
      }
      break;
    case _0x5a6ee7[_0x41f5('0x166')]:
      {
        _0x5a6ee7[_0x41f5('0x153')]($, _0x5a6ee7.jiJpC)[_0x41f5('0x16d')](_0x5a6ee7[_0x41f5('0x133')], _0x5a6ee7[_0x41f5('0x173')]);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')]("cursorColor", _0x5a6ee7[_0x41f5('0x166')], {
            'expires': 0x16d
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5('0x173')];
        return "#AAAAAA";
      }
      break;
    case _0x5a6ee7[_0x41f5('0x169')]:
      {
        $(_0x5a6ee7[_0x41f5('0x132')]).css(_0x5a6ee7[_0x41f5('0x133')], _0x5a6ee7.OBxCU);
        if (_0x49e0d1) {
          $[_0x41f5('0x1f')](_0x5a6ee7[_0x41f5('0x135')], _0x5a6ee7[_0x41f5('0x169')], {
            'expires': 0x16d
          });
        }
        cursorColor = "#DDDDDD";
        return _0x5a6ee7[_0x41f5('0x16b')];
      }
      break;
  }
}
function calcZoom(_0x1d4399) {
  var _0x272c8e = function () {
    var _0x3a69b4 = true;
    return function (_0x35cd01, _0x296ce6) {
      var _0x4fef25 = _0x3a69b4 ? function () {
        if (_0x296ce6) {
          var _0x4c8104 = _0x296ce6.apply(_0x35cd01, arguments);
          _0x296ce6 = null;
          return _0x4c8104;
        }
      } : function () {};
      _0x3a69b4 = false;
      return _0x4fef25;
    };
  }();
  var _0x5eea8e = _0x272c8e(this, function () {
    var _0x14a2ee = function () {
      return "dev";
    };
    var _0x183a1b = function () {
      return "window";
    };
    var _0xb8fe6d = function () {
      var _0x9d630f = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x9d630f.test(_0x14a2ee.toString());
    };
    var _0xa35832 = function () {
      var _0x3e2223 = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x3e2223.test(_0x183a1b.toString());
    };
    var _0x11ad23 = function (_0x985814) {
      if (_0x985814.indexOf(false)) {
        _0x513ab6(_0x985814);
      }
    };
    var _0x513ab6 = function (_0x5af380) {
      if (_0x5af380.indexOf("true"[0x3]) !== 3) {
        _0x11ad23(_0x5af380);
      }
    };
    if (!_0xb8fe6d()) {
      if (!_0xa35832()) {
        _0x11ad23("indеxOf");
      } else {
        _0x11ad23("indexOf");
      }
    } else {
      _0x11ad23("indеxOf");
    }
  });
  _0x5eea8e();
  var _0x37abf6 = {
    [_0x41f5('0x174')]: function (_0xbe0678, _0x1d2db9) {
      return _0xbe0678(_0x1d2db9);
    }
  };
  return _0x37abf6[_0x41f5('0x174')](parseInt, Math[_0x41f5('0x3')](0x3c, Math.max(0x1, _0x1d4399)));
}
function isMenuVisible() {
  var _0x3f2795 = {
    [_0x41f5('0x175')]: function (_0x2228f3, _0x450c6b) {
      return _0x2228f3(_0x450c6b);
    },
    [_0x41f5('0x176')]: _0x41f5('0xe1')
  };
  return !_0x3f2795[_0x41f5('0x175')]($, _0x41f5('0x2e')).is(_0x3f2795[_0x41f5('0x176')]) && $("#minimap-content").is(_0x3f2795[_0x41f5('0x176')]);
}
function VisibleBoxies() {
  var _0x4f5757 = {
    [_0x41f5('0x177')]: function (_0x403d5b, _0x530e96) {
      return _0x403d5b(_0x530e96);
    },
    [_0x41f5('0x178')]: _0x41f5('0xe1'),
    [_0x41f5('0x179')]: _0x41f5('0xa5')
  };
  var _0x37753d = _0x4f5757.HLDyB($, _0x41f5('0xde'));
  if (_0x37753d.is(_0x4f5757[_0x41f5('0x178')])) {
    _0x37753d[_0x41f5('0x10a')](0x1f4);
    return;
  }
  var _0x103e70 = _0x4f5757[_0x41f5('0x177')]($, _0x4f5757[_0x41f5('0x179')]);
  if (_0x103e70.is(_0x4f5757[_0x41f5('0x178')])) {
    _0x103e70.slideUp(0x1f4);
    return;
  }
}
function loadJsonLoop() {
  var _0x1a556a = {
    "cpZSM": function (_0x3b02e1, _0x4f4580) {
      return _0x3b02e1(_0x4f4580);
    },
    [_0x41f5('0x17a')]: function (_0x25030d, _0x4ac1ce) {
      return _0x25030d + _0x4ac1ce;
    },
    [_0x41f5('0x17b')]: _0x41f5('0x71'),
    [_0x41f5('0x17c')]: _0x41f5('0x73'),
    [_0x41f5('0x17d')]: function (_0x2f1096, _0x42e925, _0x55510e) {
      return _0x2f1096(_0x42e925, _0x55510e);
    },
    [_0x41f5('0x17e')]: function (_0x42f2c9, _0x3d0a21) {
      return _0x42f2c9 * _0x3d0a21;
    }
  };
  _url = _0x1a556a[_0x41f5('0x17a')](dataUrl, _0x1a556a.Rxhtq);
  $[_0x41f5('0x8b')]({
    'type': _0x1a556a[_0x41f5('0x17c')],
    'url': _url,
    'dataType': _0x41f5('0x75'),
    'success': function (_0x40a9f0) {
      _0x1a556a[_0x41f5('0x17f')](updateTemplates, jQuery[_0x41f5('0x8c')](JSON[_0x41f5('0x8d')](_0x40a9f0))[_0x41f5('0x180')]);
    }
  });
  _0x1a556a[_0x41f5('0x17d')](setTimeout, loadJsonLoop, _0x1a556a[_0x41f5('0x17e')](0x3c, 0x3c) * 0x3c);
}
function hexToRgb(_0x35dea6) {
  var _0x100f24 = {
    [_0x41f5('0x181')]: function (_0x4ad43f, _0x523c70, _0x11db9d) {
      return _0x4ad43f(_0x523c70, _0x11db9d);
    }
  };
  var _0x4fbb63 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i[_0x41f5('0x182')](_0x35dea6);
  return _0x4fbb63 ? {
    'r': _0x100f24[_0x41f5('0x181')](parseInt, _0x4fbb63[0x1], 0x10),
    'g': _0x100f24[_0x41f5('0x181')](parseInt, _0x4fbb63[0x2], 0x10),
    'b': parseInt(_0x4fbb63[0x3], 0x10)
  } : null;
}
function drawCursor() {
  var _0x2132fb = {
    [_0x41f5('0x183')]: "9|1|3|4|6|0|11|7|8|2|5|10",
    [_0x41f5('0x184')]: function (_0x4ef4eb, _0x5b73b8) {
      return _0x4ef4eb / _0x5b73b8;
    },
    [_0x41f5('0x185')]: function (_0x17e904) {
      return _0x17e904();
    },
    [_0x41f5('0x186')]: function (_0x24d701, _0x327fc4) {
      return _0x24d701 + _0x327fc4;
    },
    [_0x41f5('0x187')]: function (_0x1bf9ad, _0x185086) {
      return _0x1bf9ad - _0x185086;
    },
    [_0x41f5('0x188')]: function (_0x4f5346, _0x2e7335) {
      return _0x4f5346 + _0x2e7335;
    },
    [_0x41f5('0x189')]: function (_0x5b6574, _0x266e08) {
      return _0x5b6574(_0x266e08);
    },
    [_0x41f5('0x18a')]: function (_0x744afa, _0x5a383d) {
      return _0x744afa(_0x5a383d);
    },
    [_0x41f5('0x18b')]: function (_0x2b8f80, _0x21319a) {
      return _0x2b8f80 * _0x21319a;
    },
    "hPpzv": function (_0x248e56, _0x14f106) {
      return _0x248e56 / _0x14f106;
    }
  };
  var _0x471a46 = _0x2132fb[_0x41f5('0x183')][_0x41f5('0x1c')]("|");
  var _0x80dd39 = 0x0;
  while (true) {
    switch (_0x471a46[_0x80dd39++]) {
      case "0":
        var _0x252adf = _0x2132fb[_0x41f5('0x184')](_0x9cd23c, 0x2);
        continue;
      case "1":
        if (!_0x2132fb[_0x41f5('0x185')](isMenuVisible) || !showCursor) {
          return;
        }
        continue;
      case "2":
        _minimap_cursor[_0x41f5('0x18c')] = _0x41f5('0x18d') + _0x232345.r + ", " + _0x232345.g + ", " + _0x232345.b + ", " + _0x2132fb.UUrfv(cursorAlpha, 0x64) + ")";
        continue;
      case "3":
        _minimap_cursor[_0x41f5('0x18e')]();
        continue;
      case "4":
        var _0x9cd23c = _0x2132fb[_0x41f5('0x186')](minimap[_0x41f5('0x18f')], FinalZoom);
        continue;
      case "5":
        _minimap_cursor[_0x41f5('0x190')](_0x2132fb[_0x41f5('0x187')](_0x252adf, FinalZoom / 0x2), _0x3c01c9 - _0x2132fb[_0x41f5('0x184')](FinalZoom, 0x2), FinalZoom, FinalZoom);
        continue;
      case "6":
        var _0x2e3a64 = _0x2132fb[_0x41f5('0x188')](minimap[_0x41f5('0x113')], FinalZoom);
        continue;
      case "7":
        var _0x232345 = _0x2132fb[_0x41f5('0x189')](hexToRgb, cursorColor);
        continue;
      case "8":
        _minimap_cursor[_0x41f5('0x191')] = _0x2132fb[_0x41f5('0x18a')](parseInt, _0x2132fb.PxKJx(0.15, FinalZoom));
        continue;
      case "9":
        _minimap_cursor[_0x41f5('0x192')](0x0, 0x0, minimap[_0x41f5('0x18f')], minimap.height);
        continue;
      case "10":
        _minimap_cursor[_0x41f5('0x193')]();
        continue;
      case "11":
        var _0x3c01c9 = _0x2132fb[_0x41f5('0x194')](_0x2e3a64, 0x2);
        continue;
    }
    break;
  }
}
function drawGrid() {
  var _0x5e76fd = {
    "mLPfr": _0x41f5('0x195'),
    [_0x41f5('0x196')]: _0x41f5('0x197'),
    [_0x41f5('0x198')]: function (_0x47c330, _0x46d4ea) {
      return _0x47c330 < _0x46d4ea;
    },
    [_0x41f5('0x199')]: function (_0x5c9646, _0x5cdcdb) {
      return _0x5c9646 + _0x5cdcdb;
    },
    [_0x41f5('0x19a')]: "0|15|4|14|6|9|12|1|2|11|5|10|8|13|3|7",
    "vxOpX": function (_0x54fb43, _0x2cdfd2) {
      return _0x54fb43 / _0x2cdfd2;
    },
    [_0x41f5('0x19b')]: function (_0xc1b5a, _0x4bbc47) {
      return _0xc1b5a % _0x4bbc47;
    },
    [_0x41f5('0x19c')]: function (_0x37aad7, _0x3201b5) {
      return _0x37aad7 + _0x3201b5;
    },
    "XWnfI": function (_0x5296d3, _0x3cf06b) {
      return _0x5296d3 + _0x3cf06b;
    },
    [_0x41f5('0x19d')]: function (_0x3b0352, _0x1d27ad) {
      return _0x3b0352 - _0x1d27ad;
    },
    [_0x41f5('0x19e')]: function (_0x4bfae1, _0xea57c0) {
      return _0x4bfae1 / _0xea57c0;
    },
    [_0x41f5('0x19f')]: function (_0x518611, _0x34d0af) {
      return _0x518611 <= _0x34d0af;
    },
    [_0x41f5('0x1a0')]: function (_0x501636, _0x4c2e2c) {
      return _0x501636 + _0x4c2e2c;
    },
    [_0x41f5('0x1a1')]: function (_0x18ea95, _0x18a7f1) {
      return _0x18ea95 - _0x18a7f1;
    },
    [_0x41f5('0x1a2')]: function (_0x5aea4b, _0x4e7eec) {
      return _0x5aea4b % _0x4e7eec;
    },
    [_0x41f5('0x1a3')]: function (_0x1035ee, _0x58c8d1) {
      return _0x1035ee + _0x58c8d1;
    }
  };
  var _0x2573b3 = _0x5e76fd.mLPfr[_0x41f5('0x1c')]("|");
  var _0x23952e = 0x0;
  while (true) {
    switch (_0x2573b3[_0x23952e++]) {
      case "0":
        hitzone = _0x14f6c8;
        continue;
      case "1":
        console[_0x41f5('0x7b')](_0x5e76fd.vbrGm, hitzone);
        continue;
      case "2":
        if (!isMenuVisible() || !showGrid || _0x5e76fd[_0x41f5('0x198')](FinalZoom, 0x11)) {
          var _0x5ceb54 = _0x5e76fd[_0x41f5('0x199')](minimap[_0x41f5('0x18f')], FinalZoom);
          for (var _0x213528 = 0x0; _0x213528 <= _0x5ceb54; _0x213528 += FinalZoom) {
            _0x14f6c8 += 0x1;
          }
        } else {
          var _0x4ad903 = _0x5e76fd.PUCQP[_0x41f5('0x1c')]("|");
          var _0x1cc024 = 0x0;
          while (true) {
            switch (_0x4ad903[_0x1cc024++]) {
              case "0":
                _minimap_grid[_0x41f5('0x18e')]();
                continue;
              case "1":
                var _0x292897 = 0x1;
                continue;
              case "2":
                var _0x15c6b5 = _0x5e76fd[_0x41f5('0x1a4')](_0x5e76fd[_0x41f5('0x19b')](0x1, 0x2), 0x2);
                continue;
              case "3":
                _minimap_grid[_0x41f5('0x1a5')](0x0, -_0x15c6b5);
                continue;
              case "4":
                var _0x5c7ef2 = _0x5e76fd[_0x41f5('0x19c')](minimap.height, FinalZoom);
                continue;
              case "5":
                for (var _0x213528 = 0x0; _0x213528 <= _0x5ceb54; _0x213528 += FinalZoom) {
                  _0x14f6c8 += 0x1;
                  _minimap_grid.fillRect(_0x213528 + _0x488117, _0x3b4fdf, 0x1, _0x5c7ef2);
                }
                continue;
              case "6":
                var _0x3b4fdf = _0x5e76fd[_0x41f5('0x19d')](_0x5e76fd[_0x41f5('0x19b')](_0x5e76fd[_0x41f5('0x19e')](minimap[_0x41f5('0x113')], 0x2), FinalZoom), FinalZoom);
                continue;
              case "7":
                _minimap_grid[_0x41f5('0x193')]();
                continue;
              case "8":
                _minimap_grid[_0x41f5('0x1a5')](0x0, _0x15c6b5);
                continue;
              case "9":
                console.log(_0x41f5('0x1a6') + _0x5ceb54 + ", " + _0x5c7ef2 + _0x41f5('0x1a7') + _0x488117 + ", " + _0x3b4fdf + "]");
                continue;
              case "10":
                _minimap_grid[_0x41f5('0x1a5')](-_0x15c6b5, 0x0);
                continue;
              case "11":
                _minimap_grid.translate(_0x15c6b5, 0x0);
                continue;
              case "12":
                _minimap_grid[_0x41f5('0x1a8')] = _0x41f5('0x1a9') + gridAlpha / 0x64 + ")";
                continue;
              case "13":
                for (var _0x23095b = 0x0; _0x5e76fd[_0x41f5('0x19f')](_0x23095b, _0x5c7ef2); _0x23095b += FinalZoom) {
                  _minimap_grid[_0x41f5('0x1aa')](_0x488117, _0x5e76fd[_0x41f5('0x1a0')](_0x23095b, _0x3b4fdf), _0x5ceb54, 0x1);
                }
                continue;
              case "14":
                var _0x488117 = _0x5e76fd.hsKCf(_0x5e76fd[_0x41f5('0x1a2')](minimap[_0x41f5('0x18f')] / 0x2, FinalZoom), FinalZoom);
                continue;
              case "15":
                var _0x5ceb54 = _0x5e76fd.jcBiO(minimap[_0x41f5('0x18f')], FinalZoom);
                continue;
            }
            break;
          }
        }
        continue;
      case "3":
        var _0x14f6c8 = 0x0;
        continue;
      case "4":
        _minimap_grid[_0x41f5('0x192')](0x0, 0x0, minimap[_0x41f5('0x18f')], minimap[_0x41f5('0x113')]);
        continue;
    }
    break;
  }
}
function drawImage(_0x420075, _0x383241, _0x3ed10d, _0x223d8e, _0xe81f9b, _0x344786) {
  var _0x445195 = {
    [_0x41f5('0x1ab')]: _0x41f5('0x1ac'),
    [_0x41f5('0x1ad')]: function (_0x16d272, _0x71e90e) {
      return _0x16d272 * _0x71e90e;
    },
    [_0x41f5('0x1ae')]: function (_0x5f3aca, _0x306783) {
      return _0x5f3aca + _0x306783;
    },
    [_0x41f5('0x1af')]: function (_0xd7e985, _0x3ef5e6) {
      return _0xd7e985 / _0x3ef5e6;
    },
    [_0x41f5('0x1b0')]: function (_0x3a5faf, _0x4053eb) {
      return _0x3a5faf / _0x4053eb;
    },
    "SDBkG": function (_0x392f0d, _0x14e23f) {
      return _0x392f0d(_0x14e23f);
    },
    [_0x41f5('0x1b1')]: _0x41f5('0x2d'),
    [_0x41f5('0x1b2')]: _0x41f5('0x1b3'),
    [_0x41f5('0x1b4')]: function (_0x547f69, _0x3394f7) {
      return _0x547f69 + _0x3394f7;
    }
  };
  var _0x219fc0 = _0x445195[_0x41f5('0x1ab')][_0x41f5('0x1c')]("|");
  var _0x3291e1 = 0x0;
  while (true) {
    switch (_0x219fc0[_0x3291e1++]) {
      case "0":
        var _0x12a231 = _0x445195[_0x41f5('0x1ad')](FinalZoom, _0xe81f9b);
        continue;
      case "1":
        attempt = 0x0;
        continue;
      case "2":
        var _0x3492f5 = _0x445195[_0x41f5('0x1ad')](_0x445195[_0x41f5('0x1ae')](_0x51bdb4, _0x223d8e), FinalZoom);
        continue;
      case "3":
        console[_0x41f5('0x7b')](_0x41f5('0x1b5') + _0x3ed10d + _0x41f5('0x1b6') + _0x223d8e + _0x41f5('0x1b7') + _0xe81f9b + _0x41f5('0x1b8') + _0x344786 + _0x41f5('0x1b9') + FinalZoom + _0x41f5('0x1ba') + _zoom + ")");
        continue;
      case "4":
        if (storedTemplates[_0x41f5('0x110')](_0x383241)) {
          _0x420075[_0x41f5('0x1bb')](storedTemplates[_0x383241], _0x144d02, _0x3492f5, _0x12a231, _0x18be20);
        } else {
          var _0xfe5d4a = new Image();
          _0xfe5d4a[_0x41f5('0x1bc')] = _0x445195[_0x41f5('0x1ae')](dataUrl + _0x383241, _0x41f5('0x1bd'));
          _0xfe5d4a[_0x41f5('0x1be')] = function () {
            _0x420075[_0x41f5('0x1bb')](_0xfe5d4a, _0x144d02, _0x3492f5, _0x12a231, _0x18be20);
            storedTemplates[_0x383241] = _0xfe5d4a;
          };
        }
        continue;
      case "5":
        var _0x51bdb4 = _0x445195[_0x41f5('0x1af')](_0x445195[_0x41f5('0x1af')](minimap[_0x41f5('0x113')], FinalZoom), 0x2);
        continue;
      case "6":
        var _0x18be20 = _0x445195[_0x41f5('0x1ad')](FinalZoom, _0x344786);
        continue;
      case "7":
        var _0x165473 = _0x445195.LGRCi(minimap[_0x41f5('0x18f')], FinalZoom) / 0x2;
        continue;
      case "8":
        _0x445195[_0x41f5('0x1bf')]($, _0x445195[_0x41f5('0x1b1')])[_0x41f5('0x12c')](_0x445195[_0x41f5('0x1b2')]);
        continue;
      case "9":
        var _0x144d02 = _0x445195[_0x41f5('0x1ad')](_0x445195[_0x41f5('0x1b4')](_0x165473, _0x3ed10d), FinalZoom);
        continue;
    }
    break;
  }
}
function updateTemplates(_0x576e37) {
  templateList = _0x576e37;
  for (var _0x4eccf0 in _0x576e37) {
    if (!availableFactions.includes(_0x4eccf0)) {
      availableFactions[_0x41f5('0x1c0')](_0x4eccf0);
    }
  }
}
function loadTemplates() {
  var _0x4019d5 = {
    [_0x41f5('0x1c1')]: _0x41f5('0x1c2'),
    [_0x41f5('0x1c3')]: function (_0x4d360a, _0x2fb7c7) {
      return _0x4d360a < _0x2fb7c7;
    },
    [_0x41f5('0x1c4')]: function (_0x2895c6, _0x56cc0d) {
      return _0x2895c6(_0x56cc0d);
    },
    "WFgSx": _0x41f5('0x2d'),
    [_0x41f5('0x1c5')]: _0x41f5('0x1b3'),
    [_0x41f5('0x1c6')]: _0x41f5('0x6f'),
    [_0x41f5('0x1c7')]: function (_0x464dcf, _0x3080f9) {
      return _0x464dcf(_0x3080f9);
    },
    [_0x41f5('0x1c8')]: function (_0x5c30e7, _0xef638) {
      return _0x5c30e7 / _0xef638;
    },
    [_0x41f5('0x1c9')]: "#minimap",
    [_0x41f5('0x1ca')]: function (_0x1e8da7, _0x4e6228) {
      return _0x1e8da7 + _0x4e6228;
    },
    [_0x41f5('0x1cb')]: function (_0x146f9a, _0x5c8eda) {
      return _0x146f9a - _0x5c8eda;
    },
    "eZwcm": function (_0x5c4c81, _0x4e23bf) {
      return _0x5c4c81(_0x4e23bf);
    },
    "bxaxA": _0x41f5('0x1cc'),
    [_0x41f5('0x1cd')]: function (_0x35cab6, _0x1f3523, _0x518935, _0xef35f2, _0x1b7173, _0x238e71, _0x53969e) {
      return _0x35cab6(_0x1f3523, _0x518935, _0xef35f2, _0x1b7173, _0x238e71, _0x53969e);
    },
    [_0x41f5('0x1ce')]: function (_0x1f8316) {
      return _0x1f8316();
    },
    [_0x41f5('0x1cf')]: "name"
  };
  var _0x24892c = _0x4019d5[_0x41f5('0x1c1')][_0x41f5('0x1c')]("|");
  var _0x4d0949 = 0x0;
  while (true) {
    switch (_0x24892c[_0x4d0949++]) {
      case "0":
        if (!arrayAttempt[_0x41f5('0x1d0')](true)) {
          if (_0x4019d5.CpohK(attempt, 0x3)) {
            attempt++;
          } else {
            _0x4019d5[_0x41f5('0x1c4')]($, _0x4019d5[_0x41f5('0x1d1')])[_0x41f5('0x83')](_0x4019d5.lwkSn);
          }
        }
        continue;
      case "1":
        arrayAttempt = [];
        continue;
      case "2":
        for (var _0x2024d5 in templateList) {
          if (templateList[_0x41f5('0x110')](_0x2024d5)) {
            var _0x1b1b56 = [];
            $(_0x41f5('0x1d2'))[_0x41f5('0x1d3')](function () {
              _0x1b1b56[_0x41f5('0x1c0')]($(this)[_0x41f5('0x1d4')](_0x350e5d.xhQHV));
            });
            if ($[_0x41f5('0x1f')](_0x4019d5[_0x41f5('0x1c6')]) !== _0x1b1b56[_0x41f5('0x1d5')](" ")) {
              $[_0x41f5('0x1f')](_0x4019d5.Ccnif, _0x1b1b56.join(" "), {
                'expires': 0x16d
              });
            }
            var _0x1e4c68 = _0x4019d5[_0x41f5('0x1c7')]($, _0x41f5('0x1d6'))[_0x41f5('0x18f')]() / 0x2;
            var _0x3ca54a = _0x4019d5[_0x41f5('0x1c8')](_0x4019d5[_0x41f5('0x1c7')]($, _0x4019d5[_0x41f5('0x1c9')]).height(), 0x2);
            var _0x333da8 = [];
            var _0x301981 = templateList[_0x2024d5].x;
            var _0x1b8983 = templateList[_0x2024d5].y;
            var _0x3c7f1d = _0x4019d5.cOkUW(_0x301981, templateList[_0x2024d5].width);
            var _0x11b7c1 = _0x1b8983 + templateList[_0x2024d5][_0x41f5('0x113')];
            var _0x3f4cf3 = _0x301981 - hitzone;
            var _0x3c9d3b = _0x3c7f1d + hitzone;
            var _0x42ae4a = _0x4019d5[_0x41f5('0x1cb')](_0x1b8983, hitzone);
            var _0x3890b5 = _0x4019d5[_0x41f5('0x1ca')](_0x11b7c1, hitzone);
            arrayAttempt[_0x41f5('0x1c0')](curX[_0x41f5('0x1')](_0x3f4cf3, _0x3c9d3b) && curY[_0x41f5('0x1')](_0x3890b5, _0x42ae4a) && _0x1b1b56[_0x41f5('0x1d7')](_0x39d27a => templateList[_0x2024d5][_0x41f5('0x6f')][_0x41f5('0x1d0')](_0x39d27a)));
            if (curX[_0x41f5('0x1')](_0x3f4cf3, _0x3c9d3b) && curY[_0x41f5('0x1')](_0x3890b5, _0x42ae4a) && _0x1b1b56[_0x41f5('0x1d7')](_0x37742b => templateList[_0x2024d5][_0x41f5('0x6f')].includes(_0x37742b))) {
              attempt = 0x0;
              $(_0x4019d5[_0x41f5('0x1d1')]).removeClass(_0x4019d5[_0x41f5('0x1c5')]);
              console[_0x41f5('0x7b')](_0x4019d5[_0x41f5('0x1d8')], _0x2024d5);
              _0x4019d5[_0x41f5('0x1cd')](drawImage, _minimap, _0x2024d5, _0x301981 - curX, _0x4019d5[_0x41f5('0x1cb')](_0x1b8983, curY), templateList[_0x2024d5][_0x41f5('0x18f')], templateList[_0x2024d5][_0x41f5('0x113')]);
            }
          }
        }
        continue;
      case "3":
        if (!_0x4019d5[_0x41f5('0x1ce')](isMenuVisible)) {
          return;
        }
        continue;
      case "4":
        var _0x350e5d = {
          [_0x41f5('0x1d9')]: _0x4019d5.sXhsj
        };
        continue;
      case "5":
        _minimap[_0x41f5('0x192')](0x0, 0x0, minimap[_0x41f5('0x18f')], minimap[_0x41f5('0x113')]);
        continue;
    }
    break;
  }
}
function setupCanvas() {
  var _0xd81fe7 = {
    [_0x41f5('0x1da')]: function (_0x1b8232, _0x6b9f65) {
      return _0x1b8232(_0x6b9f65);
    },
    [_0x41f5('0x1db')]: "#minimap-cursor",
    [_0x41f5('0x1dc')]: _0x41f5('0x1d6'),
    [_0x41f5('0x1dd')]: function (_0x2b8a28, _0x378613) {
      return _0x2b8a28(_0x378613);
    },
    "IPqWM": "#minimap-grid"
  };
  minimap = $(_0xd81fe7.SSKfW).get(0x0);
  _minimap = minimap[_0x41f5('0x1e3')]("2d");
  _minimap[_0x41f5('0x1df')] = false;
  _minimap[_0x41f5('0x1e1')] = false;
  _minimap[_0x41f5('0x1e0')] = false;
  minimap_grid = _0xd81fe7[_0x41f5('0x1dd')]($, _0xd81fe7[_0x41f5('0x1e2')])[_0x41f5('0x1de')](0x0);
  _minimap_grid = minimap_grid.getContext("2d");
  _minimap_grid[_0x41f5('0x1df')] = false;
  _minimap_grid[_0x41f5('0x1e1')] = false;
  _minimap_grid[_0x41f5('0x1e0')] = false;
  minimap_cursor = _0xd81fe7[_0x41f5('0x1da')]($, _0xd81fe7[_0x41f5('0x1db')])[_0x41f5('0x1de')](0x0);
  _minimap_cursor = minimap_cursor[_0x41f5('0x1e3')]("2d");
  _minimap_cursor[_0x41f5('0x1df')] = false;
  _minimap_cursor[_0x41f5('0x1e1')] = false;
  _minimap_cursor.mozImageSmoothingEnabled = false;
}
function selectColor(_0x27e52b, _0x6afb4b, _0x4450f9, _0x376c3d, _0x27a453) {
  var _0x22d0d6 = _0x27e52b[_0x41f5('0x1e4')](_0x6afb4b, _0x4450f9, _0x376c3d, _0x27a453)[_0x41f5('0x1e5')];
  var _0x4ef73f = _0x22d0d6[0x0] + ", " + _0x22d0d6[0x1] + ", " + _0x22d0d6[0x2];
  return _0x4ef73f;
}