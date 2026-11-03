// precios.js — listas de precios del presupuestador Ferrero Implementos
// Actualizar listas SOLO acá. La pantalla y la lógica están en index.html.
// Accesorios opcionales IMPACAR (precios netos, IVA 21% aparte) — Lista N°109 abr-2026
const IMPACAR_ACCESORIOS = [
  { id:"imp_calefactor",  label:"Calefactor 4000 CAL",                                                precio:342000,   cant:1 },
  { id:"imp_toldo",       label:"Toldo",                                                                precio:496011,   cant:1 },
  { id:"imp_inodoro",     label:"Inodoro con depósito y cámara séptica",                                 precio:495000,   cant:1 },
  { id:"imp_split",       label:"Split frío/calor 3200 frigorías inverter",                               precio:1550000,  cant:1 },
  { id:"imp_solar160",    label:"Pantalla solar 160W + Regulador 30 AMP (instalación 12V)",               precio:410000,   cant:1 },
  { id:"imp_cocina",      label:"Cocina con horno industrial",                                            precio:585800,   cant:1 },
  { id:"imp_cajonera",    label:"Cajonera bajo cama (800x800x270) x4",                                    precio:322000,   cant:1 },
  { id:"imp_banco",       label:"Banco despensero (1000x500x700)",                                        precio:172098,   cant:1 },
  { id:"imp_solar220",    label:"Sist. solar 220 off-grid (inv. 3kVA – 4 paneles 485W – 2 bat. 100Ah litio)", precio:6755000, cant:1 },
  { id:"imp_heladera220", label:"Heladera c/freezer eléctrica 220V cat. A++",                              precio:1699000,  cant:1 },
  { id:"imp_tv",          label:"TV 32\" con DirecTV",                                                     precio:458000,   cant:1 },
  { id:"imp_vanitory",    label:"Vanitory completo con espejo",                                            precio:283294,   cant:1 },
  { id:"imp_mueble",      label:"Mueble 2 puertas c/estéreo Pioneer, parlantes y antena",                  precio:328220,   cant:1 },
  { id:"imp_cortinas",    label:"Cortinas Roller Black Out (habitación y cocina)",                         precio:483600,   cant:1 },
  { id:"imp_heladera12v", label:"Heladera c/freezer eléctrica 12V c/pantalla y regulador",                 precio:1690000,  cant:1 },
  { id:"imp_mesa",        label:"Mesa de caño, melamina y terminaciones de aluminio",                      precio:218000,   cant:1 },
  { id:"imp_caldera",     label:"Caldera 12V a gasoil",                                                    precio:718000,   cant:1 },
];

// Accesorios opcionales ROGRIV (precio neto, IVA 21% aparte) — Lista 01/10/2026
const ROGRIV_ACCESORIOS = [
  { id:"rog_tanque",    label:"Tanque de baño",                       precio:279216,   cant:1 },
  { id:"rog_mosqvent",  label:"Mosquitero ventanas",                  precio:535275,   cant:1 },
  { id:"rog_mosqpuerta",label:"Puerta mosquitero",                    precio:536156,   cant:1 },
  { id:"rog_mesada",    label:"Mesada / pileta",                      precio:618243,   cant:1 },
  { id:"rog_alacena",   label:"Alacena 70 cm",                        precio:284668,   cant:1 },
  { id:"rog_aislamiento",label:"Aislamiento",                         precio:730107,   cant:1 },
  { id:"rog_electrica", label:"Instalación eléctrica",                precio:700041,   cant:1 },
  { id:"rog_baul",      label:"Baúl trasero",                         precio:690888,   cant:1 },
  { id:"rog_agua",      label:"Agua fría + caliente + calefón",       precio:2159253,  cant:1 },
  { id:"rog_ecotermo",  label:"Ecotermo",                             precio:3221513,  cant:1 },
  { id:"rog_campana",   label:"Campana",                              precio:333899,   cant:1 },
  { id:"rog_placard",   label:"Placard",                              precio:448112,   cant:1 },
  { id:"rog_duales",    label:"Duales",                               precio:735951,   cant:1 },
  { id:"rog_garrafero", label:"Garrafero",                            precio:403695,   cant:1 },
  { id:"rog_pisovinil", label:"Piso vinílico",                        precio:1084640,  cant:1 },
  { id:"rog_toldo",     label:"Toldo",                                precio:1234315,  cant:1 },
];

// Opcionales compartidos S y L (USD, precios netos del boletín feb-2026)
const SYL_CUBIERTAS = [
  { id:"syl_cub4", label:"4 Cubiertas 8.25 x 22.5", precio:1440, cant:1 },
  { id:"syl_cub8", label:"8 Cubiertas 8.25 x 22.5", precio:2880, cant:1 },
];
const SYL_OPC_SILERO = [
  { id:"syl_divisorio", label:"Divisorio y doble boquilla",        precio:550,  cant:1 },
  { id:"syl_lona",      label:"Lona cobertora con sogas",          precio:300,  cant:1 },
  { id:"syl_tape",      label:"Tape rápido (lona incluida)",       precio:400,  cant:1 },
  { id:"syl_chimango",  label:"Chimango colocado",                 precio:1800, cant:1 },
].concat(SYL_CUBIERTAS);
const SYL_OPC_SEMILLA_CON_DUALES = [
  { id:"syl_duales", label:"Duales 8.25 x 22.5", precio:1300, cant:1 },
].concat(SYL_CUBIERTAS);
const SYL_OPC_SEMILLA_SIN_DUALES = SYL_CUBIERTAS;

const PRODUCTOS = [

  // ─── IMPACAR ───────────────────────────────────────────────
  { marca:"IMPACAR", lista:"N°109", vigencia:"abr-2026", moneda:"Pesos", conIVA:false, ivaRate:0.21,
    condiciones:"Precios netos + IVA 21%. Flete USD 550 (puesto en sucursal), incluido en el precio con IVA. Cubiertas a cargo del cliente (elección de medida sin costo). Consultar condiciones de financiación con la fábrica.",
    items:[
      { modelo:"Modelo N°1", desc:"Largo 4,50m / Ancho 2,60m / 2 Camas", precio:29982245, opcionales:IMPACAR_ACCESORIOS },
      { modelo:"Modelo N°2", desc:"Largo 5,20m / Ancho 2,60m / 2-3 Camas", precio:35175453, opcionales:IMPACAR_ACCESORIOS },
      { modelo:"Modelo N°3", desc:"Largo 6,10m / Ancho 2,60m / 2-3 Camas", precio:38297161, opcionales:IMPACAR_ACCESORIOS },
      { modelo:"Modelo N°4", desc:"Largo 6,60m / Ancho 2,60m / 4 Camas", precio:40141000, opcionales:IMPACAR_ACCESORIOS },
      { modelo:"Modelo N°5", desc:"Largo 7,60m / Ancho 2,60m / Opcional", precio:42165227, opcionales:IMPACAR_ACCESORIOS },
      { modelo:"Modelo N°6", desc:"Largo 8,60m / Ancho 2,60m / Opcional", precio:43309593, opcionales:IMPACAR_ACCESORIOS },
      { modelo:"Modelo N°7", desc:"Largo 9,60m / Ancho 2,60m / Opcional", precio:47566209, opcionales:IMPACAR_ACCESORIOS },
    ]
  },

  // ─── PROCOR ───────────────────────────────────────
  { marca:"PROCOR", lista:"N°61-2026", vigencia:"01/09/2026", moneda:"Pesos", conIVA:false,
    condiciones:"Precio + IVA 10,5%. Valores 0-30-60-90 días. Contado 5% + 0-30 días.",
    items:[
      { modelo:"Cargador de sembradora 7 m x 200 mm", desc:"Transportable · motor explosión 9 HP · sin sinfín mezclador", precio:5780678 },
      { modelo:"Cargador de sembradora 8 m x 200 mm", desc:"Transportable · motor explosión 9 HP · sin sinfín mezclador", precio:6138297 },
      { modelo:"Cargador de sembradora 9 m x 200 mm", desc:"Transportable · motor explosión 13 HP · sinfín mezclador", precio:6920326 },
      { modelo:"Cargador de sembradora 7 m x 160 mm", desc:"Transportable · motor explosión 7 HP · sinfín mezclador", precio:4203851 },
      { modelo:"Cargador de sembradora 8 m x 160 mm", desc:"Transportable · motor explosión 7 HP · sinfín mezclador", precio:4813456 },
      { modelo:"Cargador de sembradora 9 m x 160 mm", desc:"Transportable · motor explosión 9 HP · sinfín mezclador", precio:5407500 },
      { modelo:"Cargador hidráulico 7 m x 200 mm", desc:"Transportable · motor hidráulico · sin sinfín mezclador", precio:3993812 },
      { modelo:"Cargador hidráulico 8 m x 200 mm", desc:"Transportable · motor hidráulico · sinfín mezclador", precio:4405494 },
      { modelo:"Cargador hidráulico 9 m x 200 mm", desc:"Transportable · motor hidráulico · sinfín mezclador", precio:5089318 },
      { modelo:"Cargador hidráulico 7 m x 160 mm", desc:"Transportable · motor hidráulico · sinfín mezclador", precio:2848430 },
      { modelo:"Cargador hidráulico 8 m x 160 mm", desc:"Transportable · motor hidráulico · sin sinfín mezclador", precio:3294497 },
      { modelo:"Cargador hidráulico 9 m x 160 mm", desc:"Transportable · motor hidráulico · sinfín mezclador", precio:3705912 },
    ]
  },

  // ─── STEFONI ─────────────────────────────────────
  { marca:"STEFONI", lista:"N°52", vigencia:"01/10/2026", moneda:"Pesos", conIVA:false,
    condiciones:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)",
    items:[
      { modelo:"R.D.A. 97 – 4,50 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 3 rolos · 2 ruedas · transporte 2,80 m", precio:12700000, ruedas:2, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 5,00 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 3 rolos · 2 ruedas · transporte 2,80 m", precio:13100000, ruedas:2, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 5,50 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 3 rolos · 4 ruedas · transporte 3,30 m", precio:13700000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 6,00 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 3 rolos · 4 ruedas · transporte 3,30 m", precio:14300000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 6,50 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 4 rolos · 4 ruedas · transporte 3,30 m", precio:14900000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 7,00 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 4 rolos · 4 ruedas · transporte 3,30 m", precio:15200000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 7,50 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 4 rolos · 4 ruedas · transporte 3,30 m", precio:15600000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 8,00 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 4 rolos · 4 ruedas · transporte 3,30 m", precio:16200000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 8,50 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 3 cil. hidr. · 4 rolos · 4 ruedas · transporte 3,30 m", precio:16700000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 9,00 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 4 cil. hidr. · 4 rolos · 4 ruedas · transporte 3,80 m", precio:17200000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 9,50 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 4 cil. hidr. · 4 rolos · 4 ruedas · transporte 4,30 m", precio:19200000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 10,00 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 4 cil. hidr. · 4 rolos · 4 ruedas · transporte 4,30 m", precio:21100000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" },
      { modelo:"R.D.A. 97 – 10,50 m", desc:"Rolo transportable hidráulico c/alas rebatibles · 4 cil. hidr. · 4 rolos · 4 ruedas · transporte 4,30 m", precio:23200000, ruedas:4, cond:"* Contado -10%: 5 cheques (0 a 120 dias)\n* Precio lista: 8 cheques (0 a 210 dias)" }
    ]
  },
  // ─── ROGRIV ───────────────────────────────────────────────
  { marca:"ROGRIV", lista:"01/10/2026", vigencia:"01/10/2026", moneda:"Pesos", conIVA:false, ivaRate:0.21,
    condiciones:"Precios netos + IVA 21%. Flete USD 430 (puesto en sucursal). Cubiertas opcionales a cargo del cliente.",
    items:[
      { modelo:"Casilla N°1", desc:"5,40×2,20 · baño · 4 camas · baúl", precio:9840132, opcionales:ROGRIV_ACCESORIOS },
      { modelo:"Casilla N°2", desc:"4,50×2,00 · baño · 2 camas", precio:8267292, opcionales:ROGRIV_ACCESORIOS },
      { modelo:"Casilla N°3", desc:"6,00×2,20 · baño · placard · 4 camas", precio:10279199, opcionales:ROGRIV_ACCESORIOS },
      { modelo:"Casilla N°4", desc:"3,30×2,00 · 1 eje · 2 camas", precio:6483209, opcionales:ROGRIV_ACCESORIOS },
    ]
  },

  // ─── ALCAL ────────────────────────────────────────────────
  { marca:"ALCAL", lista:"N°121", vigencia:"hasta 30/09/2025", moneda:"USD", conIVA:false,
    condiciones:"Financiación consultar.",
    items:[
      { modelo:"MG 111 Fija Eléctrica",        desc:"5 tn maíz/h – motor eléctrico 20HP (no incl.)", precio:7412.80 },
      { modelo:"MG 111 Móvil Eléctrica",        desc:"Ídem + llantas s/cubiertas", precio:7764.96 },
      { modelo:"MG 111 Fija c/TDF",             desc:"5 tn maíz/h", precio:8705.78 },
      { modelo:"MG 111 Móvil c/TDF",            desc:"5 tn maíz/h + llantas s/cub.", precio:9056.59 },
      { modelo:"MG 111 Móvil DUAL",             desc:"5 tn maíz/h", precio:9358.86 },
      { modelo:"MG 440 Fija Eléctrica",         desc:"10 tn maíz/h – motor 40HP (no incl.)", precio:10434.45 },
      { modelo:"MG 440 Móvil c/TDF",            desc:"10 tn maíz/h", precio:13978.36 },
      { modelo:"SC 200 Fijo Eléctrico",         desc:"Sinfín cargador", precio:4110.62 },
      { modelo:"SC 300 Fijo Eléctrico",         desc:"Sinfín cargador mayor", precio:5190.00 },
      { modelo:"Quebradora QSM-11",             desc:"Moledora doble", precio:9850.00 },
      { modelo:"Carro agrícola CA-2",           desc:"2 tn", precio:3980.00 },
    ]
  },

  // ─── AUMEC ────────────────────────────────────────────────
  { marca:"AUMEC", lista:"Imp.Ene-2026", vigencia:"ene-2026", moneda:"Pesos", conIVA:false,
    condiciones:"IVA 10,5%. Contado -10%. Valores 0-30-60-90 días neto.",
    items:[
      { modelo:"G 300 Embolsadora",        desc:"Embolsadora granos secos 200-250 TT/h – tolva 1,5TT – levanta bolsa 500kg – llantas 15\"", precio:10300000 },
      { modelo:"AP 2500",                   desc:"Acoplado playo 2,5x1,9m – 2.000kg – 1 eje – llantas 16\"", precio:5600000 },
      { modelo:"AP 2500 V",                 desc:"Acoplado playo 2,5x1,9m – 2.500kg – vuelco trasero hidráulico – llantas 16\" dual", precio:6600000 },
      { modelo:"AP 2500-3",                 desc:"Acoplado playo 3x1,9m – 2.500kg – 1 eje – llantas 16\"", precio:5900000 },
      { modelo:"AP 3500",                   desc:"Acoplado playo vehicular 5x1,9m – 3.500kg – 2 ejes balancín – llantas 16\"x5½ – luces led", precio:8000000 },
      { modelo:"AP 3500 Maxi Track",        desc:"Acoplado playo vehicular 5x2,1m – 3.500kg – 2 ejes balancín – llantas 16\"x5½ – luces led", precio:9500000 },
      { modelo:"AP 5000",                   desc:"Acoplado playo 4x2m – 5.000kg – 2 ejes – barandas 0,50m desmontables – llantas 16\" duales", precio:8600000 },
      { modelo:"TH 6000 Tanque",            desc:"Acoplado tanque 6.000 lts plástico – gasoil o agua – cajones laterales – enganche trasero", precio:12300000 },
      { modelo:"TCA 5000",                  desc:"Acoplado tanque combinado 5.000 lts chapa 1/8 + tanque plástico 1.000 lts – 5 llantas 22,5", precio:17100000 },
      { modelo:"PAU 2500 Grúa",             desc:"Grúa arrastre multiuso – levanta 1.500kg a 5,5m – 2.500kg retraída – giro hidráulico 120° – canasto telescópico hasta 9m", precio:9700000 }
    ]
  },

  // ─── AGROAR ───────────────────────────────────────────────
  { marca:"AGROAR", lista:"01/2026", vigencia:"desde 25/08/2026", moneda:"USD", conIVA:false,
    condiciones:"Plan 1 (3 cheques 0-30-60d): 15%+5% desc. Plan 2 (5 cheques 0-120d): 15% desc. Plan 3 (8 cheques 0-210d): 10% desc. Plan 4 (10 cheques 0-270d): 5% desc. Plan 5 (12 cheques 0-330d): Neto. Precios sin neumáticos. Mercadería puesta en fábrica.",
    items:[
      { modelo:"DM 1000",  desc:"Desmalezadora 1,00m montada 3pts – bicorte c/zafe", precio:2890 },
      { modelo:"DM 1500",  desc:"Desmalezadora 1,50m montada 3pts – tricorte c/zafe", precio:3170 },
      { modelo:"DM 2006",  desc:"Desmalezadora 2,00m tiro central – tricorte c/zafe", precio:3670 },
      { modelo:"TC 1500",  desc:"Trituradora 1,50m tiro central – chapa 3/16 c/zafe – s/neumáticos", precio:3920 },
      { modelo:"TC 2006",  desc:"Trituradora 2,00m tiro central c/cilindro hid.", precio:5030 },
      { modelo:"TC 2400",  desc:"Trituradora 2,40m tiro central c/cilindro hid.", precio:6680 },
      { modelo:"TC 3215",  desc:"Trituradora 3,20m arrastre – 2 hélices – s/neumáticos", precio:12390 },
    ]
  },

  // ─── ACEPLA ───────────────────────────────────────────────
  { marca:"ACEPLA", lista:"N°108", vigencia:"desde 25/06/2026", moneda:"Pesos", conIVA:false,
    condiciones:"Descuento 10% valores 0/30/60/90 dias.",
    items:[
      { modelo:"Acoplado Taller 3x1,9x1,8m",       desc:"4TT rod.16 simples",                        precio:11642270 },
      { modelo:"Acoplado Taller 4x1,9x1,8m",       desc:"4TT rod.16 simples",                        precio:13158300 },
      { modelo:"Acoplado Taller 5x2x1,8m",         desc:"4TT rod.16 duales",                         precio:16334287 },
      { modelo:"Acoplado Jaula SENASA Conv. 3x1,8m", desc:"Convencional rod.16",                     precio:10609500 },
      { modelo:"Acoplado Jaula SENASA Conv. 4x1,8m", desc:"Convencional rod.16",                     precio:11821477 },
      { modelo:"Embolsadora Granos Secos 9 pies",  desc:"230 T/h rod.16",                            precio:12611644 },
      { modelo:"Acoplado Tanque Taller 2000L",     desc:"7x17 simple plástico 550L – taller 1500x1900x1300", precio:12848581 },
      { modelo:"Acoplado Tanque Taller 3000L",     desc:"4,5x16 dual plástico 550L",                 precio:16292997 },
      { modelo:"Acoplado Tanque Taller 4000L",     desc:"4,5x16 dual plástico 700L",                 precio:19299300 },
      { modelo:"Acoplado Tanque Taller 5000L",     desc:"4,5x16 dual plástico 700L",                 precio:21000000 },
      { modelo:"Rolo Transportable Hidraulico 5,0m", desc:"3 cuerpos llantas duales rod.16",         precio:11911240 },
      { modelo:"Rolo Transportable Hidraulico 5,5m", desc:"3 cuerpos llantas duales rod.16",         precio:12499740 },
      { modelo:"Rolo Transportable Hidraulico 6,0m", desc:"3 cuerpos llantas duales rod.16",         precio:13088240 },
      { modelo:"Rolo Transportable Hidraulico 6,5m", desc:"3 cuerpos llantas duales rod.16",         precio:13676740 },
      { modelo:"Rolo Transportable Hidraulico 7,0m", desc:"3 cuerpos llantas duales rod.16",         precio:14265240 },
      { modelo:"Rolo Transportable Hidraulico 7,5m", desc:"3 cuerpos llantas duales rod.16",         precio:14853740 },
      { modelo:"Rolo Culminacion Labranza 5,0m",   desc:"3 cuerpos llantas duales rod.16",           precio:17376051 },
      { modelo:"Rolo Culminacion Labranza 5,5m",   desc:"3 cuerpos llantas duales rod.16",           precio:18207441 },
      { modelo:"Rolo Culminacion Labranza 6,0m",   desc:"3 cuerpos llantas duales rod.16",           precio:19038830 },
      { modelo:"Rolo Culminacion Labranza 6,5m",   desc:"3 cuerpos llantas duales rod.16",           precio:19870221 },
      { modelo:"Rolo Culminacion Labranza 7,0m",   desc:"3 cuerpos llantas duales rod.16",           precio:20701611 },
      { modelo:"Rolo Culminacion Labranza 7,5m",   desc:"3 cuerpos llantas duales rod.16",           precio:21533000 },
      { modelo:"Rastra Rotativa 7,20m",            desc:"Tiro convencional rod.16 (4)",              precio:28618466 },
      { modelo:"Rastra Rotativa 8,60m",            desc:"Tiro convencional rod.16 (4)",              precio:31173992 },
      { modelo:"Rastra Rotativa 10,00m",           desc:"Tiro convencional rod.16 (4)",              precio:37111887 },
      { modelo:"Tanque Chapa Simple 1500L",        desc:"1 eje rod.16 simples",                      precio:4582602 },
      { modelo:"Tanque Chapa Simple 2000L",        desc:"1 eje rod.16 simples",                      precio:8215656 },
      { modelo:"Tanque Chapa Simple 3000L",        desc:"1 eje rod.16 simples",                      precio:9286369 },
      { modelo:"Tanque Chapa Simple 4000L",        desc:"1 eje rod.17 simples",                      precio:11396717 },
      { modelo:"Tanque Chapa Simple 5000L",        desc:"1 eje rod.16 duales",                       precio:13888965 },
      { modelo:"Tanque Chapa Simple 6000L",        desc:"1 eje rod.15,5 AF",                         precio:14778157 },
      { modelo:"Tanque Chapa Intermedio 2000L",    desc:"agua o baulera rod.16 simples",             precio:9367850 },
      { modelo:"Tanque Chapa Intermedio 3000L",    desc:"agua o baulera rod.16 simples",             precio:10535557 },
      { modelo:"Tanque Chapa Intermedio 4000L",    desc:"agua o baulera rod.16 duales",              precio:13041513 },
      { modelo:"Tanque Chapa Intermedio 5000L",    desc:"agua o baulera rod.16 duales",              precio:15665563 },
      { modelo:"Tanque Chapa Intermedio 6000L",    desc:"agua o baulera rod.16 duales",              precio:16568374 },
      { modelo:"Tanque Chapa Completo 2000L",      desc:"agua baulera cajones rod.17",               precio:11644174 },
      { modelo:"Tanque Chapa Completo 3000L",      desc:"agua baulera cajones rod.16 duales",        precio:13479804 },
      { modelo:"Tanque Chapa Completo 4000L",      desc:"agua baulera cajones rod.16 duales",        precio:16661095 },
      { modelo:"Tanque Chapa Completo 5000L",      desc:"agua baulera cajones rod.16 duales",        precio:18581933 },
      { modelo:"Tanque Chapa Completo 6000L",      desc:"agua baulera cajones rod.16 duales",        precio:19887806 },
      { modelo:"Tanque Certificado 1eje 1500L",    desc:"bomba gasoil matafuego rod.16 simples",     precio:8688191 },
      { modelo:"Tanque Certificado 2ejes 2000L",   desc:"bomba gasoil matafuego rod.16 simples",     precio:14229900 },
      { modelo:"Tanque Certificado 2ejes 3000L",   desc:"bomba gasoil matafuego rod.16 simples",     precio:14968717 },
      { modelo:"Tanque Certificado 2ejes 4000L",   desc:"bomba gasoil matafuego rod.16 duales",      precio:19513812 },
      { modelo:"Tanque Certificado 2ejes 5000L",   desc:"bomba gasoil matafuego rod.16 duales",      precio:20402752 },
      { modelo:"Acoplado Rural Playo 3x1,9m",      desc:"3TT rod.16 simples",                        precio:8220270 },
      { modelo:"Acoplado Rural Playo 4x1,9m",      desc:"4TT rod.16 simples",                        precio:9206121 },
      { modelo:"Acoplado Rural Playo 4,5x2,2m 5TT", desc:"5TT rod.16 duales",                       precio:11409792 },
      { modelo:"Acoplado Rural Playo 4,5x2,2m 6TT", desc:"6TT rod.16 duales",                       precio:12613113 },
      { modelo:"Acoplado Balancin Rampas Rural 4x2m",     desc:"4TT rod.16 – 3 gatos niv. – rampas traseras", precio:8883534 },
      { modelo:"Acoplado Balancin Rampas Rural 5x2m 4TT", desc:"4TT rod.16 – 3 gatos niv. – rampas traseras", precio:10135577 },
      { modelo:"Acoplado Balancin Rampas Rural 5x2m 5TT", desc:"5TT rod.16 – 3 gatos niv. – rampas traseras", precio:11268377 },
      { modelo:"Acoplado Balancin Rampas Rural 5,5x2m",   desc:"6TT rod.16 – 3 gatos niv. – rampas traseras", precio:13519073 },
      { modelo:"Trailer A-4000 Vantren",           desc:"4.000 Kg duales 15/16 6x2,5m",             precio:17196380 },
      { modelo:"Trailer A-5000 Vantren",           desc:"5.000 Kg duales 15/16 6x2,5m",             precio:19254306 },
      { modelo:"Trailer A-6000 Vantren",           desc:"6.000 Kg duales 15/16 6x2,5m",             precio:20494704 },
      { modelo:"Trailer A-8000 Vantren",           desc:"8.000 Kg duales 15/16 6x2,5m",             precio:24300452 },
      { modelo:"Trailer para Drones 5x2 c/Cabina", desc:"4.000 Kg rod.16 – cabina cerrada 1700x2000x1300 – 2 ejes balancín", precio:12000000 },
      { modelo:"Tolva Semillas 9m3",               desc:"8TT rod.22,5 simples",                      precio:17573587 },
      { modelo:"Tolva Semillas 11m3",              desc:"10TT rod.22,5 simples",                     precio:19444609 },
      { modelo:"Tolva Semillas 13m3",              desc:"12TT rod.22,5 simples",                     precio:22763223 },
      { modelo:"Tolva Semillas 15m3",              desc:"14TT rod.22,5 simples",                     precio:25215839 },
      { modelo:"Tolva Silera 9m3",                 desc:"8TT rod.22,5 simples",                      precio:14385060 },
      { modelo:"Tolva Silera 11m3",                desc:"10TT rod.22,5 simples",                     precio:15934479 },
      { modelo:"Tolva Silera 13m3",                desc:"12TT rod.22,5 simples",                     precio:17075054 },
      { modelo:"Tolva Silera 15m3",                desc:"14TT rod.22,5 simples",                     precio:19148210 },
      { modelo:"Descompactador 4 Timones 2360mm",  desc:"Chasis fijo 2 llantas 7-17",               precio:13825849 },
      { modelo:"Descompactador 6 Timones 3260mm",  desc:"Chasis fijo 2 llantas 7-17",               precio:17469175 },
      { modelo:"Descompactador 8 Timones 4360mm",  desc:"Chasis fijo 2 llantas 7-17",               precio:20377677 },
    ]
  },

  // ─── EL PATO ──────────────────────────────────────────────
  { marca:"EL PATO", lista:"N°101", vigencia:"desde 09/03/2026", moneda:"USD", conIVA:true,
    condiciones:"Contado -15%. 0-30-60-90-120: -8%. 0-30-60-90-102-150-180: Neto.",
    items:[
      { modelo:"A 3 Aporcador",                        desc:"",                                                    precio:1925 },
      { modelo:"R2_A Bordeador",                        desc:"",                                                    precio:2370 },
      { modelo:"R14 Taipera",                           desc:"",                                                    precio:8970 },
      { modelo:"DI70 Desmalezadora Interfilar",         desc:"",                                                    precio:4050 },
      { modelo:"AR3 x 14\" Arado Rejas",               desc:"",                                                    precio:4870 },
      { modelo:"AR4 x 14\" Arado Rejas",               desc:"",                                                    precio:6180 },
      { modelo:"C5 Arado Cinceles",                     desc:"",                                                    precio:2760 },
      { modelo:"C7 Arado Cinceles",                     desc:"",                                                    precio:3390 },
      { modelo:"Arado Subsolador 3 Puas",               desc:"",                                                    precio:3540 },
      { modelo:"Arado Subsolador 5 Puas",               desc:"",                                                    precio:4940 },
      { modelo:"Z80 Subsolador 3 ptos",                 desc:"",                                                    precio:1990 },
      { modelo:"ZA 80 Subsolador",                      desc:"",                                                    precio:4950 },
      { modelo:"ZA 120 Pesado",                         desc:"",                                                    precio:9700 },
      { modelo:"ZA 120 Pesado 3 espadas",               desc:"",                                                    precio:16150 },
      { modelo:"V 15 Vibrocultivador",                  desc:"",                                                    precio:4370 },
      { modelo:"V 17 Vibrocultivador",                  desc:"",                                                    precio:4670 },
      { modelo:"V 21 Vibrocultivador",                  desc:"",                                                    precio:5240 },
      { modelo:"V 24 Vibrocultivador",                  desc:"",                                                    precio:5760 },
      { modelo:"V 28 Vibrocultivador",                  desc:"",                                                    precio:6390 },
      { modelo:"V 30 Vibrocultivador",                  desc:"",                                                    precio:6700 },
      { modelo:"RL 12 Rastra Exc. 3 Puntos",            desc:"",                                                    precio:4590 },
      { modelo:"RL 14 Rastra Exc. 3 Puntos",            desc:"",                                                    precio:5020 },
      { modelo:"RL 16 Rastra Exc. 3 Puntos",            desc:"",                                                    precio:5590 },
      { modelo:"RL 18 Rastra Exc. 3 Puntos",            desc:"",                                                    precio:6290 },
      { modelo:"RL 20 Rastra Exc. 3 Puntos",            desc:"",                                                    precio:6740 },
      { modelo:"RE 14 Rastra Exc. Arrastre",            desc:"",                                                    precio:9000 },
      { modelo:"RE 16 Rastra Exc. Arrastre",            desc:"",                                                    precio:9450 },
      { modelo:"RE 18 Rastra Exc. Arrastre",            desc:"",                                                    precio:10590 },
      { modelo:"RE 20 Rastra Exc. Arrastre",            desc:"",                                                    precio:11000 },
      { modelo:"RES 20 Rastra Exc. Arrastre Pesada",    desc:"",                                                    precio:14600 },
      { modelo:"RES 22 Rastra Exc. Arrastre Pesada",    desc:"",                                                    precio:15200 },
      { modelo:"RES 24 Rastra Exc. Arrastre Pesada",    desc:"",                                                    precio:17600 },
      { modelo:"RES 26 Rastra Exc. Arrastre Pesada",    desc:"",                                                    precio:18300 },
      { modelo:"RDE 12 Rastra Doble Accion",            desc:"",                                                    precio:5300 },
      { modelo:"RDE 16 Rastra Doble Accion",            desc:"",                                                    precio:6200 },
      { modelo:"RDE 20 Rastra Doble Accion",            desc:"",                                                    precio:7100 },
      { modelo:"SP11 Sembradora de Pasturas",           desc:"11 lineas – cajon semillas finas – tolva fert. – ancho 2,2m", precio:15400 },
      { modelo:"SP9 Sembradora de Pasturas",            desc:"",                                                    precio:14840 },
      { modelo:"Sembradora Neumatica de Ajo 4 lineas",  desc:"Opcional: cinta de goteo USD 700",                   precio:29000 },
      { modelo:"Sembradora Neumatica 4 Surcos",         desc:"16 modulos – conformador 4 camellones",               precio:55470 },
      { modelo:"Sembradora en Plano",                   desc:"10 modulos – rodillo desterronador",                  precio:36170 },
      { modelo:"Sembradora Tablon",                     desc:"10 modulos – conformador de tablon",                  precio:35700 },
      { modelo:"Sembradora de 2 Surcos",                desc:"8 modulos – conformador 2 camellones",                precio:31270 },
      { modelo:"S3-F Escardillo",                       desc:"",                                                    precio:6500 },
      { modelo:"S5-F Escardillo",                       desc:"",                                                    precio:12100 },
      { modelo:"BTS Barra Desarraigadora Tablon/Surco", desc:"Reforzada",                                           precio:5830 },
      { modelo:"BT-AC Barra con Acordonador",           desc:"",                                                    precio:11730 },
      { modelo:"BT-AC Barra con Acordonador y Acarreador", desc:"",                                                 precio:15300 },
      { modelo:"FF Fertilizadora de Frutales",          desc:"Tolva 1000 lts – sinfin 200mm – cuchilla 16\"",      precio:11500 },
      { modelo:"FQ Aplicadora de Quimicos",             desc:"Tolva 440 lts – rueda cortaniveladora – ancho variable", precio:6000 },
      { modelo:"L 18 Zanjador",                         desc:"",                                                    precio:1920 },
      { modelo:"L21 Zanjador",                          desc:"",                                                    precio:6880 },
      { modelo:"AR550 Zanjador",                        desc:"",                                                    precio:14550 },
      { modelo:"AR580 Zanjador",                        desc:"",                                                    precio:18100 },
      { modelo:"CH 21 Hoja Niveladora",                 desc:"",                                                    precio:2800 },
      { modelo:"NCH 300 Niveladora para Corrales",      desc:"Incluye cilindros, mangueras y llantas",              precio:6850 },
      { modelo:"NCH 350 Niveladora para Corrales",      desc:"Incluye cilindros, mangueras y llantas",              precio:7200 },
      { modelo:"RF 300 Palon Nivelacion Laser",         desc:"50-70 HP con balancin",                               precio:13000 },
      { modelo:"RF 350 Palon Nivelacion Laser",         desc:"70-100 HP con balancin",                              precio:13350 },
      { modelo:"RF 400 Palon Nivelacion Laser",         desc:"110-140 HP con balancin",                             precio:17500 },
      { modelo:"RF 450 Palon Nivelacion Laser",         desc:"130-150 HP con balancin",                             precio:18200 },
      { modelo:"RF 500 Palon Nivelacion Laser",         desc:"160-190 HP con balancin",                             precio:24400 },
      { modelo:"RF 600 Palon Nivelacion Laser",         desc:"190-250 HP con balancin",                             precio:25700 },
      { modelo:"RF 700 Palon Nivelacion Laser",         desc:"220-350 HP con balancin",                             precio:41000 },
      { modelo:"RF 500 Tiro de Punta",                  desc:"",                                                    precio:33800 },
      { modelo:"RF 600 Tiro de Punta",                  desc:"",                                                    precio:34300 },
      { modelo:"PHA 6000 Pala Hidraulica Arrastre",     desc:"Sin neumaticos – incluye barra tiro, cilindros, mangueras, llantas", precio:33700 },
      { modelo:"PHA 9000 Pala Hidraulica Arrastre",     desc:"Sin neumaticos – incluye barra tiro, cilindros, mangueras, llantas", precio:54200 },
      { modelo:"PLB 5000 Palon con Balde",              desc:"Incluye neumaticos alta flotacion y barra de tiro",   precio:31400 },
      { modelo:"PLB 6000 Palon con Balde",              desc:"Incluye neumaticos alta flotacion y barra de tiro",   precio:32300 },
      { modelo:"PLB 8000 Palon con Balde",              desc:"Incluye neumaticos alta flotacion y barra de tiro",   precio:37450 },
      { modelo:"PLB 10000 Palon con Balde",             desc:"Sin neumaticos",                                      precio:45100 },
      { modelo:"PLB 12000 Palon con Balde",             desc:"Sin neumaticos",                                      precio:46200 },
      { modelo:"PLE 10000 Palon con Eyector",           desc:"Incluye barra tiro, cilindros, mangueras, llantas",   precio:71000 },
      { modelo:"PLE-ST 10000 con compuerta",            desc:"Incluye barra tiro, cilindros, mangueras, llantas",   precio:76500 },
      { modelo:"PLE-ST 13500 con compuerta",            desc:"Incluye barra tiro, cilindros, mangueras, llantas",   precio:79200 },
      { modelo:"Carro para Emisor Laser",               desc:"Sin neumaticos",                                      precio:2900 },
      { modelo:"RCO Removedora de Compost",             desc:"",                                                    precio:19900 },
    ]
  },

  // ─── S y L ────────────────────────────────────────────────
  { marca:"S y L", lista:"S y L feb-2026", vigencia:"feb-2026", moneda:"USD", conIVA:false,
    condiciones:"3 valores (0-30-60d): -10%. 9 valores (0-30-60-90-120-150-180-210-240d): -5%. Valores 0-360d: precio de lista (Neto).",
    items:[
      { modelo:"Tolva Silero 4 TN",  desc:"Chasis ref. ch.1/4 – tolva ch.12 – arcos p/lona – boquilla descarga – llantas 750x16 – sin lona, sin divisorio, sin chimango", precio:5300, opcionales:SYL_OPC_SILERO },
      { modelo:"Tolva Silero 8 TN",  desc:"Chasis ref. ch.1/4 – tolva ch.12 – arcos p/lona – boquilla descarga – llantas 8.25x22.5 – sin lona, sin divisorio, sin chimango", precio:7850, opcionales:SYL_OPC_SILERO },
      { modelo:"Tolva Silero 10 TN", desc:"Chasis ref. ch.1/4 – tolva ch.12 – arcos p/lona – boquilla descarga – llantas 8.25x22.5 – sin lona, sin divisorio, sin chimango", precio:8930, opcionales:SYL_OPC_SILERO },
      { modelo:"Tolva Silero 12 TN", desc:"Chasis ref. ch.1/4 – tolva ch.12 – arcos p/lona – boquilla descarga – llantas 8.25x22.5 – sin lona, sin divisorio, sin chimango", precio:9800, opcionales:SYL_OPC_SILERO },
      { modelo:"Tolva Silero 14 TN", desc:"Chasis ref. ch.1/4 – tolva ch.12 – arcos p/lona – boquilla descarga – llantas 8.25x22.5 – sin lona, sin divisorio, sin chimango", precio:10920, opcionales:SYL_OPC_SILERO },

      { modelo:"Tolva Semilla/Fertilizante 10m3", desc:"Chasis ref. ch.1/4 – tolva ch.14 – chimango hidráulico 5m – divisorio central – doble visor/boquilla – tanque inoculante – lavamanos – tape rápido y lona de línea – llantas 8.25x22.5", precio:11780, opcionales:SYL_OPC_SEMILLA_CON_DUALES },
      { modelo:"Tolva Semilla/Fertilizante 12m3", desc:"Chasis ref. ch.1/4 – tolva ch.14 – chimango hidráulico 5m – divisorio central – doble visor/boquilla – tanque inoculante – lavamanos – tape rápido y lona de línea – llantas 8.25x22.5", precio:12540, opcionales:SYL_OPC_SEMILLA_CON_DUALES },
      { modelo:"Tolva Semilla/Fertilizante 14m3", desc:"Chasis ref. ch.1/4 – tolva ch.14 – chimango hidráulico 5m – divisorio central – doble visor/boquilla – tanque inoculante – lavamanos – tape rápido y lona de línea – llantas 8.25x22.5", precio:13870, opcionales:SYL_OPC_SEMILLA_CON_DUALES },
      { modelo:"Tolva Semilla/Fertilizante 16m3", desc:"Chasis ref. ch.1/4 – tolva ch.14 – chimango hidráulico 5m – divisorio central – doble visor/boquilla – tanque inoculante – lavamanos – tape rápido y lona de línea – llantas 8.25x22.5", precio:14630, opcionales:SYL_OPC_SEMILLA_CON_DUALES },
      { modelo:"Tolva Semilla/Fertilizante 19m3", desc:"Chasis ref. ch.1/4 – tolva ch.14 – chimango hidráulico 5m – divisorio central – doble visor/boquilla – tanque inoculante – lavamanos – tape rápido y lona de línea – llantas duales 8.25x22.5 (tubo 5m x 160mm c/multiplicador)", precio:17500, opcionales:SYL_OPC_SEMILLA_SIN_DUALES },
      { modelo:"Tolva Semilla/Fertilizante 25m3", desc:"Chasis ref. ch.1/4 – tolva ch.14 – chimango hidráulico 5m – divisorio central – doble visor/boquilla – tanque inoculante – lavamanos – tape rápido y lona de línea – llantas duales 8.25x22.5 (tubo 5,5m x 220mm c/multiplicador)", precio:22800, opcionales:SYL_OPC_SEMILLA_SIN_DUALES },
    ]
  },

  // ─── BAIMA ────────────────────────────────────────────────
  { marca:"BAIMA", lista:"N°169", vigencia:"13/02/2026", moneda:"Pesos", conIVA:false,
    condiciones:"* 1 valor contado: -15%. * 2 valores 0-30d: -14%. * 3 valores 0-60d: -13%. * 4 valores 0-90d: -12%. * 5 valores 0-120d: -11%. * 6 valores 0-150d: -10%. * 7 valores 0-180d: -8%. * 8 valores 0-210d: -6%. * 9 valores 0-240d: -5%. * 10 valores 0-270d: -3%. * 11 valores 0-300d: -1%. * 12 valores 0-330d: Neto.",
    items:[
      // DESMALEZADORAS
      { modelo:"B-150 3 Puntos",        desc:"Desmalezadora 1,50m – 1 hélice 2 cuchillas – caja baño aceite – 540 RPM",                                          precio:6140786 },
      { modelo:"B-150 Arrastre",        desc:"Desmalezadora 1,50m – arrastre – altura regulable hidráulica – lanza central – rod.600x16 (sin neumáticos)",       precio:7305964 },
      { modelo:"B-180 3 Puntos",        desc:"Desmalezadora 1,80m – 1 hélice 2 cuchillas – caja baño aceite – 540 RPM",                                          precio:7330642 },
      { modelo:"B-180 Arrastre",        desc:"Desmalezadora 1,80m – arrastre – altura regulable hidráulica – rod.600x16 (sin neumáticos)",                       precio:8727639 },
      // DESMALEZADORAS HILERADORAS
      { modelo:"B-300-2000",            desc:"Hilerad. 3,00m – 2 hélices 4 cuchillas – correa plana – 540 RPM 60HP – rod.600x16 (sin neumáticos)",               precio:17760831 },
      { modelo:"B-HT-3302",            desc:"Hilerad. 3,00m – transmisión cardánica – hidráulico incluido – rod.650x16 (sin cubiertas)",                         precio:23939972 },
      { modelo:"B-400",                desc:"Hilerad. 4 hélices – chasis articulado – 540 RPM 75HP – rod.600x16 (sin neumáticos)",                               precio:36593967 },
      { modelo:"B-2900",               desc:"Desmalezadora 2 cuerpos plegable – 540 RPM 60HP – rod.650x16 (sin neumáticos)",                                    precio:27481034 },
      { modelo:"B-4300",               desc:"Articulada 3 cuerpos – 540 RPM 75HP – rod.650x16 (sin neumáticos)",                                                precio:36641379 },
      { modelo:"B-5200",               desc:"Articulada 4 hélices – 3 cuerpos – 540 RPM 85-90HP – rod.650x16 (sin neumáticos)",                                 precio:40748955 },
      // RASTRILLOS
      { modelo:"B-7 Estrellas",        desc:"Rastrillo 7 estrellas – ancho trabajo 5m – transporte 2,70m – 40HP – rod.6x16 (sin neumáticos)",                   precio:10759185 },
      { modelo:"B-9 Estrellas",        desc:"Rastrillo 9 estrellas – ancho trabajo 6,40m – transporte 2,70m – 40HP – rod.6x16 (sin neumáticos)",                precio:13800969 },
      { modelo:"B-13-V Estelar",       desc:"Rastrillo estelar en V – alas regulables – rod.6x16 (sin neumáticos)",                                             precio:21525446 },
      { modelo:"B-14-V Estelar",       desc:"Rastrillo estelar en V – alas regulables – rod.6x16 (sin neumáticos)",                                             precio:23927016 },
      { modelo:"B-14-V Estelar c/alas", desc:"Rastrillo estelar en V – con alas regulables – rod.6x16 (sin neumáticos)",                                        precio:25305659 },
      { modelo:"B-15-V Estelar c/alas", desc:"Rastrillo estelar en V – con alas regulables – rod.6x16 (sin neumáticos)",                                        precio:27715286 },
      { modelo:"B-16-V Estelar c/alas", desc:"Rastrillo estelar en V – con alas regulables – 6 ruedas – rod.6x16 (sin neumáticos)",                             precio:30124912 },
      { modelo:"B-14-V Estelar c/apertura hidráulica", desc:"Rastrillo estelar en V – alas regulables + apertura hidráulica",                                   precio:31095238 },
      { modelo:"B-15-V Estelar c/apertura hidráulica", desc:"Rastrillo estelar en V – alas regulables + apertura hidráulica",                                   precio:33504903 },
      { modelo:"B-16-V Estelar c/apertura hidráulica", desc:"Rastrillo estelar en V – alas regulables + apertura hidráulica – 6 ruedas",                        precio:35914528 },
    ]
  },

  // ─── DOLBI ────────────────────────────────────────────────
  { marca:"DOLBI", lista:"N°184/26", vigencia:"agosto 2026", moneda:"USD", conIVA:false,
    condiciones:"Contado (0-30): -12%. Pago 0-30-60-90: -10%. Pago 0-30-60-90-120-150-180: -5%. Pago 12 valores (0-330 dias): Neto. Creditos convenios bancos: -2% sobre lo otorgado por el banco (excepto Bco. Nacion en dolares). Bco. Nacion en dolares: -10% sin convenio banco.",
    items:[
      { modelo:"RG 4500",  desc:"Rolo Triturador 90cm – 3 rolos – 4,50m ancho", precio:21280 },
      { modelo:"RG 5250",  desc:"Rolo Triturador 90cm – 3 rolos – 5,25m ancho", precio:26334 },
      { modelo:"RG 7500",  desc:"Rolo Triturador 90cm – 5 rolos – 7,50m ancho", precio:34072 },
      { modelo:"RG 9000",  desc:"Rolo Triturador 90cm – 5 rolos – 9,00m ancho", precio:40903 },
      { modelo:"RS 6750",  desc:"Rolo Triturador 70cm – 3 rolos – 6,75m ancho", precio:27389 },
      { modelo:"RD 6750",  desc:"Rolo Deshidratador – 3 rolos – 6,75m ancho", precio:24026 },
      { modelo:"PD 600 Paratill",  desc:"600 timones curvos", precio:16055 },
      { modelo:"PD 800 Paratill",  desc:"800 timones curvos", precio:19801 },
      { modelo:"PD 1000 Paratill", desc:"1000 timones curvos", precio:29232 },
      { modelo:"PR 700 Paratill",  desc:"700 timones rectos", precio:17319 },
      { modelo:"PR 900 Paratill",  desc:"900 timones rectos", precio:21073 },
    ]
  },

  // ─── COMOFRA ──────────────────────────────────────────────
  { marca:"COMOFRA", lista:"N°181-REV00", vigencia:"01/09/2026", moneda:"Pesos", conIVA:false,
    condiciones:"Contado: -10%+5%. 4 Echeqs (0-30-60-90d): -10%. 6 Echeqs (0-30..150d): -5%. 8 Echeqs (0-30..210d): -3%. 10 Echeqs (0-30..270d): Neto.",
    items:[
      { modelo:"TA-17,5 PRO-ACTION",    desc:"Tolva autodesc. 17.500 L – 1 eje – Ruedas 23-1x30 – Tubo Ø450mm", precio:40378650 },
      { modelo:"TA-21,5 PRO-ACTION",    desc:"Tolva autodesc. 21.500 L – 1 eje – Ruedas 23,1x30 – Tubo Ø450mm", precio:45977100 },
      { modelo:"TA-26 INNOVA X-TREME",  desc:"Tolva autodesc. 26.000 L – 2 ejes – Ruedas 23-1x30 – AGDP+Cámara", precio:64130445 },
      { modelo:"TA-30 INNOVA X-TREME",  desc:"Tolva autodesc. 30.000 L – 2 ejes – Ruedas 23-1x30 – AGDP+Cámara", precio:65625923 },
      { modelo:"TA-35 INNOVA X-TREME",  desc:"Tolva autodesc. 35.000 L – 2 ejes – Ruedas 24-5x32 – AGDP+Cámara", precio:67928413 },
      { modelo:"TA-30 BUHO X-TREME",    desc:"Tolva autodesc. 30.000 L – 2 ejes – Ruedas 23,1x30 – AGDP+Cámara+Tablet – NUEVO", precio:69742216 },
      { modelo:"TA-35 BUHO X-TREME",    desc:"Tolva autodesc. 35.000 L – 2 ejes – Ruedas 24-5x32 – AGDP+Cámara+Tablet", precio:73756378 },
      { modelo:"TA-38 BUHO (24-5x32)",  desc:"Tolva autodesc. 38.000 L – 2 ejes – Ruedas 24-5x32", precio:76851910 },
      { modelo:"TA-38 BUHO (30-5Lx32)", desc:"Tolva autodesc. 38.000 L – 2 ejes – Ruedas 30-5Lx32", precio:77774125 },
      { modelo:"TA-45 BUHO Duales",     desc:"Tolva autodesc. 45.000 L – 2 ejes – Duales traseras – Anti-Incendio incl.", precio:92446838 },
      { modelo:"TA-45 BUHO Simple",     desc:"Tolva autodesc. 45.000 L – 2 ejes – Simples 30,5 LR32 – Anti-Incendio incl.", precio:91156000 },
      { modelo:"SF/H6 M3 TC Mixer",     desc:"Mixer horiz. 6m3 – 1 eje – Transmisión cadenas", precio:22897741 },
      { modelo:"SF/H10 M3 TC 1 EJE",   desc:"Mixer horiz. 10m3 – 1 eje – Cadenas+engranajes", precio:31780660 },
      { modelo:"SF/H10 M3 TC BAL",      desc:"Mixer horiz. 10m3 – Balancín – Cadenas+engranajes", precio:33118621 },
      { modelo:"SF/H10 M3 RE 1 EJE",   desc:"Mixer horiz. 10m3 – 1 eje – Reductor epicicloidal", precio:39888207 },
      { modelo:"SF/H10 M3 RE BAL",      desc:"Mixer horiz. 10m3 – Balancín – Reductor epicicloidal", precio:41114589 },
      { modelo:"SF/H10 M3 RE-CUT 1 EJE",desc:"Mixer horiz. 10m3 – 1 eje – Reductor + CUTER", precio:42628426 },
      { modelo:"SF/H10 M3 RE-CUT BAL",  desc:"Mixer horiz. 10m3 – Balancín – Reductor + CUTER", precio:43947698 },
      { modelo:"SF/H10 M3 TC BAL – DOBLE DESCARGA", desc:"Mixer horiz. 10m3 – Balancín – Cadenas+engranajes – DOBLE DESCARGA: batea lateral + tubo sinfín Ø194 × 6 m hidráulico – p/concentrado y secos (no apto silo picado)", precio:36856000 },
      { modelo:"SF/H10 M3 TC BAL – DESCARGA X TUBO", desc:"Mixer horiz. 10m3 – Balancín – Cadenas+engranajes – DESCARGA POR TUBO: sinfín Ø194 × 6 m hidráulico, sin batea – p/concentrado y secos (no apto silo picado)", precio:35020000 },
      { modelo:"SF/H10 M3 RE BAL – DOBLE DESCARGA", desc:"Mixer horiz. 10m3 – Balancín – Reductor epicicloidal – DOBLE DESCARGA: batea lateral + tubo sinfín Ø194 × 6 m hidráulico – p/concentrado y secos (no apto silo picado)", precio:48402000 },
      { modelo:"SF/H10 M3 RE BAL – DESCARGA X TUBO", desc:"Mixer horiz. 10m3 – Balancín – Reductor epicicloidal – DESCARGA POR TUBO: sinfín Ø194 × 6 m hidráulico, sin batea – p/concentrado y secos (no apto silo picado)", precio:46445000 },
      { modelo:"SF/H14 M3 RE 1 EJE",   desc:"Mixer horiz. 14m3 – 1 eje – Reductor epicicloidal", precio:56629529 },
      { modelo:"SF/H14 M3 RE BAL",      desc:"Mixer horiz. 14m3 – Balancín – Reductor epicicloidal", precio:58853337 },
      { modelo:"SF/H14 M3 RE-CUT 1 EJE",desc:"Mixer horiz. 14m3 – 1 eje – Reductor + CUTER", precio:58051731 },
      { modelo:"SF/H14 M3 RE-CUT BAL",  desc:"Mixer horiz. 14m3 – Balancín – Reductor + CUTER", precio:59385300 },
      { modelo:"SF/H16 M3 RE 1 EJE",   desc:"Mixer horiz. 16m3 – 1 eje – Reductor epicicloidal", precio:65059312 },
      { modelo:"SF/H16 M3 RE 2 EJES",  desc:"Mixer horiz. 16m3 – 2 ejes – Reductor epicicloidal", precio:71368721 },
      { modelo:"SF/H16 M3 RE-CUT 1 EJE",desc:"Mixer horiz. 16m3 – 1 eje – Reductor + CUTER", precio:69429354 },
      { modelo:"SF/H16 M3 RE-CUT 2 EJES",desc:"Mixer horiz. 16m3 – 2 ejes – Reductor + CUTER", precio:72638361 },
      { modelo:"SF/H16 M3 RE 1 EJE – DOBLE DESCARGA", desc:"Mixer horiz. 16m3 – 1 eje – Reductor epicicloidal – DOBLE DESCARGA: batea lateral + tubo sinfín Ø194 × 6 m hidráulico – p/concentrado y secos (no apto silo picado)", precio:72297600 },
      { modelo:"SF/H16 M3 RE 1 EJE – DESCARGA X TUBO", desc:"Mixer horiz. 16m3 – 1 eje – Reductor epicicloidal – DESCARGA POR TUBO: sinfín Ø194 × 6 m hidráulico, sin batea – p/concentrado y secos (no apto silo picado)", precio:69700000 },
      { modelo:"MV6/1 Mixer Vertical",  desc:"Mixer vertical 6m3 – 1 eje", precio:33590913 },
      { modelo:"MV10/1 Mixer Vertical", desc:"Mixer vertical 10m3 – 1 eje", precio:43325381 },
      { modelo:"MV14/1 Mixer Vertical", desc:"Mixer vertical 14m3 – 1 eje – Draper T80", precio:52280218 },
      { modelo:"MVD21/2 Mixer Vertical",desc:"Mixer vertical 21m3 – 1 eje – Draper T110 – NUEVO", precio:70439200 },
      { modelo:"MV25/2 Mixer Vertical", desc:"Mixer vertical 25m3 – 1 eje – Draper T110", precio:86540920 },
      { modelo:"ATF 12000 c/sinfín",    desc:"Tolva semillas 12.000 L – Ruedas 275/80x22,5 – c/tubo sinfín", precio:28773345 },
      { modelo:"ATF 17500 c/sinfín",    desc:"Tolva semillas 17.500 L – Ruedas 275/80x22,5 – c/tubo sinfín", precio:35878724 },
      { modelo:"ATF 26000 c/sinfín",    desc:"Tolva semillas 26.000 L – Ruedas 275/80x22,5 – c/tubo sinfín", precio:45610169 },
      { modelo:"BV-04 Batea Volcadora", desc:"Volumen 4m3 – Cap. 4 Tn – 1 eje – Ruedas 11-Lx16", precio:12315835 },
      { modelo:"BV-05 Batea Volcadora", desc:"Volumen 5m3 – Cap. 6 Tn – Balancín – Ruedas 11-Lx16", precio:20574447 },
      { modelo:"BV-7,5 Batea Volcadora",desc:"Volumen 7,5m3 – Cap. 8 Tn – Balancín – Ruedas 275/80x22,5", precio:25629231 },
      { modelo:"BV-9,5 Batea Volcadora",desc:"Volumen 9,5m3 – Cap. 12 Tn – Balancín – Ruedas 275/80x22,5", precio:29324772 },
      { modelo:"BV-9,5 Batea Volcadora (2 Ejes)",desc:"Volumen 9,5m3 – Cap. 12 Tn – 2 Ejes – Avantren Delantero – Ruedas 275/80x22,5", precio:27305316 },
      { modelo:"BV-15 Batea Volcadora", desc:"Volumen 15m3 – Cap. 18 Tn – 2 ejes", precio:43065604 },
      { modelo:"E-09-RobleMax Embolsadora", desc:"Bolsas 9 PIES – Cap. 600 Tn/h – c/cubiertas", precio:21788000 },
      { modelo:"ATAM16 Acoplado Rural", desc:"Tambero – Cap. 3-4 Tn – Ruedas 600x16", precio:8434345 },
      { modelo:"ACIS26 Tanque Plástico",desc:"Cap. 1.000 L – 1 eje – Ruedas 600x16", precio:4878900 },
      { modelo:"ACIS12 Tanque Metálico",desc:"Cap. 3.000 L – 2 ejes – Ruedas 600x16", precio:8676118 },
      { modelo:"ACIS16 Tanque Metálico",desc:"Cap. 5.000 L – 2 ejes – Ruedas 275/80x22,5", precio:14434024 },
    ]
  },

  // ─── MAIZCO ─────────────────────────────────────────────
  { marca:"MAIZCO", lista:"LP 109", vigencia:"19/05/2026", moneda:"Pesos", conIVA:false,
    condiciones:"",
    items:[
      // SGT Classic 52,5cm
      { modelo:"SGT 2418 (24s/52,5cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:143713831, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 2200 (22s/52,5cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:133148157, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 2116 (21s/52,5cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:127865319, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 2015 (20s/52,5cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:121812765, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1814 (18s/52,5cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:111124100, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1612 (16s/52,5cm)", desc:"Cabezal c/remolque 2 ejes, 8 cub.", precio:100526524, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1411 (14s/52,5cm)", desc:"Cabezal c/remolque 2 ejes, 8 cub.", precio:89497630, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1310 (13s/52,5cm)", desc:"Cabezal c/remolque 2 ejes, 6 cub.", precio:80528433, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1209 (12s/52,5cm)", desc:"Cabezal c/remolque 2 ejes, 6 cub.", precio:74976083, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1008 (10s/52,5cm)", desc:"Cabezal c/remolque 2 ejes, 6 cub.", precio:67343370, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      // SGT Classic 70cm
      { modelo:"SGT 1824 (18s/70cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:115801510, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1621 (16s/70cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:104815313, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1520 (15s/70cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:99140375, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1418 (14s/70cm)", desc:"Cabezal c/remolque 3 ejes, 12 cub.", precio:93465431, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1216 (12s/70cm)", desc:"Cabezal c/remolque 2 ejes, 8 cub.", precio:81944748, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1114 (11s/70cm)", desc:"Cabezal c/remolque 2 ejes, 8 cub.", precio:76074958, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 1013 (10s/70cm)", desc:"Cabezal c/remolque 2 ejes, 6 cub.", precio:66848932, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 912 (9s/70cm)", desc:"Cabezal c/remolque 2 ejes, 6 cub.", precio:61039749, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      { modelo:"SGT 810 (8s/70cm)", desc:"Cabezal c/remolque 2 ejes, 6 cub.", precio:56717058, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false }, { id:"maizco_sinfines", label:"Sinfines Laterales", precio:3303669.80, defecto:false } ] },
      // SGS Rowfree
      { modelo:"SGS 12,6 (24s/52cm)", desc:"Rowfree - c/sinfines laterales, copiador de terreno incluido", precio:181574736, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." },
      { modelo:"SGS 11.5 (22s/52cm)", desc:"Rowfree - c/sinfines laterales, copiador de terreno incluido", precio:167853986, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." },
      { modelo:"SGS 10.5 (20s/52cm)", desc:"Rowfree - c/sinfines laterales, copiador de terreno incluido", precio:153951398, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." },
      { modelo:"SGS 9.5 (18s/52cm)", desc:"Rowfree - c/sinfines laterales, copiador de terreno incluido", precio:140048786, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." },
      { modelo:"SGS 8.4 (16s/52cm)", desc:"Rowfree - c/sinfines laterales, copiador de terreno incluido", precio:128047158, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." },
      { modelo:"SGS 7.4 (14s/52cm)", desc:"Rowfree - c/sinfines laterales, copiador de terreno incluido", precio:115095189, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." },
      { modelo:"SGS 6,3 (12s/52cm)", desc:"Rowfree - c/sinfines laterales, copiador de terreno incluido", precio:102935303, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 30% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28.\nUSD lista +3%: 10% Cdo, 15% Ene27, 30% Jul27, 15% Ene28, 30% Jul28.\nUSD lista +6% CUPO: 10% Cdo, 15% Ene27, 25% Jul27, 25% Jul28, 25% Jul29." },
      // Girasolero Grandflow 52,5cm
      { modelo:"Girasol 26s GRANDFLOW HID", desc:"52,5cm - Rem 3 ejes - 12 cub. - Hidraulico", precio:82689183, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 24s GRANDFLOW HID", desc:"52,5cm - Rem 3 ejes - 12 cub. - Hidraulico", precio:76479516, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 24s GRANDFLOW MEC", desc:"52,5cm - Rem 3 ejes - 12 cub.", precio:69952087, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 21s GRANDFLOW HID", desc:"52,5cm - Rem 2 ejes - 6 cub. - Hidraulico", precio:65013073, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 21s GRANDFLOW MEC", desc:"52,5cm - Rem 2 ejes - 6 cub.", precio:58757471, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 19s GRANDFLOW HID", desc:"52,5cm - Rem 2 ejes - 6 cub. - Hidraulico", precio:53166781, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 19s GRANDFLOW MEC", desc:"52,5cm - Rem 2 ejes - 6 cub.", precio:47834315, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 16s GRANDFLOW MEC", desc:"52,5cm - Rem 2 ejes - 6 cub.", precio:40018975, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      // Girasolero Grandflow 70cm
      { modelo:"Girasol 18s GRANDFLOW HID 70cm", desc:"70cm - Rem 3 ejes - 12 cub. - Hidraulico", precio:73228912, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 18s GRANDFLOW 70cm MEC", desc:"70cm - Rem 3 ejes - 12 cub.", precio:66780738, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 16s GRANDFLOW HID 70cm", desc:"70cm - Rem 2 ejes - 6 cub. - Hidraulico", precio:63937546, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 16s GRANDFLOW 70cm MEC", desc:"70cm - Rem 2 ejes - 6 cub.", precio:56836958, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 14s GRANDFLOW HID 70cm", desc:"70cm - Rem 2 ejes - 6 cub. - Hidraulico", precio:49752323, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 14s GRANDFLOW 70cm MEC", desc:"70cm - Rem 2 ejes - 6 cub.", precio:44856949, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      { modelo:"Girasol 12s GRANDFLOW 70cm MEC", desc:"70cm - Rem 2 ejes - 6 cub.", precio:38306516, cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (30 a 240 dias) precio lista\nUSD lista: 25% Cdo, 15% Ene27, 25% Jul27, 15% Ene28, 20% Jul28.\nUSD lista +3%: 15% Cdo, 20% Ene27, 20% Jul27, 15% Ene28, 20% Jul28, 10% Ene29." , opcionales:[ { id:"maizco_copiador", label:"Copiador de Terreno WIFI Box", precioUSD:4342.65, defecto:false } ] },
      // Draper DM200 (USD)
      { modelo:"DM200 45ft Draper", desc:"45 pies - Rem 3 ejes engomado - s/IVA", precio:151314, monedaItem:"USD", cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (0 a 210 dias) precio lista\nUSD lista: 20% Cdo, 20% Ene27, 30% Jul27, 10% Ene28, 20% Jul28.\nUSD lista +3%: 20% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28, 10% Ene29.\nUSD lista +7%: 15% Cdo, 15% Ene27, 20% Jul27, 5% Ene28, 20% Jul28, 5% Ene29, 15% Jul29, 5% Ene30." , opcionales:[ { id:"maizco_copiador_rigido", label:"Copiador de Terreno Modo Rígido", precioUSD:2300, defecto:false } ] },
      { modelo:"DM200 40ft Draper", desc:"40 pies - Rem 3 ejes engomado - s/IVA", precio:143851, monedaItem:"USD", cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (0 a 210 dias) precio lista\nUSD lista: 20% Cdo, 20% Ene27, 30% Jul27, 10% Ene28, 20% Jul28.\nUSD lista +3%: 20% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28, 10% Ene29.\nUSD lista +7%: 15% Cdo, 15% Ene27, 20% Jul27, 5% Ene28, 20% Jul28, 5% Ene29, 15% Jul29, 5% Ene30." , opcionales:[ { id:"maizco_copiador_rigido", label:"Copiador de Terreno Modo Rígido", precioUSD:2300, defecto:false } ] },
      { modelo:"DM200 35ft Draper", desc:"35 pies - Rem 2 ejes engomado - s/IVA", precio:130242, monedaItem:"USD", cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (0 a 210 dias) precio lista\nUSD lista: 20% Cdo, 20% Ene27, 30% Jul27, 10% Ene28, 20% Jul28.\nUSD lista +3%: 20% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28, 10% Ene29.\nUSD lista +7%: 15% Cdo, 15% Ene27, 20% Jul27, 5% Ene28, 20% Jul28, 5% Ene29, 15% Jul29, 5% Ene30." , opcionales:[ { id:"maizco_copiador_rigido", label:"Copiador de Terreno Modo Rígido", precioUSD:2300, defecto:false } ] },
      { modelo:"DM200 30ft Draper", desc:"30 pies - Rem 2 ejes engomado - s/IVA", precio:115347, monedaItem:"USD", cond:"Pesos:\n* Contado -10%\n* 0-30-60 dias -7%\n* 8 cheques (0 a 210 dias) precio lista\nUSD lista: 20% Cdo, 20% Ene27, 30% Jul27, 10% Ene28, 20% Jul28.\nUSD lista +3%: 20% Cdo, 10% Ene27, 25% Jul27, 10% Ene28, 25% Jul28, 10% Ene29.\nUSD lista +7%: 15% Cdo, 15% Ene27, 20% Jul27, 5% Ene28, 20% Jul28, 5% Ene29, 15% Jul29, 5% Ene30." , opcionales:[ { id:"maizco_copiador_rigido", label:"Copiador de Terreno Modo Rígido", precioUSD:2300, defecto:false } ] },
    ]
  },

  // ─── CINALLI ──────────────────────────────────────────────
  { marca:"CINALLI", lista:"LP 94", vigencia:"marzo 2026", moneda:"Pesos", conIVA:false,
    condiciones:"Contado (0-30 dias): -10% + 21% IVA. Consultar otras condiciones.",
    items:[
      // Niveladoras de arrastre
      { modelo:"Niveladora N-3000",          desc:"Arrastre - cuchilla 3,05m - 65hp - rod.750x16", precio:9840000 },
      { modelo:"Niveladora N-3000 4R",       desc:"Arrastre 4 ruedas - cuchilla 3,05m - 65hp", precio:11570000 },
      { modelo:"Niveladora N-3000 Hidraulica", desc:"Arrastre hidraulica - cuchilla 3,05m - 65hp", precio:11713000 },
      { modelo:"Niveladora N-3000 4R Hidraulica", desc:"Arrastre hidraulica 4 ruedas - cuchilla 3,05m", precio:13665000 },
      { modelo:"Niveladora N-3600 Hidraulica", desc:"Arrastre hidraulica - cuchilla 3,6m - 80hp", precio:14529000 },
      { modelo:"Niveladora N-3600 4R Hidraulica", desc:"Arrastre hidraulica 4 ruedas - cuchilla 3,6m - 80hp", precio:18200000 },
      // Niveladoras autopropulsadas
      { modelo:"Niveladora NA-C2000",        desc:"Autopropulsada - cuchilla 3,60m - 120hp", precio:21455000 },
      { modelo:"Niveladora NA-C3000",        desc:"Autopropulsada - cuchilla 4m - 140hp", precio:26427000 },
      // Niveladoras 3 puntos
      { modelo:"Niveladora N-3P",            desc:"3 puntos - hoja 2,14m - 350kg", precio:3010000 },
      { modelo:"Niveladora N-3P CD Hidraulica", desc:"3 puntos despl. lateral - hoja 2,14m", precio:4354000 },
      { modelo:"Niveladora N-3P CD/GH",      desc:"3 puntos despl. lateral y giro hidraulico", precio:5300000 },
      // Palas de arrastre
      { modelo:"Pala P-150 1,5m",            desc:"Arrastre - cap. 1,5m3 - ancho corte 1,45m - rod.650x16", precio:5310000 },
      { modelo:"Pala P-200 2,3m",            desc:"Arrastre - cap. 2,3m3 - ancho corte 1,40m - rod.650x16", precio:6815000 },
      { modelo:"Pala P-200 RT 2,3m",         desc:"Arrastre ruedas traseras - cap. 2,3m3 - vuelco atras", precio:8360000 },
      { modelo:"Pala P-350 VD 3,5m",         desc:"Tipo vial - cap. 3,5m3 - ancho corte 1,83m - 1600kg", precio:17930000 },
      { modelo:"Pala P-450 VD 4,5m",         desc:"Tipo vial - cap. 4,5m3 - ancho corte 2,23m - 1900kg", precio:20213000 },
      { modelo:"Pala P-AG 300 3,25m",        desc:"Agricola - cap. 3m3 - ancho corte 1,70m - rod.900x20", precio:13124000 },
      // Rotocultivadores
      { modelo:"Rotocultivador RTC-CP 1,80m", desc:"Con puas para cincel - tiro central - 75-80hp", precio:11250000 },
      { modelo:"Rotocultivador RTC-CP 2,05m", desc:"Con puas para cincel - tiro central - 80-85hp", precio:12480000 },
      { modelo:"Rotocultivador RTC-CP 2,30m", desc:"Con puas para cincel - tiro central - 85-90hp", precio:13700000 },
      { modelo:"Rotocultivador 1,05m",        desc:"Tiro central - 300kg - 35-40hp", precio:8240000 },
      { modelo:"Rotocultivador 1,30m",        desc:"Tiro central - 340kg - 40-45hp", precio:8572000 },
      { modelo:"Rotocultivador 1,55m",        desc:"Tiro central - 370kg - 50-55hp", precio:8896000 },
      { modelo:"Rotocultivador 1,80m",        desc:"Tiro central - 400kg - 60-65hp", precio:9209000 },
      { modelo:"Rotocultivador 2,05m",        desc:"Tiro central - 430kg - 70-75hp", precio:9798000 },
      { modelo:"Rotocultivador 1,55m Desplazado", desc:"Tiro desplazado - 400kg - 60-65hp", precio:9782000 },
      // Embutidora
      { modelo:"Embutidora EG-9000 9 pies",  desc:"Granos secos - 1,5 TT/min - tiro de frente", precio:13838000 },
      // Desmalezadoras
      { modelo:"Desmalezadora D-150",        desc:"Arrastre - rod.650x16 - cilindro opcional", precio:5320000 },
      { modelo:"Desmalezadora D-200",        desc:"Arrastre hidraulica - rod.650x16", precio:7450000 },
      // Rastrillos hileradores
      { modelo:"Rastrillo Hilerador RVC-14", desc:"En V - 2 cuerpos 7 estrellas - ancho 12m", precio:20180000 },
      { modelo:"Rastrillo Hilerador RVC-16", desc:"En V - 2 cuerpos 8 estrellas - ancho 12m", precio:22928000 },
    ]
  },

  // ─── SODE ─────────────────────────────────────────────────
  { marca:"SODE", lista:"N°6", vigencia:"jun-2026", moneda:"Pesos", conIVA:true,
    condiciones:"Contado: -6%. Financiacion segun modelo.",
    items:[
      { modelo:"Hileradora 5,50m",          desc:"5,50 mts de corte", precio:41500000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Hileradora 6,50m",          desc:"6,50 mts de corte", precio:47700000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Plataforma 5,50m",          desc:"5,50 mts de corte", precio:52000000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Plataforma 6,50m",          desc:"6,50 mts de corte", precio:55000000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Plataforma 7,00m",          desc:"7 mts de corte", precio:65000000,    cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Hileradora 5,50m c/Flexi",  desc:"5,50 mts de corte con Flexi", precio:52000000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Hileradora 6,50m c/Flexi",  desc:"6,50 mts de corte con Flexi", precio:61000000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Plataforma 7,00m c/Flexi",  desc:"7 mts de corte con Flexi, incl. carro de transporte engomado c/cubiertas nuevas", precio:79500000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Juntador de Rollos HS5000", desc:"Juntador 5 rollos", precio:18900000, cond:"Contado: -6%. Financiacion: 8 cuotas." },
      { modelo:"Juntador 10 Rollos TS10",   desc:"Juntador 10 rollos", precio:53400000, cond:"Contado: -6%. Financiacion: 10 cuotas." },
      { modelo:"Maquina Reparada 4,80m",    desc:"Reparada a nueva 4,80 mts", precio:27500000, cond:"Contado: -6%." },
    ]
  },

  // ─── RICHIGER ─────────────────────────────────────────────
  { marca:"RICHIGER", lista:"N°308", vigencia:"12/10/2026", moneda:"Pesos", conIVA:false,
    condiciones:"10 valores consec. (0-270 días): Precio de Lista. 12 valores consec.: recargo 3%. Contado (0-30 días): 10%+5% desc. Valores a nombre de: Agroindustria y Servicios G y G S.R.L.",
    items:[
      { modelo:"R6N",          desc:"Quebradora embolsadora 6 pies – 40 Tn/h – 80-100 HP", precio:33727000, opcionales:[{ id:"ric_inoc1", label:"Inoculador SIMPLE inyección (tanque 190 lts)", precio:3736000 }] },
      { modelo:"R6NA",         desc:"Quebradora embolsadora 6 pies + Sinfín Alimentador", precio:39566000 },
      { modelo:"R6E plus",     desc:"Quebradora embolsadora 6 pies – Sistema PLUS – 50/55 Tn/h", precio:36976000, opcionales:[{ id:"ric_inoc1", label:"Inoculador SIMPLE inyección (tanque 190 lts)", precio:3736000 }] },
      { modelo:"R6EA plus",    desc:"Quebradora embolsadora 6 pies – Sistema PLUS + Sinfín Alimentador", precio:50979000 },
      { modelo:"R990M plus",   desc:"Quebradora embolsadora 9 pies – 50 Tn/h / 180 Tn/h grano entero", precio:54093000, opcionales:[{ id:"ric_inoc1", label:"Inoculador SIMPLE inyección (tanque 190 lts)", precio:3736000 }] },
      { modelo:"R990MA plus",  desc:"Quebradora embolsadora 9 pies + Sinfín Alimentador", precio:67654000 },
      { modelo:"R990MX plus",  desc:"Quebradora embolsadora 9 pies – Doble caja – 110/250 Tn/h", precio:72882000, opcionales:[{ id:"ric_inoc2", label:"Inoculador DOBLE inyección (tanque 190 lts)", precio:4026000 },{ id:"ric_cent_cg", label:"Central hidráulica independiente CG-R990MX", precio:11177000 }] },
      { modelo:"R9MF",         desc:"Moledora embolsadora 9 pies – 20/25 Tn/h – c/trampa magnética", precio:49774000, opcionales:[{ id:"ric_cent_r9", label:"Central hidráulica independiente R-9MF", precio:10587000 }] },
      { modelo:"R9MFA",        desc:"Moledora embolsadora 9 pies + Sinfín Alimentador – c/trampa magnética", precio:63035000, opcionales:[{ id:"ric_cent_r9", label:"Central hidráulica independiente R-9MF", precio:10587000 }] },
      { modelo:"R6F",          desc:"Embolsadora forraje verde 6 pies – 30-40 Tn/h – 80 HP", precio:20121000, opcionales:[{ id:"ric_inoc1", label:"Inoculador SIMPLE inyección (tanque 190 lts)", precio:3736000 }] },
      { modelo:"DC1045",       desc:"Embolsadora grano entero c/descargador camiones hidromecánico", precio:90295000 },
      { modelo:"DC1245",       desc:"Embolsadora c/descargador camiones – 400 Tn/h – 12 pies", precio:109975000 },
      { modelo:"R1290",        desc:"Embolsadora granos secos – 12 pies – 1500 Tn/h – Sinfín Ø700mm", precio:85000000 },
      { modelo:"R1090",        desc:"Embolsadora granos secos – 10 pies – 1200 Tn/h – Sinfín Ø600mm", precio:37044000 },
      { modelo:"R970",         desc:"Embolsadora grano entero seco – 9 pies – 600 Tn/h", precio:28362000 },
      { modelo:"CG300",        desc:"Cargador hidromecánico articulado – 200 Tn/h – Sinfín Ø360mm", precio:37549000, opcionales:[{ id:"ric_cent_cg", label:"Central hidráulica independiente CG-R990MX", precio:11177000 },{ id:"ric_vinc1", label:"Vinculación CG-300 con R-990 / R1090", precio:5097000 },{ id:"ric_vinc2", label:"Vinculación CG-300 con R-990MX plus", precio:2798000 }] },
      { modelo:"CG300E",       desc:"Cargador hidromecánico articulado versión E – 200 Tn/h", precio:30899000, opcionales:[{ id:"ric_cent_cg", label:"Central hidráulica independiente CG-R990MX", precio:11177000 },{ id:"ric_vinc1", label:"Vinculación CG-300 con R-990 / R1090", precio:5097000 },{ id:"ric_vinc2", label:"Vinculación CG-300 con R-990MX plus", precio:2798000 }] },
      { modelo:"AB100",        desc:"Cargador hidromecánico p/embutidora R990/R1090 – 100 Tn/h", precio:37420000 },
      { modelo:"E1210",        desc:"Extractor granos secos – 300 Tn/h – Bolsas 10 y 12 pies", precio:55500000, opcionales:[{ id:"ric_pico", label:"Kit pico móvil de accionamiento hidráulico", precio:1472000 }] },
      { modelo:"EA150R",       desc:"Extractor EXCLUSIVO grano de Arroz – 150 Tn/h – Bolsas 9 y 10 pies", precio:56470000, opcionales:[{ id:"ric_pico", label:"Kit pico móvil de accionamiento hidráulico", precio:1472000 }] },
      { modelo:"E6910",        desc:"Extractor granos secos – 360 Tn/h – Bolsas 6, 9 y 10 pies", precio:36796000, opcionales:[{ id:"ric_pico", label:"Kit pico móvil de accionamiento hidráulico", precio:1472000 },{ id:"ric_cuchilla", label:"Cuchilla eléctrica", precio:1416000 }] },
      { modelo:"EA910",        desc:"Extractor granos secos – 300 Tn/h – Bolsas 9 pies o superior", precio:40793000, opcionales:[{ id:"ric_pico", label:"Kit pico móvil de accionamiento hidráulico", precio:1472000 },{ id:"ric_cuchilla", label:"Cuchilla eléctrica", precio:1416000 }] },
      { modelo:"ER910 Plus",   desc:"Extractora c/bobinador y eyector – 350 Tn/h – Bolsas 9 y 10 pies", precio:95384000, opcionales:[{ id:"ric_cuchilla", label:"Cuchilla eléctrica", precio:1416000 }] },
      { modelo:"ER910",        desc:"Extractora c/bobinador y eyector – 350 Tn/h – Bolsas 9 y 10 pies", precio:43393000, opcionales:[{ id:"ric_cuchilla", label:"Cuchilla eléctrica", precio:1416000 }] },
      { modelo:"M50E",         desc:"Quebradora estacionaria fija p/motor eléctrico – 40 Tn/h", precio:14270000, opcionales:[{ id:"ric_sinfin", label:"Sinfín de descarga 3,80 m de altura", precio:3064000 }] },
      { modelo:"M50T",         desc:"Quebradora estacionaria fija c/barra de mando – 40 Tn/h", precio:12970000 },
      { modelo:"A6F Acarreador",desc:"Acarreador para Forraje Picado Fino – motor hidráulico – 80 HP", precio:7812000 },
      { modelo:"BC6910 Batea de Carga", desc:"Para extractora E6910 – Flete 10% del valor", precio:4612000 },
      { modelo:"BC910 Batea de Carga",  desc:"Para extractora EA910 – Flete 10% del valor", precio:4612000 }
    ]
  },

  // ─── GROSSPAL ─────────────────────────────────────────────
  { marca:"GROSSPAL", lista:"V-2025", vigencia:"04/08/2025", moneda:"USD", conIVA:false, tcFabrica:1150, // lista siempre en USD; Grosspal factura con TC propio $1.150 (avisan cuando cambia)
    condiciones:"Op.1 (0-30-60 dias): -10%-5%. Op.2 (0-30-60-90-120): -10%. Op.3 (0-30-60-90-120-150): -5%. Op.4 (0-30-60-90-120-150-180): Neto.",
    items:[
      // PASTURAS – DESMALEZADORAS
      { modelo:"DAV5000",    desc:"Desmalezadora Articulada de Arrastre", precio:28667 },
      { modelo:"DAV3500",    desc:"Desmalezadora Articulada de Arrastre", precio:20969 },
      { modelo:"AVF3000",    desc:"Desmalezadora Articulada de Arrastre", precio:15457 },
      { modelo:"VG421 CARD", desc:"Desmalezadora Hileradora Cardánica (Ala rebatible)", precio:30210 },
      { modelo:"VG420 CARD", desc:"Desmalezadora Hileradora Cardánica", precio:28210 },
      { modelo:"VG320 CARD", desc:"Desmalezadora Hileradora Cardánica", precio:16781 },
      { modelo:"VG300",      desc:"Desmalezadora Hileradora con Cilindro y Mangueras", precio:13032 },
      { modelo:"AVG200",     desc:"Desmalezadora de Arrastre con Cilindro y Mangueras", precio:6922 },
      { modelo:"AVG150",     desc:"Desmalezadora de Arrastre con Cilindro y Mangueras", precio:5733 },
      { modelo:"AVG120",     desc:"Desmalezadora de Arrastre con Cilindro y Mangueras", precio:5315 },
      { modelo:"3pVG200 PCL",desc:"Desmalezadora 3 Puntos con Cuchilla Lateral", precio:7910 },
      { modelo:"3pVG150 PCL",desc:"Desmalezadora 3 Puntos con Cuchilla Lateral", precio:6985 },
      { modelo:"3pVG200",    desc:"Desmalezadora para Tres Puntos", precio:4814 },
      { modelo:"3pVG150",    desc:"Desmalezadora para Tres Puntos", precio:4222 },
      { modelo:"3pVG120",    desc:"Desmalezadora para Tres Puntos", precio:3842 },
      // PASTURAS – RASTRILLOS
      { modelo:"REV16000",   desc:"Rastrillo Estelar con rodamientos", precio:28700 },
      { modelo:"REV18000",   desc:"Rastrillo Estelar con rodamientos", precio:30320 },
      { modelo:"REV14000",   desc:"Rastrillo Estelar", precio:18800 },
      { modelo:"RLV7000",    desc:"Rastrillo Estelar con Cilindro", precio:7987 },
      // MOVIMIENTO DE ROLLOS
      { modelo:"VG400 Elevador de Rollos", desc:"Elevador de Rollos", precio:6046 },
      { modelo:"TRV2000",    desc:"Transportador Hidráulico Dos Rollos – llantas 6.50x16", precio:5801 },
      { modelo:"TRV1000",    desc:"Transportador Hidráulico Un Rollo – llantas 6.50x16", precio:2809 },
      { modelo:"3pTRV1000",  desc:"Transportador de Un Rollo Tres Puntos", precio:1897 },
      // PALAS DE ARRASTRE
      { modelo:"NOVA 350",   desc:"Pala de Arrastre con Cilindro y Mangueras – llantas 8.25x22.5", precio:14728 },
      { modelo:"NOVA 200",   desc:"Pala de Arrastre con Cilindro y Mangueras", precio:6724 },
      { modelo:"NOVA 150",   desc:"Pala de Arrastre con Cilindro y Mangueras", precio:5139 },
      { modelo:"NOVA 125",   desc:"Pala de Arrastre con Cilindro y Mangueras", precio:4316 },
      { modelo:"VIAL 600",   desc:"Pala de Arrastre con Cilindros – llantas duales 8.25x22.5", precio:25930 },
      { modelo:"VIAL 450",   desc:"Pala de Arrastre con Cilindros – llantas 8.25x22.5", precio:19345 },
      { modelo:"VIAL 300",   desc:"Pala de Arrastre con Cilindros – llantas 8.25x22.5", precio:16719 },
      { modelo:"VIAL VD7500",desc:"Pala de Arrastre con Cilindros – llantas duales 8.25x22.5", precio:42700 },
      { modelo:"VIAL VD5000",desc:"Pala de Arrastre con Cilindros – llantas duales 8.25x22.5", precio:33923 },
      { modelo:"VIAL VD3500",desc:"Pala de Arrastre con Cilindros – llantas 1.000x16", precio:17915 },
      // NIVELADORAS DE ARRASTRE
      { modelo:"VGX 5500",   desc:"Niveladora con Joystick – 5 Cubiertas 12.4x24", precio:54384 },
      { modelo:"VGX 5200",   desc:"Niveladora con Joystick – 5 Cubiertas 12.4x24", precio:49307 },
      { modelo:"VGX 4800",   desc:"Niveladora con Joystick – 5 Cubiertas 9.5x24", precio:45364 },
      { modelo:"VGX 3800",   desc:"Niveladora con Joystick – 5 Cubiertas 9.5x24", precio:40753 },
      { modelo:"VG 304",     desc:"Niveladora con Joystick – 5 Cubiertas 1.100x16", precio:40753 },
      { modelo:"NA14",       desc:"Niveladora de Arrastre", precio:13327 },
      { modelo:"NA12 C/CIL.",desc:"Niveladora de Arrastre", precio:10140 },
      { modelo:"NA10 MAX",   desc:"Niveladora – 2 Cubiertas 9.5x24", precio:14100 },
      { modelo:"NA10-4 MAX", desc:"Niveladora – 4 Cubiertas 750x16 (tipo tracción)", precio:16860 },
      { modelo:"NA20 MAX",   desc:"Niveladora – 2 Cubiertas 12.4x24", precio:23110 },
      { modelo:"NA30 MAX",   desc:"Niveladora – 2 Cubiertas 14.9x24", precio:30652 },
      { modelo:"3P2100",     desc:"Niveladora para Tres Puntos", precio:2625 },
      { modelo:"3P2100 MAX", desc:"Niveladora para Tres Puntos", precio:5345 },
      { modelo:"VG2500 Zanjadora", desc:"Constructora de Canales", precio:8332 },
      // RASTRAS DE DISCOS
      { modelo:"RTE 32000",  desc:"Rastra Tiro Excéntrico 8 Bancadas – Ejes partidos", precio:22668 },
      { modelo:"RTE 28000",  desc:"Rastra Tiro Excéntrico 8 Bancadas – Ejes partidos", precio:21589 },
      { modelo:"RTE 24000",  desc:"Rastra Tiro Excéntrico 6 Bancadas", precio:17137 },
      { modelo:"RTE 20000",  desc:"Rastra Tiro Excéntrico 6 Bancadas", precio:16258 },
      { modelo:"RTE 18000",  desc:"Rastra Tiro Excéntrico 6 Bancadas", precio:15813 },
      { modelo:"RTE 16000",  desc:"Rastra Tiro Excéntrico 6 Bancadas", precio:15400 },
      { modelo:"RTEP 40000", desc:"Rastra Pesada 12 Bancadas – Ejes partidos", precio:27260 },
      { modelo:"RTEP 36000", desc:"Rastra Pesada 12 Bancadas – Ejes partidos", precio:26180 },
      { modelo:"RTEP 32000", desc:"Rastra Pesada 8 Bancadas", precio:25100 },
      { modelo:"RTEP 28000", desc:"Rastra Pesada 8 Bancadas", precio:24021 },
      { modelo:"RTV 32000",  desc:"Rastra Tiro Excéntrico Vial 8 Bancadas", precio:25537 },
      { modelo:"RTV 28000",  desc:"Rastra Tiro Excéntrico Vial 8 Bancadas", precio:24608 },
      { modelo:"RTV 24000",  desc:"Rastra Tiro Excéntrico Vial 8 Bancadas", precio:23422 },
      { modelo:"RTV 20000",  desc:"Rastra Tiro Excéntrico Vial 8 Bancadas", precio:21860 },
      { modelo:"3pRTEL 22000",desc:"Rastra 3 Puntos 6 Bancadas – discos 22\"", precio:8025 },
      { modelo:"3pRTEL 20000",desc:"Rastra 3 Puntos 6 Bancadas – discos 22\"", precio:7550 },
      { modelo:"3pRTEL 18000",desc:"Rastra 3 Puntos 6 Bancadas – discos 22\"", precio:7010 },
      { modelo:"3pRTEL 16000",desc:"Rastra 3 Puntos 6 Bancadas – discos 22\"", precio:6535 },
      { modelo:"3pRTEL 14000",desc:"Rastra 3 Puntos 4 Bancadas – discos 22\"", precio:5456 },
      { modelo:"3pRTEL 12000",desc:"Rastra 3 Puntos 4 Bancadas – discos 22\"", precio:5107 },
      { modelo:"3pRTE 20000", desc:"Rastra Pesada 3 Puntos 6 Bancadas – discos 24\"", precio:9100 },
      { modelo:"3pRTE 18000", desc:"Rastra Pesada 3 Puntos 6 Bancadas – discos 24\"", precio:8600 },
      { modelo:"3pRTE 16000", desc:"Rastra Pesada 3 Puntos 6 Bancadas – discos 24\"", precio:7700 },
      { modelo:"3pRTE 14000", desc:"Rastra Pesada 3 Puntos 4 Bancadas – discos 24\"", precio:7200 },
      { modelo:"3pRTE 12000", desc:"Rastra Pesada 3 Puntos 4 Bancadas – discos 24\"", precio:6600 },
      { modelo:"RDV 44000",   desc:"Rastra Desencontrada 12 Bancadas – llantas 7.50x20", precio:29996 },
      { modelo:"RDV 40000",   desc:"Rastra Desencontrada 12 Bancadas – llantas 7.50x20", precio:28205 },
      { modelo:"RDV 36000",   desc:"Rastra Desencontrada 12 Bancadas – llantas 7.50x20", precio:27026 },
      { modelo:"RDV 32000",   desc:"Rastra Desencontrada 10 Bancadas – llantas 7.50x20", precio:25530 },
      { modelo:"RDVL 44000",  desc:"Rastra Desencontrada Liviana 12 Bancadas – llantas 7.50x20", precio:29300 },
      { modelo:"RDVL 40000",  desc:"Rastra Desencontrada Liviana 12 Bancadas – llantas 7.50x20", precio:27850 },
      { modelo:"RDVL 36000",  desc:"Rastra Desencontrada Liviana 12 Bancadas – llantas 7.50x20", precio:26700 },
      { modelo:"RDVL 32000",  desc:"Rastra Desencontrada Liviana 10 Bancadas – llantas 7.50x20", precio:25700 },
      { modelo:"RDVL 28000",  desc:"Rastra Desencontrada Liviana 10 Bancadas – llantas 7.50x20", precio:24700 },
      // ROLOS Y RODILLOS
      { modelo:"RLV 12-20",   desc:"Rolo Compactador Liso con Rascador", precio:16408 },
      { modelo:"R1L 21-15",   desc:"Rolo Compactador Liso – 6 llantas duales 8.25x22.5", precio:27604 },
      { modelo:"RTV 2200-1500",desc:"Rolo Desmalezador – llantas 8.25x22.5", precio:24000 },
      { modelo:"RTV 2200-1000",desc:"Rolo Desmalezador – llantas 8.25x22.5", precio:20212 },
      { modelo:"RCV 1500x1500",desc:"Rolo Pata de Cabra Simple con Rascador", precio:18165 },
      { modelo:"RCV 1200x2400",desc:"Rolo Pata de Cabra Doble con Rascador", precio:22125 },
      { modelo:"R1C21-12",    desc:"Rolo Pata de Cabra – 6 llantas duales 8.25x22.5", precio:28766 },
      { modelo:"RNV 13000",   desc:"Rodillo Neumático – Cubiertas 7.50x20", precio:35152 },
      { modelo:"RNV 11000",   desc:"Rodillo Neumático – Cubiertas 7.50x20", precio:32933 },
      { modelo:"RNV 9000",    desc:"Rodillo Neumático – Cubiertas 7.50x20", precio:29156 },
      // ACOPLADOS Y TANQUES
      { modelo:"Acoplado Playo 2Tn",  desc:"2,20x5,00x0,70m con Barandas", precio:5695 },
      { modelo:"Acoplado Playo 4Tn",  desc:"1,90x4,00x0,70m con Barandas", precio:7153 },
      { modelo:"Acoplado Playo 6Tn",  desc:"1,90x3,50x0,70m con Barandas", precio:11257 },
      { modelo:"Volcador 4Tn Trasero",desc:"2,20x4,00x0,70m – llantas 750x20", precio:14478 },
      { modelo:"Volcador 6Tn Trasero",desc:"2,20x4,50x0,70m – llantas 900x20", precio:18549 },
      { modelo:"Volcador 8Tn Trasero",desc:"2,20x4,50x0,70m – llantas 900x20", precio:20190 },
      { modelo:"Bilateral 18Tn",      desc:"Cubiertas 400-55-22,5", precio:49800 },
      { modelo:"Trivuelco 6Tn",       desc:"2,20x4,50x0,70m – llantas 900x20", precio:20880 },
      { modelo:"Trivuelco 8Tn",       desc:"2,20x4,50x0,70m – llantas 900x20", precio:24028 },
      { modelo:"Tanque T-6000 Chapa Acoplado", desc:"llantas 900x20", precio:13288 },
      { modelo:"Tanque T-8000 Chapa Acoplado", desc:"llantas 900x20", precio:16603 },
      { modelo:"Tanque T-10000 Chapa Acoplado",desc:"llantas 8.25x22.5", precio:22415 },
      { modelo:"Tanque T-6000FV Acoplado",     desc:"Fibra de Vidrio – llantas 900x20", precio:16290 },
      { modelo:"Tanque T-8000FV Acoplado",     desc:"Fibra de Vidrio – llantas 900x20", precio:19756 },
      { modelo:"Tanque T-10000FV Acoplado",    desc:"Fibra de Vidrio – llantas 8.25x22.5", precio:25385 },
      { modelo:"Tanque T-1500 Acoplado",       desc:"Rodado 6.50x16\"", precio:3270 },
      { modelo:"Tanque T-3000 Acoplado",       desc:"Rodado 6.50x16\"", precio:8104 },
      { modelo:"Tanque TC-3000 Combinado",     desc:"Rodado 6.50x16\"", precio:8299 },
      { modelo:"Tanque T-3500 Termo Formado",  desc:"Rodado 6.50x16\"", precio:9845 },
      { modelo:"VTR 20000 Regador+Joystick",   desc:"llantas 400-55-22.5", precio:42544 },
      { modelo:"VTR 20000",                    desc:"llantas 400/55-22.5", precio:25520 },
      { modelo:"VTR 6000 Regador Chapa",       desc:"llantas 900x20", precio:23105 },
      { modelo:"VTR 8000 Regador Chapa",       desc:"llantas 900x20", precio:24623 },
      { modelo:"VTR 10000 Regador Chapa",      desc:"llantas 8.25x22.5", precio:30185 },
      { modelo:"TRFV 6000 Regador FV",         desc:"Fibra Vidrio – llantas 900x20", precio:23778 },
      { modelo:"TRFV 8000 Regador FV",         desc:"Fibra Vidrio – llantas 900x20", precio:28494 },
      { modelo:"TRFV 10000 Regador FV",        desc:"Fibra Vidrio – llantas 8.25x22.5", precio:34334 },
      { modelo:"Tanque T-6000 Chapa Camión",   desc:"Para montar sobre camión", precio:8121 },
      { modelo:"Tanque T-8000 Chapa Camión",   desc:"Para montar sobre camión", precio:9602 },
      { modelo:"Tanque T-10000 Chapa Camión",  desc:"Para montar sobre camión", precio:11174 },
      { modelo:"Tanque T-6000 FV Camión",      desc:"Fibra de vidrio – sobre camión", precio:9438 },
      { modelo:"Tanque T-8000 FV Camión",      desc:"Fibra de vidrio – sobre camión", precio:10737 },
      { modelo:"Tanque T-10000 FV Camión",     desc:"Fibra de vidrio – sobre camión", precio:12472 },
      { modelo:"TAV6000 Atmosférico Acoplado", desc:"llantas 900x20", precio:27588 },
      { modelo:"TAV8000 Atmosférico Acoplado", desc:"llantas 900x20", precio:29351 },
      { modelo:"TAV10000 Atmosférico Acoplado",desc:"llantas 8.25x22.5", precio:31236 },
      { modelo:"TAV6000 Atmosférico Camión",   desc:"Para montar sobre camión", precio:24386 },
      { modelo:"TAV8000 Atmosférico Camión",   desc:"Para montar sobre camión", precio:25574 },
      { modelo:"TAV10000 Atmosférico Camión",  desc:"Para montar sobre camión", precio:27061 },
      { modelo:"Caja Volcadora 7m³ Camión",    desc:"2,40x4,50x0,60m", precio:17009 },
      { modelo:"Caja Trivuelco 7m³ Camión",    desc:"2,40x4,50x0,80m", precio:19245 },
      { modelo:"Trailer AT6000",               desc:"Balancín y Rampa 3,70x2,00m", precio:7787 },
      { modelo:"Trailer AT6010",               desc:"Balancín y Rampa 4,70x2,00m", precio:9094 },
      { modelo:"Vaquero ATH6000",              desc:"Con Cargador", precio:10380 },
      // GRANOS
      { modelo:"VG9000 Embolsadora",           desc:"Embolsadora de Granos Secos", precio:12286 },
      { modelo:"EG20000",  desc:"Elevador Chimango 20m – Tubo 220mm", precio:17793 },
      { modelo:"EG17000",  desc:"Elevador Chimango 17m – Tubo 220mm", precio:15156 },
      { modelo:"EG16000 T220",desc:"Elevador Chimango 16m – Tubo 220mm", precio:14406 },
      { modelo:"EG16000 T168",desc:"Elevador Chimango 16m – Tubo 168mm", precio:12031 },
      { modelo:"EG14000 T220",desc:"Elevador Chimango 14m – Tubo 220mm", precio:12987 },
      { modelo:"EG14000 T168",desc:"Elevador Chimango 14m – Tubo 168mm", precio:10768 },
      { modelo:"EG12000 T220",desc:"Elevador Chimango 12m – Tubo 220mm", precio:11753 },
      { modelo:"EG12000 T168",desc:"Elevador Chimango 12m – Tubo 168mm", precio:9834 },
      { modelo:"EG10000 T220",desc:"Elevador Chimango 10m – Tubo 220mm", precio:10913 },
      { modelo:"EG10000 T168",desc:"Elevador Chimango 10m – Tubo 168mm", precio:8999 },
      { modelo:"EG8000 T220", desc:"Elevador Chimango 8m – Tubo 220mm", precio:10234 },
      { modelo:"EG8000 T168", desc:"Elevador Chimango 8m – Tubo 168mm", precio:8376 },
      { modelo:"GH 2500 Grúa",desc:"Grúa Multifunción – Brazo Telescópico", precio:11914 },
    ]
  },
  // ─── SYRA ──────────────────────────────────────────────────
  { marca:"SYRA", lista:"N°49", vigencia:"jun-2026", moneda:"USD", conIVA:false,
    condiciones:"Contado: 20% dto. | 3 valores: 15% dto. | 6 valores: 10% dto. | 9 valores: 5% dto. | 12 valores: NETO. Valores s/IVA, sin cubiertas. TC dólar oficial BNA.",
    items:[
      { modelo:"Fertilizadora F1000 3P",                        desc:"1.000 lts – 3 Puntos – Alimentación por gravedad",                                precio:5740 },
      { modelo:"Fertilizadora F1500 3P",                        desc:"1.500 lts – 3 Puntos – Alimentación por gravedad",                                precio:6095 },
      { modelo:"Fertilizadora F2000 3P",                        desc:"2.000 lts – 3 Puntos – Alimentación por gravedad",                                precio:6450 },
      { modelo:"Fertilizadora F1500",                           desc:"1.500 lts – Llantas 11L16 – Alimentación por gravedad",                           precio:6967 },
      { modelo:"Fertilizadora F2000",                           desc:"2.000 lts – Llantas 11L16 – Alimentación por gravedad",                           precio:7075 },
      { modelo:"Fertilizadora F3000 Balancín",                  desc:"3.000 lts – Balancín trocha 1,60-2,10m – Alimentación por gravedad",              precio:11600 },
      { modelo:"Fertilizadora F4000 Balancín",                  desc:"4.000 lts – Balancín trocha 1,60-2,10m – Alimentación por gravedad",              precio:12360 },
      { modelo:"Intense Hidro 4TT 3P Epoxi",                    desc:"4.000 lts – 3 Puntos – Motores hidráulicos – Alimentación por gravedad",          precio:13215 },
      { modelo:"Intense Hidro 4TT Eje Rígido/Balancín Epoxi",   desc:"4.000 lts – Eje Rígido o Balancín – Motores hidráulicos",                         precio:16480 },
      { modelo:"Intense Hidro 4TT Arrocera Epoxi",              desc:"4.000 lts – Balancín direccional – Motores hidráulicos",                          precio:18210 },
      { modelo:"Intense Hidro 4TT Cinta 3P Epoxi",              desc:"4.000 lts – 3 Puntos – Alimentación por cinta",                                   precio:18400 },
      { modelo:"Intense Hidro 4TT Cinta Eje Rígido/Balancín",   desc:"4.000 lts – Eje Rígido o Balancín – Alimentación por cinta",                      precio:21850 },
      { modelo:"Intense Hidro 4TT Cinta Arrocera",              desc:"4.000 lts – Balancín direccional – Alimentación por cinta",                       precio:23600 },
      { modelo:"Motion 4500 SAE1010",                           desc:"4.500 lts – Alimentación por cinta – Acero SAE 1010",                             precio:28460 },
      { modelo:"Motion 4500 AISI304",                           desc:"4.500 lts – Alimentación por cinta – Acero AISI 304",                             precio:33384 },
      { modelo:"Motion 4500 Arrocera SAE1010",                  desc:"4.500 lts – Arrocera – Alimentación por cinta – SAE 1010",                        precio:32150 },
      { modelo:"Motion 4500 Arrocera AISI304",                  desc:"4.500 lts – Arrocera – Alimentación por cinta – AISI 304",                        precio:37070 },
      { modelo:"Motion 6000 SAE1010",                           desc:"6.000 lts – Alimentación por cinta – Acero SAE 1010",                             precio:29900 },
      { modelo:"Motion 6000 AISI304",                           desc:"6.000 lts – Alimentación por cinta – Acero AISI 304",                             precio:35170 },
      { modelo:"Motion 7500 SAE1010",                           desc:"7.500 lts – Alimentación por cinta – Acero SAE 1010",                             precio:33856 },
      { modelo:"Motion 7500 AISI304",                           desc:"7.500 lts – Alimentación por cinta – Acero AISI 304",                             precio:39260 },
      { modelo:"Motion 9000 SAE1010",                           desc:"9.000 lts – Alimentación por cinta – Acero SAE 1010",                             precio:35069 },
      { modelo:"Motion 9000 AISI304",                           desc:"9.000 lts – Alimentación por cinta – Acero AISI 304",                             precio:40800 },
      { modelo:"F1500 p/montar 3P",                             desc:"1.500 lts – 3 Puntos – Para montar sobre pulverizadora/camión",                   precio:7090 },
      { modelo:"F2000 p/montar 3P",                             desc:"2.000 lts – 3 Puntos – Para montar sobre pulverizadora/camión",                   precio:7465 },
      { modelo:"Intense 4000 p/montar Cinta Epoxi",             desc:"4.000 lts – Alimentación por cinta – Para montar – Tolva Epoxi",                  precio:18495 },
      { modelo:"Extreme 4250 p/montar Cinta INOX",              desc:"4.250 lts – Alimentación por cinta – Para montar – Tolva INOX",                   precio:28940 },
      { modelo:"ROW 6000 (12-70) + TIM 1 motor",                desc:"Ancho ±8,40m – 6.000 L – 12 surcos/70cm – Incorporadora + TIM incluido",         precio:62277 },
      { modelo:"ROW 6000 (16-52) + TIM 1 motor",                desc:"Ancho ±8,40m – 6.000 L – 16 surcos/52cm – Incorporadora + TIM incluido",         precio:68229 },
      { modelo:"ROW 6000 (24-35) + TIM 1 motor",                desc:"Ancho ±8,40m – 6.000 L – 24 surcos/35cm – Incorporadora + TIM incluido",         precio:78953 },
      { modelo:"ROW 6000 (33-26) + TIM 1 motor",                desc:"Ancho ±8,40m – 6.000 L – 33 surcos/26cm – Incorporadora + TIM incluido",         precio:92263 },
      { modelo:"ROW 8000 (17-70) + TIM 2 motores",              desc:"Ancho ±11,5m – 8.000 L – 17 surcos/70cm – Incorporadora + TIM incluido",         precio:112024 },
      { modelo:"ROW 8000 (22-52) + TIM 2 motores",              desc:"Ancho ±11,5m – 8.000 L – 22 surcos/52cm – Incorporadora + TIM incluido",         precio:119573 },
      { modelo:"ROW 8000 (33-35) + TIM 2 motores",              desc:"Ancho ±11,5m – 8.000 L – 33 surcos/35cm – Incorporadora + TIM incluido",         precio:136092 },
      { modelo:"ROW 8000 (43-26) + TIM 2 motores",              desc:"Ancho ±11,5m – 8.000 L – 43 surcos/26cm – Incorporadora + TIM incluido",         precio:152039 },
      { modelo:"ROW 10000 (21-70) + TIM 2 motores",             desc:"Ancho ±14m – 10.000 L – 21 surcos/70cm – Incorporadora + TIM incluido",          precio:123487 },
      { modelo:"ROW 10000 (28-52) + TIM 2 motores",             desc:"Ancho ±14m – 10.000 L – 28 surcos/52cm – Incorporadora + TIM incluido",          precio:133911 },
      { modelo:"ROW 10000 (41-35) + TIM 2 motores",             desc:"Ancho ±14m – 10.000 L – 41 surcos/35cm – Incorporadora + TIM incluido",          precio:154278 },
      { modelo:"ROW 10000 (55-26) + TIM 2 motores",             desc:"Ancho ±14m – 10.000 L – 55 surcos/26cm – Incorporadora + TIM incluido",          precio:176704 },
      { modelo:"Orgánica 6500 lts",                             desc:"4 Ton – Acarreador cadenas – Distribución bidisco – Llantas 12.5x18",             precio:20890 },
      { modelo:"Orgánica EA6000",                               desc:"6.000 lts – Rotores verticales – Llantas 400/60x15,5",                           precio:27000 },
      { modelo:"Orgánica EA8000",                               desc:"8.000 lts – Rotores verticales – Llantas 400/55x22,5",                           precio:34300,
        opcionales:[
          { id:"ea8000_cubiertas", label:"2 Cubiertas 400/55x22,5", precio:867000, cant:2, defecto:false }
        ]
      },
      { modelo:"Orgánica EA12000",                              desc:"12.000 lts – Rotores verticales – Llantas 550/60x22,5",                          precio:41600 },
      { modelo:"Orgánica EA18000",                              desc:"18.000 lts – Rotores verticales – Llantas 550/60x22,5",                          precio:61630 },
      { modelo:"Guinche Fijo 2000 kgs",                         desc:"Estructura tubular – Pluma extensible – Altura máxima gancho 6,8m",              precio:4953 },
      { modelo:"Guinche c/Mástil Giratorio 2000 kgs",           desc:"Estructura tubular – Pluma extensible – Mástil giratorio",                       precio:5320 },
      { modelo:"Unificador de andanas p/4m",                    desc:"Sistema horquillas con freno – Válvula reguladora hidráulica",                   precio:20700 },
      { modelo:"Unificador de andanas p/5m",                    desc:"Sistema horquillas con freno – Válvula reguladora hidráulica",                   precio:23960 }
    ]
  },

  // ─── CONESE ────────────────────────────────────────────
  { marca:"CONESE", lista:"N°96", vigencia:"23/10/2026", moneda:"Pesos", conIVA:false,
    condiciones:"Contado (0-30 dias): -15% dto. 5 valores mensuales (0-120 dias): -5% dto. 8 cuotas mensuales (0-210 dias): NETO.",
    items:[
      { modelo:"TA-2.0 Tanque 2.000 lts", desc:"2.000 lts, 2 ejes c/boca pasa-hombre - ll. simples 15 o 16", precio:9340000, cubiertasQty:true, selOpc:["bomba","cuentalitros","luces_com","luces_led"] },
      { modelo:"TA-3.0 Tanque 3.000 lts", desc:"3.000 lts, 2 ejes c/boca pasa-hombre - ll. simples 15 o 16", precio:10190000, cubiertasQty:true, selOpc:["bomba","cuentalitros","luces_com","luces_led"] },
      { modelo:"TCA3-2 Tanque 3.000 lts + Taller", desc:"3.000 lts + cajon herramientas + 2 bauleras 1m + Tanque FV FP 750 lts arriba - ll. duales 15-16 o simples 17", precio:18470000, cubiertasQty:true, selOpc:["bomba","cuentalitros","luces_com","luces_led"] },
      { modelo:"TCA4-2 Tanque 4.000 lts + Taller", desc:"4.000 lts + cajon herramientas + 2 bauleras + Tanque FV FP 1.000 lts arriba - ll. 8,25x22,5 o duales 16 o alta flotacion", precio:23510000, cubiertasQty:true, selOpc:["luces_com","luces_led"] },
      { modelo:"TCA5-2 Tanque 5.000 lts + Taller", desc:"5.000 lts + cajon herramientas + 2 bauleras 1,50m + Tanque FV FP 1.000 lts arriba - ll. 8,25x22,5 o duales 16 o alta flotacion", precio:26300000, cubiertasQty:true, selOpc:["luces_com","luces_led"], altaFlotacionQty:true },
      { modelo:"TCA6-2 Tanque 6.000 lts + Taller", desc:"6.000 lts + cajon herramientas + 2 bauleras 1,50m + Tanque FV FP 1.000 lts arriba - ll. 8,25x22,5 o duales 16 o alta flotacion", precio:28610000, cubiertasQty:true, selOpc:["luces_com","luces_led"], altaFlotacionQty:true },
      { modelo:"TT-1 Tanque 5.000 lts + Taller Rodante", desc:"5.000 lts + taller rodante + 2 tanques INOX 400 lts agua + bauleras - ll. duales 16 ctro gde o alta flotacion 400x60x15,1/2", precio:37280000,
        cubiertasQty:true, altaFlotacionQty:true
      },
      { modelo:"TT-2 Tanque 3.000 lts + Taller Rodante", desc:"3.000 lts + taller rodante + tanque INOX 500 lts agua + bauleras - ll. duales 16 ctro gde", precio:29820000,
        cubiertasQty:true, selOpc:["bomba","cuentalitros"]
      },
      { modelo:"TRD-2 Taller Dron", desc:"4,60m largo x 1,90 ancho x 1,80 alto - divisorio, 5 puertas c/amortiguador, escalera, terraza y barandas pleg. - ll. simples 15 o 16 - sin cubiertas - Mixer Alemor MM-CM 500 lts: consultar",
        precio:27670000,
        cubiertasQty:true,
        opcionales:[
          { id:"trd2_tanque_inox", label:"Tanque 1.100 lts Acero Inoxidable 304 L2B (c/soporte grupo + banco)", precio:4530000, defecto:false },
          { id:"trd2_tanque_plas", label:"Tanque 1.150 lts Plástico (c/soporte grupo + banco)", precio:2270000, defecto:false },
          { id:"trd2_aparejo",     label:"Aparejo eléctrico c/carro p/Dron", precio:1850000, defecto:false },
          { id:"trd2_tablero",     label:"Tablero eléctrico 220v c/reflectores, disyuntor, térmica, enchufes", precio:1580000, defecto:false }
        ]
      }
    ]
  },

  // ─── CHALERO ────────────────────────────────────────────
  { marca:"CHALERO", lista:"N°44.03", vigencia:"mar-2026", moneda:"USD", conIVA:false,
    condiciones:"Consultar condiciones de financiacion con el asesor. Precios FOB Chivilcoy, sin IVA.",
    items:[
      // RASTRA CH-2040 S VERTEBRADA
      { modelo:"Rastra CH-2040S 48x24 Vertebrada", desc:"48 Discos 24\" - Trte. 2,90 Mts. - 70/80 Kg/disco", precio:50644 },
      { modelo:"Rastra CH-2040S 48x26 Vertebrada", desc:"48 Discos 26\" - Trte. 2,90 Mts. - 70/80 Kg/disco", precio:51120 },
      { modelo:"Rastra CH-2040S 52x24 Vertebrada", desc:"52 Discos 24\" - Trte. 2,90 Mts. - 70/80 Kg/disco", precio:52951 },
      { modelo:"Rastra CH-2040S 52x26 Vertebrada", desc:"52 Discos 26\" - Trte. 2,90 Mts. - 70/80 Kg/disco", precio:53466 },
      { modelo:"Rastra CH-2040S 56x24 Vertebrada", desc:"56 Discos 24\" - Trte. 2,90 Mts. - 70/80 Kg/disco", precio:54488 },
      { modelo:"Rastra CH-2040S 56x26 Vertebrada", desc:"56 Discos 26\" - Trte. 2,90 Mts. - 70/80 Kg/disco", precio:55043 },
      { modelo:"Rastra CH-2040S 60x24 Vertebrada", desc:"60 Discos 24\" - Trte. 3,85 Mts. - 70/80 Kg/disco", precio:56028 },
      { modelo:"Rastra CH-2040S 60x26 Vertebrada", desc:"60 Discos 26\" - Trte. 3,85 Mts. - 70/80 Kg/disco", precio:56623 },
      { modelo:"Rastra CH-2040S 64x24 Vertebrada", desc:"64 Discos 24\" - Trte. 3,85 Mts. - 70/80 Kg/disco", precio:60124 },
      { modelo:"Rastra CH-2040S 64x26 Vertebrada", desc:"64 Discos 26\" - Trte. 3,85 Mts. - 70/80 Kg/disco", precio:60757 },
      { modelo:"Rastra CH-2040S 68x24 Vertebrada Abulonada", desc:"68 Discos 24\" - Trte. 3,85 Mts. - Abulonada - 70/80 Kg/disco", precio:63500 },
      { modelo:"Rastra CH-2040S 68x26 Vertebrada Abulonada", desc:"68 Discos 26\" - Trte. 3,85 Mts. - Abulonada - 70/80 Kg/disco", precio:64173 },
      { modelo:"Rastra CH-2040S 72x24 Vertebrada Abulonada", desc:"72 Discos 24\" - Trte. 3,85 Mts. - Abulonada - 70/80 Kg/disco", precio:66880 },
      { modelo:"Rastra CH-2040S 72x26 Vertebrada Abulonada", desc:"72 Discos 26\" - Trte. 3,85 Mts. - Abulonada - 70/80 Kg/disco", precio:67593 },
      { modelo:"Rastra CH-2040S 76x24 Vertebrada Abulonada", desc:"76 Discos 24\" - Trte. 3,85 Mts. - Abulonada - 70/80 Kg/disco", precio:70408 },
      { modelo:"Rastra CH-2040S 76x26 Vertebrada Abulonada", desc:"76 Discos 26\" - Trte. 3,85 Mts. - Abulonada - 70/80 Kg/disco", precio:71160 }
    ]
  },

  // ─── ZUIDBERG ──────────────────────────────────────────────
  { marca:"ZUIDBERG", lista:"2026", vigencia:"2026", moneda:"USD", conIVA:false,
    condiciones:"Consultar condiciones con el asesor. Flete incluido.",
    items:[
      { modelo:"Orugas", desc:"Kit de orugas para tractor", precio:135750 },
      { modelo:"3 Puntos delantero c/toma fuerza", desc:"Enganche 3 puntos delantero con toma de fuerza", precio:20995 }
    ]
  },

  // ─── YINENG ────────────────────────────────────────────────
  { marca:"YINENG", lista:"2026", vigencia:"2026", moneda:"USD", conIVA:true,
    condiciones:"Contado (0-30 días): -12%. Valores (0-120 días): precio lista. Valores (0-330 días): +10%.",
    items:[
      { modelo:"YN935G", desc:"Cargadora frontal", precio:75140 },
      { modelo:"YN938G", desc:"Cargadora frontal", precio:78455 },
      { modelo:"YN928D", desc:"Cargadora frontal", precio:37570 },
      { modelo:"YN930D", desc:"Cargadora frontal", precio:44200 },
      { modelo:"YN958G", desc:"Cargadora frontal 5 tn – balde 3 m3", precio:121550 },
      { modelo:"YN928EN", desc:"Cargadora frontal", precio:30940 },
      { modelo:"YN936EN", desc:"Cargadora frontal", precio:35360 },
      { modelo:"YN9358G", desc:"Cargadora frontal", precio:91297 },
      { modelo:"YN939EN", desc:"Cargadora frontal", precio:39780 },
      { modelo:"WZ30-25", desc:"Retropala", precio:81000 }
    ]
  },

  // ─── TEU ────────────────────────────────────────────────────
  { marca:"TEU", lista:"2026", vigencia:"2026", moneda:"USD", conIVA:true,
    condiciones:"Contado (0-30 días): -12%. Valores (0-120 días): precio lista. Valores (0-330 días): +10%.",
    items:[
      { modelo:"FD25T", desc:"Autoelevador", precio:24500 },
      { modelo:"FR4WD35", desc:"Autoelevador 4x4", precio:43568 }
    ]
  },

  // ─── LUTONG ─────────────────────────────────────────────────
  { marca:"LUTONG", lista:"2026", vigencia:"2026", moneda:"USD", conIVA:true,
    condiciones:"Contado (0-30 días): -12%. Valores (0-120 días): precio lista. Valores (0-330 días): +10%.",
    items:[
      { modelo:"PY165C", desc:"Motoniveladora", precio:180000 }
    ]
  },

  // ─── NEW HOLLAND ────────────────────────────────────────────
  { marca:"NEW HOLLAND", lista:"03-2026", vigencia:"26/08/2026", moneda:"USD", conIVA:false,
    esNH:true,
    condiciones:"Consultar condiciones con el asesor.",
    items:[
      { modelo:"TT3.50/2", desc:"Tractor TT3.50 2WD", precio:28300 },
      { modelo:"TT3.50/4", desc:"Tractor TT3.50 4WD", precio:31900 },
      { modelo:"TK4.90N", desc:"Tractor TK4.90N Estrecho c/orugas goma 300mm", precio:101200 },
      { modelo:"TK4.100N", desc:"Tractor TK4.100N Estrecho c/orugas goma 300mm", precio:106500 },
      { modelo:"T4.85V/4R", desc:"Tractor T4.85V Viñatero 4WD Plataformado 360/70R24", precio:82400 },
      { modelo:"T4.85V/4C", desc:"Tractor T4.85V Viñatero 4WD Cabina 12.4R24", precio:92000 },
      { modelo:"T4.85F/4R", desc:"Tractor T4.85F Frutero 4WD Plataformado 380/70R28", precio:83000 },
      { modelo:"T4.105F/4C", desc:"Tractor T4.105F Frutero 4WD Cabina 380/70R28", precio:111000 },
      { modelo:"TT4.55/2", desc:"Tractor TT4.55 2WD Plataformado", precio:31800 },
      { modelo:"TT4.55/4", desc:"Tractor TT4.55 4WD Plataformado", precio:38300 },
      { modelo:"TT4.65/2", desc:"Tractor TT4.65 2WD Plataformado", precio:37000 },
      { modelo:"TT4.65/2-18", desc:"Tractor TT4.65 2WD Plataformado 18.4-30", precio:41000 },
      { modelo:"TT4.65/4", desc:"Tractor TT4.65 4WD Plataformado", precio:43500 },
      { modelo:"TT4.65/4-18", desc:"Tractor TT4.65 4WD Plataformado 18.4-30", precio:48400 },
      { modelo:"TT4.75/2", desc:"Tractor TT4.75 2WD Plataformado", precio:42300 },
      { modelo:"TT4.75/2-18", desc:"Tractor TT4.75 2WD Plataformado 18.4-30", precio:48600 },
      { modelo:"TT4.75/4", desc:"Tractor TT4.75 4WD", precio:48800 },
      { modelo:"TT4.75/4-18", desc:"Tractor TT4.75 4WD Plataformado 18.4-30", precio:56000 },
      { modelo:"TT4.90/4M", desc:"Tractor TT4.90 4WD Plataformado Inversor Mecánico", precio:68400 },
      { modelo:"TT4.90/4", desc:"Tractor TT4.90 4WD Plataformado", precio:63100 },
      { modelo:"TT.75F/4R", desc:"Tractor TT.75F 4WD Plataformado", precio:54200 },
      { modelo:"TD4.75F/4", desc:"Tractor TD4.75F 4WD Plataformado", precio:61200 },
      { modelo:"TD4.85F/4", desc:"Tractor TD4.85F 4WD Plataformado", precio:68400 },
      { modelo:"TD95/4", desc:"Tractor TD95 4WD Cabina", precio:87200 },
      { modelo:"T5.90S", desc:"Tractor T5.90S 4WD Cabinado 16x16 SPS contrapeso 10x40KG", precio:110300 },
      { modelo:"T5.90S/SC", desc:"Tractor T5.90S 4WD Cabinado 16x16 SPS contrapeso 6x40KG", precio:109900 },
      { modelo:"T5.100S", desc:"Tractor T5.100S 4WD Cabinado 16x16 SPS contrapeso 10x40KG", precio:116000 },
      { modelo:"T5.100S/SC", desc:"Tractor T5.100S 4WD Cabinado 16x16 SPS contrapeso 6x40KG", precio:115600 },
      { modelo:"T5.110S", desc:"Tractor T5.110S 4WD Cabinado 16x16 SPS contrapeso 10x40KG", precio:121600 },
      { modelo:"T5.110S/SC", desc:"Tractor T5.110S 4WD Cabinado 16x16 SPS contrapeso 6x40KG", precio:121200 },
      { modelo:"TL5.90", desc:"Tractor TL5.90 Cabinado 4x4", precio:95000 },
      { modelo:"TL5.100M", desc:"Tractor TL5.100 Cabinado 4x4 Mecánico", precio:101000 },
      { modelo:"TL5.100", desc:"Tractor TL5.100 Cabinado 4x4 Power Shuttle", precio:105800 },
      { modelo:"TL5.100PL", desc:"Tractor TL5.100 Cabinado 4x4 Power Shuttle c/Pala Frontal", precio:125800 },
      { modelo:"TR 8030", desc:"Tractor 8030 Rops", precio:93300 },
      { modelo:"T6.130/4R", desc:"Tractor T6.130 Plataformado 4WD 16x8 Inversor Hidráulico c/Telemetría", precio:118100 },
      { modelo:"T6.130/4C", desc:"Tractor T6.130 Cabinado 4WD 16x8 Inversor Hidráulico c/Telemetría", precio:132500 },
      { modelo:"T6.130/4CD", desc:"Tractor T6.130 Cabinado 4WD 16x8 Inversor Hidráulico c/Telemetría DUAL", precio:135400 },
      { modelo:"T7.190A/4CT", desc:"Tractor T7.190 SPS 18x6 Sin Levante Single 710/65-38 c/Telemetría", precio:162300 },
      { modelo:"T7.190A/4CDT", desc:"Tractor T7.190 SPS 18x6 Sin Levante Dual 20.8x38 c/Telemetría", precio:167800 },
      { modelo:"T7.190A/4CLT", desc:"Tractor T7.190 SPS 18x6 Con Levante Single 710/65-38 c/Telemetría", precio:166600 },
      { modelo:"T7.190A/4CLDT", desc:"Tractor T7.190 SPS 18x6 Con Levante Dual 20.8x38 c/Telemetría", precio:172100 },
      { modelo:"T7.190A/4CPAT", desc:"Tractor T7.190 SPS 18x6 Sin Levante Single c/Piloto Automático c/Telemetría", precio:177700 },
      { modelo:"T7.190A/4CDPAT", desc:"Tractor T7.190 SPS 18x6 Sin Levante Dual c/Piloto Automático c/Telemetría", precio:183200 },
      { modelo:"T7.190A/4CLPAT", desc:"Tractor T7.190 SPS 18x6 Con Levante Single c/Piloto Automático c/Telemetría", precio:182000 },
      { modelo:"T7.190A/4CLDPAT", desc:"Tractor T7.190 SPS 18x6 Con Levante Dual c/Piloto Automático c/Telemetría", precio:187500 },
      { modelo:"T7.195A/4CT", desc:"Tractor T7.195 SPS 18x6 Sin Levante Single 710/65-38 c/Telemetría", precio:174500 },
      { modelo:"T7.195A/4CDT", desc:"Tractor T7.195 SPS 18x6 Sin Levante Dual 20.8x38 c/Telemetría", precio:180000 },
      { modelo:"T7.195A/4CLT", desc:"Tractor T7.195 SPS 18x6 Con Levante Single 710/65-38 c/Telemetría", precio:178800 },
      { modelo:"T7.195A/4CLDT", desc:"Tractor T7.195 SPS 18x6 Con Levante Dual 20.8x38 c/Telemetría", precio:184300 },
      { modelo:"T7.195A/4CPAT", desc:"Tractor T7.195 SPS 18x6 Sin Levante Single c/Piloto Automático c/Telemetría", precio:189900 },
      { modelo:"T7.195A/4CDPAT", desc:"Tractor T7.195 SPS 18x6 Sin Levante Dual c/Piloto Automático c/Telemetría", precio:195400 },
      { modelo:"T7.195A/4CLPAT", desc:"Tractor T7.195 SPS 18x6 Con Levante Single c/Piloto Automático c/Telemetría", precio:194200 },
      { modelo:"T7.195A/4CLDPAT", desc:"Tractor T7.195 SPS 18x6 Con Levante Dual c/Piloto Automático c/Telemetría", precio:199700 },
      { modelo:"T7.205A/4CT", desc:"Tractor T7.205 SPS 18x6 Sin Levante Single 710/65-38 c/Telemetría", precio:185900 },
      { modelo:"T7.205A/4CDT", desc:"Tractor T7.205 SPS 18x6 Sin Levante Dual 20.8x38 c/Telemetría", precio:191400 },
      { modelo:"T7.205A/4CLT", desc:"Tractor T7.205 SPS 18x6 Con Levante Single 710/65-38 c/Telemetría", precio:190200 },
      { modelo:"T7.205A/4CLDT", desc:"Tractor T7.205 SPS 18x6 Con Levante Dual 20.8x38 c/Telemetría", precio:195700 },
      { modelo:"T7.205A/4CPAT", desc:"Tractor T7.205 SPS 18x6 Sin Levante Single c/Piloto Automático c/Telemetría", precio:201300 },
      { modelo:"T7.205A/4CDPAT", desc:"Tractor T7.205 SPS 18x6 Sin Levante Dual c/Piloto Automático c/Telemetría", precio:206800 },
      { modelo:"T7.205A/4CLPAT", desc:"Tractor T7.205 SPS 18x6 Con Levante Single c/Piloto Automático c/Telemetría", precio:205600 },
      { modelo:"T7.205A/4CLDPAT", desc:"Tractor T7.205 SPS 18x6 Con Levante Dual c/Piloto Automático c/Telemetría", precio:211100 },
      { modelo:"T7.215/4CDT", desc:"Tractor T7.215 Sin Levante Dual 520/85 R42", precio:213300 },
      { modelo:"T7.215/4CDLT", desc:"Tractor T7.215 Con Levante Dual 520/85 R42", precio:218300 },
      { modelo:"T7.215/4CT", desc:"Tractor T7.215 Sin Levante Single 710/70 R38", precio:208700 },
      { modelo:"T7.215/4CLT", desc:"Tractor T7.215 Con Levante Single 710/70 R38", precio:213700 },
      { modelo:"T7.240/4CDT", desc:"Tractor T7.240 Sin Levante Dual 520/85 R42", precio:225400 },
      { modelo:"T7.240/4CDLT", desc:"Tractor T7.240 Con Levante Dual 520/85 R42", precio:230400 },
      { modelo:"T7.240/4CT", desc:"Tractor T7.240 Sin Levante Single 710/70 R38", precio:220800 },
      { modelo:"T7.240/4CLT", desc:"Tractor T7.240 Con Levante Single 710/70 R38", precio:225800 },
      { modelo:"T7.245/4CDT", desc:"Tractor T7.245 Sin Levante Dual 520/85 R42", precio:236200 },
      { modelo:"T7.245/4CDLT", desc:"Tractor T7.245 Con Levante Dual 520/85 R42", precio:241200 },
      { modelo:"T7.245/4CT", desc:"Tractor T7.245 Sin Levante Single 710/70 R38", precio:231600 },
      { modelo:"T7.245/4CLT", desc:"Tractor T7.245 Con Levante Single 710/70 R38", precio:236600 },
      { modelo:"T7.260/4CDT", desc:"Tractor T7.260 Sin Levante Dual 520/85 R42", precio:248800 },
      { modelo:"T7.260/4CDLT", desc:"Tractor T7.260 Con Levante Dual 520/85 R42", precio:253800 },
      { modelo:"T7.260/4CT", desc:"Tractor T7.260 Sin Levante Single 710/70 R38", precio:244200 },
      { modelo:"T7.260/4CLT", desc:"Tractor T7.260 Con Levante Single 710/70 R38", precio:249200 },
      { modelo:"T8.320/STD", desc:"Tractor T8.320 Sin Levante DUAL 710/70 R42 R1W", precio:337400 },
      { modelo:"T8.350/STD", desc:"Tractor T8.350 Sin Levante DUAL 710/70 R42 R1W", precio:366700 },
      { modelo:"T8.350/LEV", desc:"Tractor T8.350 Con Levante DUAL 710/70 R42 R1W", precio:371900 },
      { modelo:"T8.380/STD", desc:"Tractor T8.380 Sin Levante DUAL 710/70 R42 R1W", precio:399500 },
      { modelo:"T8.380/LEV", desc:"Tractor T8.380 Con Levante DUAL 710/70 R42 R1W", precio:404700 },
      { modelo:"T8.410/STD", desc:"Tractor T8.410 Sin Levante DUAL 800/70 R38 R1W", precio:423500 },
      { modelo:"T8.410/LEV", desc:"Tractor T8.410 Con Levante DUAL 800/70 R38 R1W", precio:431000 },
      { modelo:"T8.430/STD", desc:"Tractor T8.430 Sin Levante DUAL 800/70 R38 R1W", precio:447900 },
      { modelo:"T8.430/LEV", desc:"Tractor T8.430 Con Levante DUAL 800/70 R38 R1W", precio:455400 },
      { modelo:"T8.440/STD", desc:"Tractor T8.440 Sin Levante DUAL 800/70 R38 R1W", precio:475600 },
      { modelo:"T8.440/LEV", desc:"Tractor T8.440 Con Levante DUAL 800/70 R38 R1W", precio:483100 },
      { modelo:"TX 5.90", desc:"Cosechadora TX 5.90 STD 20.8/38 R1 DUAL", precio:296000 },
      { modelo:"TX 5.90/4T", desc:"Cosechadora TX 5.90 STD 4WD 20.8/38 R1 DUAL", precio:309600 },
      { modelo:"TX 5.90 Arroz/1D", desc:"Cosechadora TX 5.90 Arrocera 20.8/38 R2 DUAL", precio:360000 },
      { modelo:"CR5.85/2T", desc:"Cosechadora CR5.85 2WD 900/60 R32 c/Telemetría", precio:408600 },
      { modelo:"CR6.80/2PAT", desc:"Cosechadora CR6.80 2WD 900/60 R32 c/Piloto Automático c/Telemetría", precio:528000 },
      { modelo:"CR6.80/2DPAT", desc:"Cosechadora CR6.80 2WD 520/85 R42 Dual c/Piloto Automático c/Telemetría", precio:544600 },
      { modelo:"CR6.80/4DPAT", desc:"Cosechadora CR6.80 4WD 520/85 R42 Dual c/Piloto Automático c/Telemetría", precio:571800 },
      { modelo:"CR7.90/2 Intellisense", desc:"Cosechadora CR7.90 Intellisense 2WD 900/60 R32", precio:661700 },
      { modelo:"CR7.90/2D Intellisense", desc:"Cosechadora CR7.90 Intellisense 2WD 620/70 R42 Dual", precio:677300 },
      { modelo:"CR7.90/4D Intellisense", desc:"Cosechadora CR7.90 Intellisense 4WD 620/70 R42 Dual", precio:703700 },
      { modelo:"CR7.90 Arroz/2SI", desc:"Cosechadora CR7.90 Sin Intellisense Arrocera 520/85R42 Dual", precio:718500 },
      { modelo:"CR7.90 Arroz/2CI", desc:"Cosechadora CR7.90 Intellisense Arrocera 520/85R42 Dual", precio:754500 },
      { modelo:"CR8.90/2D Intellisense", desc:"Cosechadora CR8.90 Intellisense 2WD 620/70 R42 Dual", precio:800600 },
      { modelo:"CR8.90/4D Intellisense", desc:"Cosechadora CR8.90 Intellisense 4WD 620/70 R42 Dual", precio:827100 },
      { modelo:"CR9.90/4D Intellisense", desc:"Cosechadora CR9.90 Intellisense 4WD 620/70 R42 Dual", precio:895400 },
      { modelo:"CR6/2WD sin Intel Single", desc:"Cosechadora CR6 sin Intellisense 2WD 900/60 R1 Single", precio:559700 },
      { modelo:"CR6/2WD sin Intel Dual", desc:"Cosechadora CR6 sin Intellisense 2WD 520/85 R42 Dual", precio:575000 },
      { modelo:"CR6/4WD sin Intel Dual", desc:"Cosechadora CR6 sin Intellisense 4WD 520/85 R42 Dual", precio:602200 },
      { modelo:"CR6/4WD Intel Dual", desc:"Cosechadora CR6 Intellisense 4WD 520/85 R42 Dual", precio:627500 },
      { modelo:"CR7/2WD sin Intel Dual", desc:"Cosechadora CR7 sin Intellisense 2WD 620/70 R42 Dual", precio:620500 },
      { modelo:"CR7/4WD sin Intel Dual", desc:"Cosechadora CR7 sin Intellisense 4WD 620/70 R42 Dual", precio:647700 },
      { modelo:"CR7/4WD Intel Dual", desc:"Cosechadora CR7 Intellisense 4WD 620/70 R42 Dual", precio:673000 },
      { modelo:"CR7+/2WD Intel Dual", desc:"Cosechadora CR7+ Intellisense 2WD 620/70 R42 Dual", precio:690800 },
      { modelo:"CR7+/4WD Intel Dual", desc:"Cosechadora CR7+ Intellisense 4WD 620/70 R42 Dual", precio:717900 },
      { modelo:"CR8/4WD Intel Dual", desc:"Cosechadora CR8 Intellisense 4WD 620/70 R42 Dual", precio:847800 },
      { modelo:"CR9/4WD Intel Dual", desc:"Cosechadora CR9 Intellisense 4WD 620/70 R42 Dual", precio:907000 },
      { modelo:"CR10/4WD Intel Dual", desc:"Cosechadora CR10 Intellisense 4WD 620/70 R42 Dual", precio:995500 },
      { modelo:"CR11/4WD Intel Dual", desc:"Cosechadora CR11 Intellisense 4WD 710/70 R42 Dual", precio:1258700 },
      { modelo:"CAB30F", desc:"Cabezal SuperFlex 30 pies para CR", precio:87600 },
      { modelo:"CAB35F", desc:"Cabezal SuperFlex 35 pies para CR", precio:97000 },
      { modelo:"CAB35/DRAPER", desc:"Cabezal 35 pies DRAPER", precio:171700 },
      { modelo:"CAB40/DRAPER", desc:"Cabezal 40 pies DRAPER", precio:178500 },
      { modelo:"CAB45/DRAPER", desc:"Cabezal 45 pies DRAPER sin carro", precio:193200 },
      { modelo:"CAB60/DRAPER", desc:"Cabezal Mc Don 60 pies DRAPER", precio:315000 },
      { modelo:"9070L", desc:"Vendimiadora 9070L - UVA", precio:543900 },
      { modelo:"1090X", desc:"Vendimiadora 1090X - OLIVE", precio:645000 },
      { modelo:"RB460C", desc:"Rotoenfardadora RB 460C", precio:115000 },
      { modelo:"RB461C", desc:"Rotoenfardadora RB 461C", precio:123800 },
      { modelo:"RB125C", desc:"RB125 Combi", precio:196800 },
      { modelo:"313RNH", desc:"Segadora de arrastre 313", precio:99500 },
      { modelo:"SR200", desc:"Segadora autopropulsada SR200", precio:252700 },
      { modelo:"DB16RU", desc:"Cabezal DB16RU de discos para segadora SR200", precio:75400 },
      { modelo:"HS016R", desc:"Cabezal HS016R corte alternativo para segadora SR200", precio:57600 },
      { modelo:"MC860P", desc:"Megacutter 860P", precio:88000 },
      { modelo:"F320P", desc:"Disccutter 320P", precio:51000 },
      { modelo:"FR650/2", desc:"Picadora de forrajes FR650", precio:716100 },
      { modelo:"75BFI", desc:"Cabezal 75BFI de discos para corte en hileras para FR", precio:198400 },
      { modelo:"380FP", desc:"Cabezal 380 recolectores de pastura para FR", precio:55700 },
      { modelo:"300FP", desc:"Cabezal 300 recolectores de pastura para FR", precio:44000 },
      { modelo:"320FP", desc:"Cabezal 320 recolectores de pastura para FR", precio:43000 },
      { modelo:"BB1290 Eje Single", desc:"Enfardadora BB 1290 Eje Single", precio:328600 },
      { modelo:"DM419P", desc:"MERGER 419", precio:27600 },
      { modelo:"DEFENSOR SP3000", desc:"Pulverizador DEFENSOR SP3000 4WD 36.6M 320/90 R42 c/Telemetría NEF6", precio:408500 },
      { modelo:"DEFENSOR 4000 STD", desc:"Pulverizador DEFENSOR 4000 36M 380/90 R46", precio:425600 },
      { modelo:"DEFENSOR 4000 INT", desc:"Pulverizador DEFENSOR 4000 36M INT 380/90 R46", precio:468600 },
      { modelo:"DEFENSOR 4000 AIM", desc:"Pulverizador DEFENSOR 4000 36M AIM 380/90 R46 c/Inyección Directa", precio:493600 },
      { modelo:"DRON-BASIC",          desc:"Dron P150 Kit Básico (Control Inteligente + Mapeo Preciso + Energía Autónoma + Recarga Rápida)", precio:29390, conIVA:true, esDron:true },
      { modelo:"DRON-BASIC-REVOCAST", desc:"Dron P150 Kit Básico + Sistema Revocast (aplicación de sólidos, siembras y fertilización al voleo)", precio:31600, conIVA:true, esDron:true },
      { modelo:"DRON-FULL",           desc:"Dron P150 Kit Full (+ Sistema Revocast + Conectividad DL1 + Mapeo RTK + Energía Infinita)", precio:33700, conIVA:true, esDron:true }
    ]
  },

  // ─── EL PAMPA ───────────────────────────────────────────────
  { marca:"EL PAMPA", lista:"N°138", vigencia:"mar-2026", moneda:"Pesos", conIVA:true,
    condiciones:"Contado (0-30 días): 10% dto. | Precio lista (0-150 días): NETO. Precios c/IVA.",
    items:[
      { modelo:"Rolo Hidráulico 3c 5,0m", desc:"3 cuerpos – ancho labor 5,0m – Duales – transporte 3,00m", precio:9388000 },
      { modelo:"Rolo Hidráulico 3c 5,5m", desc:"3 cuerpos – ancho labor 5,5m – Duales – transporte 3,00m", precio:9730000 },
      { modelo:"Rolo Hidráulico 3c 6,0m", desc:"3 cuerpos – ancho labor 6,0m – Duales – transporte 3,00m", precio:10075000 },
      { modelo:"Rolo Hidráulico 3c 6,5m", desc:"3 cuerpos – ancho labor 6,5m – Duales – transporte 3,00m", precio:10647000 },
      { modelo:"Rolo Hidráulico 3c 7,0m", desc:"3 cuerpos – ancho labor 7,0m – Duales – transporte 3,00m", precio:11105000 },
      { modelo:"Rolo Hidráulico 3c 7,5m", desc:"3 cuerpos – ancho labor 7,5m – Duales – transporte 3,00m", precio:13395000 },
      { modelo:"Rolo Hidráulico 3c 8,0m", desc:"3 cuerpos – ancho labor 8,0m – Duales – transporte 3,00m", precio:14768000 },
      { modelo:"Rolo Hidráulico 3c 8,5m", desc:"3 cuerpos – ancho labor 8,5m – Duales – transporte 3,00m", precio:15570000 },
      { modelo:"Rolo Hidráulico 3c 9,0m", desc:"3 cuerpos – ancho labor 9,0m – Duales – transporte 4,00m", precio:16715000 },
      { modelo:"Rolo Hidráulico 3c 9,5m", desc:"3 cuerpos – ancho labor 9,5m – Duales – transporte 4,00m", precio:16943000 },
      { modelo:"Rolo Hidráulico 3c 10,0m", desc:"3 cuerpos – ancho labor 10,0m – Duales – transporte 4,00m", precio:17745000 },
      { modelo:"Culminación de Labranza 6m", desc:"Ancho labor 6m – rolo 53cm – 4 llantas 16'' – peines 3 hileras – enganche trasero", precio:21180000 },
      { modelo:"Culminación de Labranza 6,5m", desc:"Ancho labor 6,5m – rolo 53cm – 4 llantas 16'' – peines 3 hileras – enganche trasero", precio:21405000 },
      { modelo:"Culminación de Labranza 7m", desc:"Ancho labor 7m – rolo 53cm – 4 llantas 16'' – peines 3 hileras – enganche trasero", precio:22670000 },
      { modelo:"Culminación de Labranza 7,5m", desc:"Ancho labor 7,5m – rolo 53cm – 4 llantas 16'' – peines 3 hileras – enganche trasero", precio:23925000 },
      { modelo:"Culminación de Labranza 8m", desc:"Ancho labor 8m – rolo 53cm – 4 llantas 16'' – peines 3 hileras – enganche trasero", precio:24270000 },
      { modelo:"Culminación de Labranza 8,5m", desc:"Ancho labor 8,5m – rolo 53cm – 4 llantas 16'' – peines 3 hileras – enganche trasero", precio:25758000 },
      { modelo:"Culminación de Labranza 9m", desc:"Ancho labor 9m – rolo 53cm – 4 llantas 16'' – peines 3 hileras – enganche trasero", precio:27360000 }
    ]
  },

  // ─── USADOS BERGER ────────────────────────────────────────
  { marca:"USADOS BERGER", lista:"L3-2026", vigencia:"ago-2026", moneda:"USD", conIVA:true,
    condiciones:"Consultar condiciones de financiación con el asesor.",
    esUsado:true,
    items:[
      { modelo:"EXTRACTORA TECNOCAR EC150", desc:"Ex: OLGUIN AGUSTIN", precio:9000 },
      { modelo:"TOLVA AUTODESCARGABLE AGROMEC 8/10 TN SIN BALANZA", desc:"", precio:10000 },
      { modelo:"TOLVA AUTODESCARGABLE CESTARI 19.000", desc:"Ex: SANCHEZ MARIA", precio:17000 },
      { modelo:"SEMBRADORA JUBER 4600 DE 23-21", desc:"Ex: SUCESION DE OCAMPO", precio:40000 },
      { modelo:"SEMBRADORA JOHN DEERE 2117 DE 11 A 70", desc:"Ex: SAPUCAI", precio:60000 },
      { modelo:"SEMBRADORA GHERARDI G300 DE 14 A 52", desc:"Ex: BAIER OMAR", precio:70000 },
      { modelo:"SEMBRADORA CRUCIANELLI 10 A 70", desc:"Ex: YURK CARLOS en Consignacion", precio:40000 },
      { modelo:"SEMBRADORA MARCA SCHIARRE 24 DISCOS, CON RUEDA DE FIERRO", desc:"", precio:1000 },
      { modelo:"SEMBRADORA CELE 37 A 17,5", desc:"Ex: MONTANI AGROPECUARIA", precio:51600 },
      { modelo:"SEMBRADORA APACHE 18000 AD 43/17.5", desc:"Ex: CAYZAC CARLOS", precio:33150 },
      { modelo:"SEMBRADORA GHERARDII G-100 (EX VARROTI JOSE LUIS) 25 a 17.5", desc:"", precio:15000 },
      { modelo:"SEMBRADORA CELE GF ACTIVA II 37-17,5 - kit 10 a 52  - mecánica - alflafero", desc:"Ex: CONSIG ARVIAL C", precio:75000 },
      { modelo:"SEMBRADORA GHERARDI G-600 DE 47 A 21", desc:"Ex: EYRS Y ROTH OSVALDO", precio:130000 },
      { modelo:"SEMBRADORA AGROMETAL TX MEGA 23-35", desc:"Ex: VESCOVO SH", precio:40750 },
      { modelo:"SEMBRADORA AGROMETAL TX MEGA 16 A 52", desc:"Ex: AGROSERVICIOS LA PORO", precio:60000 },
      { modelo:"SEMBRADORA AGROMETAL DE 13 A 52", desc:"Ex: BIDART ADRIAN", precio:55000 },
      { modelo:"SEMBRADORA CRUACIANELLI PIONERA DE 34-21 KIT 14,52 (EX ALONSO IS", desc:"", precio:90000 },
      { modelo:"SEMBRADORA CELE ACTIVA II DE 37 A 17,5", desc:"Ex: RODRIGUEZ JOSE ALBERTO", precio:58000 },
      { modelo:"SEMBRADORA AGROMETAL MXY II 33-21 (EX BASTARD SH) año 2012", desc:"", precio:59728 },
      { modelo:"PALA FRONTAL CEIBO P/ PAUNY", desc:"Ex: ARRIGONE ROBERTO", precio:6000 },
      { modelo:"RICHIGER EMBOLSADORA R5", desc:"Ex: LA RIOJANA", precio:5000 },
      { modelo:"RICHIGER EMBOLSADORA QUEBRADORA 5 PIES EGH 97", desc:"Ex: USADA", precio:4000 },
      { modelo:"RICHIGER EMB/QUEB. MODELO EGH 97 5 PIES", desc:"Ex: SORBA", precio:7300 },
      { modelo:"RASTRA CON CAJON SEMBRADOR JOHN DEERE", desc:"Ex: VIEJA CHICA", precio:500 },
      { modelo:"EMBOLSADORA RICHIGER R6-E 6 PIES", desc:"Ex: RAMOS HUGO", precio:8800 },
      { modelo:"RACIONADOR MAINERO CD8", desc:"Ex: COMETTO ROBERTO", precio:3000 },
      { modelo:"QUEBRADORA EMBOLSADORA AGRO AR EQG96 5PIES", desc:"Ex: DE LA MANO SER", precio:3000 },
      { modelo:"QUEBRADORA ELECTRICA CARPIL USADA", desc:"", precio:3000 },
      { modelo:"PALA NIVELADORA AKRON HD510", desc:"Ex: GAIARA DANIEL", precio:28000 },
      { modelo:"MIXER HORIZONTAL MAINERO 2810  CAP 6M3", desc:"Ex: EL BROQUEL", precio:13000 },
      { modelo:"MIXER HORIZONTAL COMOFRA DE 10M3 (EX TAMBOS Y CABAÑAS LAS 4 MARI", desc:"", precio:22000 },
      { modelo:"MIXER COMOFRA 6M3", desc:"Ex: LA RIOJANA", precio:8500 },
      { modelo:"MIXER VERTICAL TEDESCHI 9M3", desc:"Ex: ORDINAS MARCOS", precio:7000 },
      { modelo:"FERTILIZADORA YOMEL RD3036 Z", desc:"Ex: AGROPECUARIA LA CRIOLLA", precio:12000 },
      { modelo:"MIXER VERTICAL MONTECOR 25M3", desc:"Ex: GAIARA DANIEL", precio:19367 },
      { modelo:"MIXER OMBU AMR-6 6 M3", desc:"Ex: SAN MIGUEL GRACIELA", precio:6000 },
      { modelo:"FERTILIZADORA SR FLEX 5000  - 2019", desc:"Ex: DANIEL SPOSITO E HIJOS", precio:37000 },
      { modelo:"MIXER MONTECOR 903M10 MX-8F", desc:"Ex: ESTEBAN NORBERTO", precio:9000 },
      { modelo:"MIXER MAINERO MOD 2910", desc:"Ex: TAMBOS Y CABAÑAS", precio:13000 },
      { modelo:"MIXER LA ESTANCIERA", desc:"Ex: GUARDIA MATRERA", precio:4000 },
      { modelo:"INOCULADOR MOVIL TECNO CAR", desc:"Ex: BIBINI", precio:1200 },
      { modelo:"MIXER COMOFRA 14M3", desc:"Ex: DECLAMA S A", precio:25000 },
      { modelo:"ESCARDILLO CON ROTATIVA", desc:"Ex: FILIPPINI", precio:1500 },
      { modelo:"ESCARDILLO 7 SURCOS", desc:"", precio:1000 },
      { modelo:"DESMALEZADORA DHO 3000 CUBIERTAS OMBU", desc:"Ex: IRAZUSTA Y CIA", precio:15000 },
      { modelo:"DESMALEZADORA BAIMA 5200", desc:"Ex: ARRIGONE", precio:18100 },
      { modelo:"COMOFRA MIXER VERTICAL 14M3", desc:"Ex: FRIGORIFICO MARILU DAMIANO", precio:23000 },
      { modelo:"EMBOLSADORA DE GRANOS SIMAGRO", desc:"Ex: AGROPECUARIA RB", precio:4000 },
      { modelo:"EMBOLSADORA 5 PIES", desc:"Ex: DUEDRA", precio:2000 },
      { modelo:"DESMALEZADORA GROSSPAL MOD DAV 5000 (CONSIG ARVIAL CONST", desc:"", precio:14000 },
      { modelo:"DESMALEZADORA AGROMEC VIAL 4.50MTS", desc:"", precio:10500 },
      { modelo:"CARRO AGROMEC JUNTADOR DE MEGAFARDOS 8TN REM 14", desc:"Ex: MEGANOA", precio:40000 },
      { modelo:"SEMBRADORA CRUCIANELLI PIONERA 40/17 C/ KIT GRUESA 20/35", desc:"Ex: MARIO LUJAN ARROYO", precio:80000 },
      { modelo:"CABEZAL MAICERO MAIZCO 11-52", desc:"Ex: PLENISCAR JORGE", precio:20000 },
      { modelo:"CABEZAL GIRASOLERO MAIZCO 10 A 70", desc:"Ex: LA NENE", precio:6000 },
      { modelo:"EXTRACTORA DE GRANOS PALOU 2013", desc:"Ex: EL ÑANDÚ", precio:15000 },
      { modelo:"ACOPLADO. P/SEM Y FERTILIZANTE CAP 17500LT (EX AGROSERV BROTES", desc:"", precio:26000 },
      { modelo:"ACOPLADO TANQUE COMBUSTIBLE 2000 LTS", desc:"Ex: FERNANDEZ CARLOS", precio:3000 },
      { modelo:"ROLO ACEPLA HIDRAULICO", desc:"Ex: ARRIGONE RIXIO", precio:8000 },
      { modelo:"PLATAFORMA GIRASOLERO MAINERO 1020 10 a 70  - SERIE 18", desc:"", precio:4000 },
      { modelo:"TOLVA IMPAGRO 8TN SEMILLAS Y FERTILIZANTES", desc:"", precio:3500 },
      { modelo:"RETRO PALA CATERPILLAR 438C", desc:"Ex: CLOVIS", precio:60000 },
      { modelo:"CABEZAL OMBU MAICERO 16-52", desc:"Ex: LA RIOJANA", precio:37000 },
      { modelo:"CINTA BUSTINZA 8 MTS HIDRAULICA - FLLIPER 160", desc:"Ex: LA ESTRELLA", precio:8000 },
      { modelo:"CINTA TRANSPORTADORA BUSTINZA GIN 17O MM-8MT - HIDR( EX ARRIGONe", desc:"", precio:11300 },
      { modelo:"CARGADORA RETROEXCAVADORA YINENG WZ30-25", desc:"Ex: LEPORATI", precio:70000 },
      { modelo:"SEMBRADORA AGROMETAL MX 33/21", desc:"Ex: ALVAREZ LUISA", precio:22000 },
      { modelo:"ELEVADOR DE ROLLOS AGROMEC ER 4000", desc:"Ex: USADO", precio:4300 },
      { modelo:"RASTRILLO MAINERO DE 8 ESTRELLAS", desc:"Ex: FRIDEL NERIO", precio:4000 },
      { modelo:"RASTRA PAMPERO 60 discos  LH 5280", desc:"Ex: ARRIGONE RIXIO", precio:36000 },
      { modelo:"AUTODESCARGABLE SANTA ROSA 18 TN 2 EJES Y BALANZA", desc:"Ex: POLVERINI", precio:16000 },
      { modelo:"SEMBRADORA AGROMETAL MXY 37-17,5", desc:"Ex: CUEVAS ALICIA", precio:75000 },
      { modelo:"SEMBRADORA AGROMETAL ADX 49 A 19", desc:"Ex: SIEMBRA DEL OESTE", precio:195000 },
      { modelo:"CABEZAL MAICERO MAIZCO PREMIUM 13 A 52", desc:"Ex: TROFINO ORLANDO", precio:30000 },
      { modelo:"SEMBRADORA FABIMAG FG-01", desc:"Ex: ZAMPONI LUCIANO", precio:105000 },
      { modelo:"SEMBRADORA GHERARDI 6100", desc:"Ex: IRIART MARIANO", precio:12000 },
      { modelo:"TOLVA SEMILLA Y FERTI  MONTECOR 17500LTS (EX AGROINDU", desc:"", precio:14480 },
      { modelo:"SEMBRADORA AGROMETAL TX MEGA 16/52,5", desc:"Ex: AGROAPLICACIONES PAMPA", precio:80000 },
      { modelo:"SEMBRADORA AGROMETAL MX 47 A 21", desc:"Ex: AGROSPEED", precio:130000 },
      { modelo:"ELEVADOR DE ROLLOS CERUTTI USADO", desc:"", precio:2200 },
    ]
  },
  {
    marca: "OMAR MARTIN",
    lista: "Julio 2026",
    vigencia: "07/2026",
    moneda: "USD",
    conIVA: false,
    condiciones: "Op.1: Contado -10%.\nOp.2: Entrega 30% + saldo 6 valores, precio de lista.",
    items: [
      { modelo:"OM-150-F", desc:"Cargadora Frontal 1/6m3 - Alt. 1,90m - P/tractores 20-40HP - c/anclaje - Instalada", precio:5150 },
      { modelo:"OM-180-F", desc:"Cargadora Frontal 1/5m3 - Alt. 2,70m - P/tractores 20-40HP - c/anclaje - Instalada", precio:5900 },
      { modelo:"OM-200-F Euro", desc:"Cargadora Frontal Euro c/Compensador - Balde 1/4m3 ref. - Alt. 2,70m - P/tractores 30-50HP - c/anclaje - Instalada", precio:7520 },
      { modelo:"OM-250-F ECO", desc:"Cargadora Frontal Euro - Balde 1/2m3 - Alt. 3,50m - P/tractores 50-90HP - c/anclaje - Instalada", precio:7750 },
      { modelo:"OM-260-F Euro", desc:"Cargadora Frontal Euro c/Compensador - Balde 1/2m3 ref. - Alt. 3,60m - P/tractores 50-90HP - c/anclaje - Instalada", precio:8300 },
      { modelo:"OM-500-F Euro", desc:"Cargadora Frontal Euro c/Compensador - Balde 1/2m3 ref. - Alt. 3,80m - P/tractores 80-130HP - c/anclaje - Instalada", precio:10760,
        opcionales:[
          { id:"joystick", label:"Joystick RMB Común", precio:2500, defecto:false },
          { id:"valvula",  label:"Instalación válvula comando en serie", precio:250, defecto:false },
          { id:"3en1",    label:"3en1 Rollos+Pallets+Bolsones (OM-103-RG)", precio:3680, defecto:false }
        ]
      },
      { modelo:"OM-500-F Euro Platinum", desc:"Cargadora Frontal Euro c/Compensador - Joystick - MultiFaster - Pulmón amort. - 3a vía hid. - Balde 1/2m3 - Alt. 3,80m - P/tractores 80-130HP - c/anclaje - Instalada", precio:14550,
        opcionales:[
          { id:"valvula", label:"Instalación válvula comando en serie", precio:250, defecto:false },
          { id:"3en1",   label:"3en1 Rollos+Pallets+Bolsones (OM-103-RG)", precio:3680, defecto:false }
        ]
      },
      { modelo:"OM-600-F Euro", desc:"Cargadora Frontal Euro c/Compensador - Balde 3/4m3 - Alt. 4,10m - P/tractores 90-140HP - c/anclaje - Torre ref. perno 50mm - Instalada", precio:11940,
        opcionales:[
          { id:"joystick", label:"Joystick RMB Común", precio:2500, defecto:false },
          { id:"valvula",  label:"Instalación válvula comando en serie", precio:250, defecto:false },
          { id:"3en1",    label:"3en1 Rollos+Pallets+Bolsones (OM-103-RG)", precio:3680, defecto:false }
        ]
      },
      { modelo:"OM-600-F Euro Platinum", desc:"Cargadora Frontal Euro c/Compensador - Joystick - MultiFaster - Pulmón amort. - 3a vía hid. - Balde 3/4m3 - Alt. 4,10m - P/tractores 90-140HP - c/anclaje - Torre ref. perno 50mm - Instalada", precio:15730,
        opcionales:[
          { id:"valvula", label:"Instalación válvula comando en serie", precio:250, defecto:false },
          { id:"3en1",   label:"3en1 Rollos+Pallets+Bolsones (OM-103-RG)", precio:3680, defecto:false }
        ]
      },
      { modelo:"OM-550-H Euro", desc:"Cargadora Frontal c/Sist. Compensador Hidráulico - Euro - Balde 1/2m3 ref. - Alt. 3,80m - P/tractores 80-130HP - c/anclaje - Instalada", precio:11460 },
      { modelo:"OM-550-H Euro Platinum", desc:"Cargadora Frontal c/Sist. Compensador Hidráulico - Joystick - MultiFaster - Pulmón amort. - 3a vía hid. - Balde 1/2m3 - Alt. 3,80m - P/tractores 80-130HP - c/anclaje - Instalada", precio:15250 },
      { modelo:"OM-650-H Euro", desc:"Cargadora Frontal c/Sist. Compensador Hidráulico - Euro - Balde 3/4m3 - Alt. 4,10m - P/tractores 90-140HP - c/anclaje - Torre ref. perno 50mm - Instalada", precio:12540 },
      { modelo:"OM-650-H Euro Platinum", desc:"Cargadora Frontal c/Sist. Compensador Hidráulico - Joystick - MultiFaster - Pulmón amort. - 3a vía hid. - Balde 3/4m3 - Alt. 4,10m - P/tractores 90-140HP - c/anclaje - Torre ref. perno 50mm - Instalada", precio:16330 },
      { modelo:"OM-910-R", desc:"Retroexcavadora al 3 puntos - Prof. exc. 1,80m - P/tractores porte pequeño - Balde 12\" - SIN sist. hidráulico independiente", precio:10600,
        opcionales:[
          { id:"sist_hid", label:"Sist. Hidráulico independiente p/OM-910-R", precio:600, defecto:false }
        ]
      },
      { modelo:"OM-950-R", desc:"Retroexcavadora al 3 puntos - Prof. exc. 2,60m - P/tractores 25-60HP y minicargadoras - c/sist. hidráulico independiente - Balde 16\"", precio:13800 },
      { modelo:"OM-1000-R", desc:"Retroexcavadora al 3 puntos - Prof. exc. 3,00m - c/sist. hidráulico independiente - P/tractores desde 70HP - Balde 18\"", precio:15300 },
      { modelo:"OM-800-I", desc:"Pala Cargadora Invertida c/Sist. Compensador - Balde 3/4m3 - Alt. 4,00m - Incluye inversión del tractor e instalación", precio:21280 },
      { modelo:"OM-102-TT", desc:"Trozadora de troncos para 3 puntos - Filos acero cementado - Troncos hasta 500mm long. y 400mm diám.", precio:4250,
        opcionales:[
          { id:"opc_r", label:"Sist. opcional de ruedas (OPC-R)", precio:450, defecto:false }
        ]
      },
      { modelo:"OM-102-TV", desc:"Trozador de troncos vertical - P/troncos gran diámetro, altura 40cm - Articulado vertical/horizontal p/traslado - Llantas 650 agrícola", precio:3640 },
      { modelo:"OM-050-NS", desc:"Hoja Niveladora Liviana acoplable al 3 puntos", precio:2580 },
    ]
  }
];

// ============================================================
// DATOS LOCALES DE RESPALDO
// Costo en USD por unidad. null = sin flete (retirar de sucursal)
// Para COMOFRA se diferencia por tipo de producto
// ============================================================
const FLETES = {
  "MAIZCO":    { costo: 990,  moneda: "USD" },
  "RICHIGER":  { costo: 1155, moneda: "USD" },
  "S y L":     { costo: 990,  moneda: "USD" },
  "BAIMA":     { costo: 1100, moneda: "USD" },
  "DOLBI":     { costo: 1430, moneda: "USD" },
  "SODE_900": { costo: 1035, moneda: "USD" },
  // COMOFRA: por modelo, ver FLETES_COMOFRA (camión completo Monte Buey ≈ USD 2.310 ÷ equipos por camión)
  "COMOFRA_AUTDESCARGABLE": { costo: 1155, moneda: "USD" },
  "COMOFRA_EMBOLSADORA":    { costo: 550,  moneda: "USD" },
  "COMOFRA_OTROS":          { costo: 935,  moneda: "USD" },
  // DESMALEZADORAS (aplica a marcas que vendan desmalezadoras – AGROAR, GROSSPAL linea pasturas)
  "SYRA":      { costo: 1035,  moneda: "USD" },
  "NEW HOLLAND": null,
  "ZUIDBERG":  null,
  "YINENG":    null,
  "TEU":       null,
  "LUTONG":    null,
  "CONESE":    { costo: 1100, moneda: "USD" },
  "CHALERO":   { costo: 0,    moneda: "USD", incluido: false, texto: "A cargo del comprador - FOB Chivilcoy" },
  "EL PAMPA":  { costo: 880,  moneda: "USD" },
  "DESMALEZADORA": { costo: 550, moneda: "USD" },
  "OMAR MARTIN": { costo: 770, moneda: "USD" },
  // Sin flete:
  "IMPACAR":   { costo: 550, moneda: "USD" },
  "ROGRIV":    { costo: 430, moneda: "USD" },
  "STEFONI":   { costo: 900, moneda: "USD" },
  "PROCOR":    { costo: 600, moneda: "USD" },
  "ALCAL":     null,
  "AUMEC":     { costo: 715,  moneda: "USD" },
  "AGROMETAL": null,
  "AGROAR":    null,
  "ACEPLA":    null,
  "EL PATO":   { costo: 660, moneda: "USD" },
  "GROSSPAL":  null,
};

// Opcionales automáticos CHALERO Vertebradas
const OPC_CHALERO_VERTEBRADA = {
  valvula:    { modelo:"Valvula Desviadora de Caudal (CO20025)",    precio:194.79,   iva:0.105 },
  balancines: { modelo:"Balancines Niveladores de Ejes (CO20037)",  precio:1653.33,  iva:0.105 },
  circuito:   { modelo:"Circuito Hidraulico Trasero (CR20713)",     precio:388.98,   iva:0.105 }
};
const NEU_CHALERO_VERTEBRADA = {
  "11L15": { precio:140, iva:0.21 },
  "12.5L15": { precio:168, iva:0.21 }
};

// ═══════════ Tablas complementarias (movidas desde index.html, 30/10/2026) ═══════════
// Llantas CONESE (lista N°96). Lo que va entre paréntesis con "+$" sale como nota al pie del presupuesto (no suma al precio).
const LLANTAS_CONESE = {
  "TA-2.0 Tanque 2.000 lts": "Simples 15 o 16 (+$680.000 duales 15 o 16) (+$460.000 simples 17 u 8x16) (+$380.000 portaauxilio y auxiliar)",
  "TA-3.0 Tanque 3.000 lts": "Simples 15 o 16 (+$680.000 duales 15 o 16) (+$460.000 simples 17 u 8x16) (+$380.000 portaauxilio y auxiliar)",
  "TCA3-2 Tanque 3.000 lts + Taller": "Duales 15-16 o simples 17 (+$3.010.000 duales 17, incluye masa grande, elásticos y guardabarros) (+$380.000 portaauxilio y auxiliar)",
  "TCA4-2 Tanque 4.000 lts + Taller": "8,25x22,5 o duales 16 ctro gde o alta flotacion 400x60x15,1/2 (+$1.580.000 duales 17/18) (+$490.000 portaauxilio y auxiliar)",
  "TCA5-2 Tanque 5.000 lts + Taller": "8,25x22,5 o duales 16 ctro gde o alta flotacion 400x60x15,1/2 (+$1.580.000 duales 17/18) (+$490.000 portaauxilio y auxiliar)",
  "TCA6-2 Tanque 6.000 lts + Taller": "8,25x22,5 o duales 16 ctro gde o alta flotacion 400x60x15,1/2 (+$1.580.000 duales 17/18) (+$490.000 portaauxilio y auxiliar)",
  "TT-1 Tanque 5.000 lts + Taller Rodante": "Duales 16 ctro gde o alta flotacion 400x60x15,1/2 (+$1.580.000 duales 17/18) (+$490.000 portaauxilio y auxiliar)",
  "TRD-2 Taller Dron": "Simples 15 o 16 - sin cubiertas",
  "TT-2 Tanque 3.000 lts + Taller Rodante": "Duales 16 ctro gde (+$1.580.000 duales 17/18) (+$490.000 portaauxilio y auxiliar)"
};

const CUBIERTAS_COMOFRA = {
  autodesc_1eje:[
    {desc:"23:1x30 BKT 16T TA-17,5/21,5",precio:2285073,cant:2},
    {desc:"23:1x30 BKT 18T TA-17,5/21,5 consultar",precio:2590577,cant:2}
  ],
  autodesc_2ejes:[
    {desc:"23:1x30 BKT 16T TA-26/30",precio:2285073,cant:4},
    {desc:"23:1x30 BKT 18T TA-26/30 consultar",precio:2590577,cant:4},
    {desc:"24:5x32 BKT 16T TA-35/38",precio:2934086,cant:4},
    {desc:"24:5Rx32 Alliance Radial TA-35/38",precio:3021916,cant:4},
    {desc:"28:Lx26 BKT 20T delantera TA-35/38",precio:2839034,cant:4},
    {desc:"28:LRx26 BKT Radial delantera TA-35/38",precio:3887879,cant:4}
  ],
  autodesc_45:[
    {desc:"28:Lx26 BKT 20T TA-45 delantera",precio:2839034,cant:2},
    {desc:"23:1x26 BKT 18T TA-45 trasera",precio:2324530,cant:4},
    {desc:"30,5-LRx32 BKT Radial TA-38/45",precio:4917418,cant:2}
  ],
  mixer_h_balancin:[{desc:"11-Lx16 BKT 12T Mix.H 6/10m3 Balancin",precio:378921,cant:4}],
  mixer_h10_1eje:[{desc:"16:9x24 Mix.H 10m3 1 eje",precio:1058766,cant:2}],
  mixer_h14_1eje:[
    {desc:"23:1x26 BKT 18T Mix.H 14m3 1 eje",precio:2324530,cant:2},
    {desc:"295/80Rx22,5 Sure Track Radial Mix.H 14m3",precio:731172,cant:2}
  ],
  mixer_h14_balancin:[{desc:"400/55x22,5 BKT 20T Mix.H 14m3 Balancin",precio:944165,cant:4}],
  mixer_h16_1eje:[{desc:"600/50x22,5 Alliance 18T Mix.H 16m3 1 eje",precio:1279847,cant:2}],
  mixer_h16_2ejes:[{desc:"16,0/70x20 BKT 16T Mix.H 16m3 2 ejes",precio:1030979,cant:4}],
  mixer_v_1eje:[
    {desc:"12,5-Lx16 BKT 12T Mix.V 6m3",precio:349395,cant:2},
    {desc:"400/60x15,5 BKT 18T Mix.V 10m3",precio:655010,cant:2},
    {desc:"550/45x22,5 Alliance 20T Mix.V 14m3",precio:1179526,cant:2}
  ],
  mixer_v25:[{desc:"600/40x22,5 BKT 18T Mix.V 25m3",precio:1852219,cant:2}],
  batea_pequena:[
    {desc:"11-Lx16 BKT 12T BV-04/BV-05",precio:378921,cant:4}
  ],
  batea_75:[
    {desc:"275/80Rx22,5 Sure Track Radial BV-7,5",precio:731172,cant:4},
    {desc:"400/55x22,5 BKT 20T BV-7,5",precio:944165,cant:4}
  ],
  batea_95:[
    {desc:"275/80Rx22,5 Sure Track Radial BV-9,5",precio:731172,cant:4},
    {desc:"400/55x22,5 BKT 20T BV-9,5 opcional",precio:944165,cant:4}
  ],
  batea_15:[
    {desc:"500/60x22,5 BKT 18T BV-15",precio:1289126,cant:4}
  ],
  atf_4cub:[
    {desc:"275/80x22,5 ATF 12000/17500 x4",precio:540540,cant:4},
    {desc:"275/80x22,5 ATF 17500 doble eje x8",precio:540540,cant:8}
  ],
  atf_8cub:[
    {desc:"275/80x22,5 ATF 26000 x8",precio:540540,cant:8}
  ]
};

const BALANZAS_COMOFRA = {
  autodesc_1eje:[
    {desc:"Magris MTV-206 17.500/21.500L 1eje",precio:6032000},
    {desc:"Magris MTV-207A 17.500L 1eje",precio:7115000},
    {desc:"Magris MTV-207A 21.500L 1eje",precio:6342000},
    {desc:"Magris MTV-306 17.500/21.500L 1eje",precio:6932000},
    {desc:"Hook ST-108 17.500/21.500L 1eje",precio:5637000},
    {desc:"Hook AT-455 17.500/21.500L 1eje",precio:5845500},
    {desc:"Vesta 3520 Basico 17.500/21.500L 1eje",precio:5235000},
    {desc:"Vesta 3525 17.500/21.500L 1eje",precio:5610000}
  ],
  autodesc_2ejes:[
    {desc:"Magris MTV-206 26/30/35/38.000L 2ejes",precio:6975000},
    {desc:"Magris MTV-207A 26/30/35/38.000L 2ejes",precio:6975000},
    {desc:"Magris MTV-306 26/30/35/38.000L 2ejes",precio:7875000},
    {desc:"Hook ST-108 26/30/35/38.000L 2ejes",precio:6777000},
    {desc:"Hook AT-455 26/30/35/38.000L 2ejes",precio:6985500},
    {desc:"Vesta 3520 26/30/35/38.000L 2ejes",precio:7113000},
    {desc:"Vesta 3525 26/30/35/38.000L 2ejes",precio:7428000}
  ],
  autodesc_45:[
    {desc:"Magris MTV-206 45.000L 2ejes",precio:8601000},
    {desc:"Magris MTV-207A 45.000L 2ejes",precio:8911000},
    {desc:"Magris MTV-306 45.000L 2ejes",precio:9501000},
    {desc:"Hook ST-108 45.000L 2ejes",precio:7276500},
    {desc:"Hook AT-455 45.000L 2ejes",precio:7471500}
  ],
  mixer_h_balancin:[
    {desc:"Magris MX-8M Mix.H 6/10m3 balancin",precio:5439000},
    {desc:"Magris Mass-68 Mix.H 6/10m3 balancin",precio:6659000},
    {desc:"Hook AT-150 Mix.H H6/H10m3 balancin",precio:5192000},
    {desc:"Hook AT-456 Mix.H H6/H10m3 balancin",precio:5400500}
  ],
  mixer_h10_1eje:[
    {desc:"Magris MX-8M Mix.H 10m3 1eje",precio:5439000},
    {desc:"Magris Mass-68 Mix.H 10m3 1eje",precio:6659000},
    {desc:"Hook AT-150 Mix.H H10m3 1eje",precio:5192000},
    {desc:"Hook AT-456 Mix.H H10m3 1eje",precio:5400500}
  ],
  mixer_h14_1eje:[
    {desc:"Magris MX-8M Mix.H 14/16m3 1eje",precio:6555000},
    {desc:"Magris Mass-68 Mix.H 14/16m3 1eje",precio:7775000},
    {desc:"Hook ST-456 Mix.H 14/16m3 1eje",precio:5342000}
  ],
  mixer_h14_balancin:[
    {desc:"Magris MX-8M Mix.H 14m3 balancin",precio:6555000},
    {desc:"Magris Mass-68 Mix.H 14m3 balancin",precio:7775000},
    {desc:"Hook ST-456 Mix.H 14m3 balancin",precio:5342000}
  ],
  mixer_h16_1eje:[
    {desc:"Magris MX-8M Mix.H 16m3 1eje",precio:6555000},
    {desc:"Magris Mass-68 Mix.H 16m3 1eje",precio:7775000},
    {desc:"Hook ST-456 Mix.H 16m3 1eje",precio:5342000}
  ],
  mixer_h16_2ejes:[
    {desc:"Magris MX-8M Mix.H 2ejes",precio:7810000},
    {desc:"Magris Mass-68 Mix.H 2ejes",precio:9030000}
  ],
  mixer_v_1eje:[
    {desc:"Magris MX-8M Mix.V 6m3",precio:5439000},
    {desc:"Magris MX-8M Mix.V 10/14m3",precio:5902000},
    {desc:"Magris Mass-68 Mix.V 6m3",precio:6659000},
    {desc:"Magris Mass-68 Mix.V 10/14m3",precio:7122000},
    {desc:"Hook AT-150 Mix.V MV10/MV14",precio:6646000},
    {desc:"Hook AT-456 Mix.V MV10/MV14",precio:6354500},
    {desc:"Vesta 3530 Mix.V MV10/MV14",precio:5872000},
    {desc:"Vesta 3535 Mix.V MV10/MV14",precio:6397000}
  ],
  mixer_v25:[
    {desc:"Magris MX-8M Mix.V 21/25m3",precio:6585000},
    {desc:"Magris Mass-68 Mix.V 21/25m3",precio:7805000}
  ]
};

// HOD1 y HOD2 por línea de pago y tipo de producto
// Formato: { hod1, hod2 } - descuentos encadenados al cliente
const NH_DESCUENTOS = {
  // Forma de pago → tipo producto → {hod1, hod2}
  "contado":        { tractores_t7t8: {hod1:11, hod2:7}, tractores_chicos: {hod1:11, hod2:7}, cosechadoras: {hod1:11, hod2:7}, cabezales: {hod1:11, hod2:7}, pulverizadores: {hod1:11, hod2:7}, heno_forraje: {hod1:11, hod2:7}, picadoras: {hod1:11, hod2:7} },
  "trade_90":       { tractores_t7t8: {hod1:11, hod2:5}, tractores_chicos: {hod1:11, hod2:5}, cosechadoras: {hod1:11, hod2:5}, cabezales: {hod1:11, hod2:5}, pulverizadores: {hod1:11, hod2:5}, heno_forraje: {hod1:11, hod2:5}, picadoras: {hod1:11, hod2:5} },
  "wholesale_90":   { tractores_t7t8: {hod1:11, hod2:4}, tractores_chicos: {hod1:11, hod2:4}, cosechadoras: {hod1:11, hod2:4}, cabezales: {hod1:11, hod2:4}, pulverizadores: {hod1:11, hod2:4}, heno_forraje: {hod1:11, hod2:4}, picadoras: {hod1:11, hod2:4} },
  "wholesale_180":  { tractores_t7t8: {hod1:11, hod2:1}, tractores_chicos: {hod1:11, hod2:1}, cosechadoras: {hod1:11, hod2:1}, cabezales: {hod1:11, hod2:1}, pulverizadores: {hod1:11, hod2:1}, heno_forraje: {hod1:11, hod2:1}, picadoras: {hod1:11, hod2:1} },
};

// ── AGROACTIVA 2026 ──────────────────────────────────────────
// Descuentos directos (un solo hod) por tipo de producto
// tractores/pulv = descTP, cosechadoras/cabezales = descCC
const NH_AGROACTIVA_LINEAS = [
  // Contado
  { id:"aa_cto_tract",     label:"Contado – Tractores/Pulv. (24%)",         banco:"Contado",     plazo:"contado", tna:0,     moneda:"USD", descTP:24.0, descCC:28.0 },
  { id:"aa_cto_cose",      label:"Contado – Cosechadoras/Cab. (28%)",        banco:"Contado",     plazo:"contado", tna:0,     moneda:"USD", descTP:24.0, descCC:28.0 },
  { id:"aa_cto_heno",      label:"Contado – Heno & Forraje (15%)",           banco:"Contado",     plazo:"contado", tna:0,     moneda:"USD", descTP:15.0, descCC:15.0 },
  // AGROCANJE
  { id:"aa_agrocanje",     label:"AGROCANJE",                                banco:"AGROCANJE",   plazo:"contado", tna:0,     moneda:"USD", descTP:24.0, descCC:28.0 },
  // BBVA
  { id:"aa_bbva_ars_4",    label:"BBVA – ARS 4 años TNA 21,5%",              banco:"BBVA",        plazo:"4",       tna:21.5,  moneda:"ARS", descTP:15.6, descCC:19.9 },
  { id:"aa_bbva_usd_3",    label:"BBVA – USD 3 años TNA 1%",                 banco:"BBVA",        plazo:"3",       tna:1.0,   moneda:"USD", descTP:16.5, descCC:20.8 },
  { id:"aa_bbva_usd_4",    label:"BBVA – USD 4 años TNA 3%",                 banco:"BBVA",        plazo:"4",       tna:3.0,   moneda:"USD", descTP:16.5, descCC:20.8 },
  { id:"aa_bbva_usd_5",    label:"BBVA – USD 5 años TNA 5%",                 banco:"BBVA",        plazo:"5",       tna:5.0,   moneda:"USD", descTP:16.5, descCC:20.8 },
  // BANCOR
  { id:"aa_bancor_ars_4",  label:"BANCOR – ARS 4 años TNA 14%",              banco:"BANCOR",      plazo:"4",       tna:14.0,  moneda:"ARS", descTP:14.7, descCC:19.0 },
  // BERSA
  { id:"aa_bersa_usd_3",   label:"BERSA/NBSF – USD 3 años TNA 4%",           banco:"BERSA",       plazo:"3",       tna:4.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_bersa_usd_4",   label:"BERSA/NBSF – USD 4 años TNA 5,5%",         banco:"BERSA",       plazo:"4",       tna:5.5,   moneda:"USD", descTP:18.0, descCC:22.5 },
  // CREDICOOP
  { id:"aa_coop_usd_3",    label:"CREDICOOP – USD 3 años TNA 2%",             banco:"CREDICOOP",   plazo:"3",       tna:2.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_coop_usd_4",    label:"CREDICOOP – USD 4 años TNA 4%",             banco:"CREDICOOP",   plazo:"4",       tna:4.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_coop_ars_3",    label:"CREDICOOP – ARS 3 años TNA 22%",            banco:"CREDICOOP",   plazo:"3",       tna:22.0,  moneda:"ARS", descTP:18.0, descCC:22.5 },
  // GALICIA
  { id:"aa_galicia_usd_3", label:"GALICIA – USD 3 años TNA 4,5%",             banco:"GALICIA",     plazo:"3",       tna:4.5,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_galicia_usd_4", label:"GALICIA – USD 4 años TNA 5,25%",            banco:"GALICIA",     plazo:"4",       tna:5.25,  moneda:"USD", descTP:18.0, descCC:22.5 },
  // BAPRO
  { id:"aa_bapro_ars_3",   label:"BAPRO – ARS 3 años TNA 28,5%",              banco:"BAPRO",       plazo:"3",       tna:28.5,  moneda:"ARS", descTP:13.7, descCC:18.0 },
  { id:"aa_bapro_ars_4",   label:"BAPRO – ARS 4 años TNA 29,5%",              banco:"BAPRO",       plazo:"4",       tna:29.5,  moneda:"ARS", descTP:13.7, descCC:18.0 },
  { id:"aa_bapro_usd_3",   label:"BAPRO – USD 3 años TNA 1%",                 banco:"BAPRO",       plazo:"3",       tna:1.0,   moneda:"USD", descTP:13.7, descCC:18.0 },
  { id:"aa_bapro_usd_4",   label:"BAPRO – USD 4 años TNA 2,5%",               banco:"BAPRO",       plazo:"4",       tna:2.5,   moneda:"USD", descTP:13.7, descCC:18.0 },
  // LA PAMPA
  { id:"aa_lapampa_ars_3", label:"LA PAMPA – ARS 3 años TNA 35%",             banco:"LA PAMPA",    plazo:"3",       tna:35.0,  moneda:"ARS", descTP:15.6, descCC:19.9 },
  // MACRO
  { id:"aa_macro_usd_3",   label:"MACRO – USD 3 años TNA 4,5%",               banco:"MACRO",       plazo:"3",       tna:4.5,   moneda:"USD", descTP:17.4, descCC:21.6 },
  { id:"aa_macro_usd_4",   label:"MACRO – USD 4 años TNA 9,5%",               banco:"MACRO",       plazo:"4",       tna:9.5,   moneda:"USD", descTP:17.4, descCC:21.6 },
  // PATAGONIA
  { id:"aa_patagonia_3",   label:"PATAGONIA – USD 3 años TNA 3,75%",           banco:"PATAGONIA",   plazo:"3",       tna:3.75,  moneda:"USD", descTP:17.4, descCC:21.6 },
  // CNHI Capital
  { id:"aa_cnhi_st_1",     label:"CNHI Capital – ST USD 1 año TNA 0%",         banco:"CNHI Capital",plazo:"1",       tna:0.0,   moneda:"USD", descTP:19.0, descCC:23.0 },
  { id:"aa_cnhi_st_2",     label:"CNHI Capital – ST USD 2 años TNA 0%",        banco:"CNHI Capital",plazo:"2",       tna:0.0,   moneda:"USD", descTP:14.7, descCC:19.0 },
  { id:"aa_cnhi_lt_3",     label:"CNHI Capital – LT USD 3 años TNA 3%",        banco:"CNHI Capital",plazo:"3",       tna:3.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_cnhi_lt_4",     label:"CNHI Capital – LT USD 4 años TNA 4%",        banco:"CNHI Capital",plazo:"4",       tna:4.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_cnhi_lt_5a",    label:"CNHI Capital – LT USD 5 años TNA 5%",        banco:"CNHI Capital",plazo:"5",       tna:5.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_cnhi_lt_5b",    label:"CNHI Capital – LT USD 5 años TNA 6,9%",      banco:"CNHI Capital",plazo:"5",       tna:6.9,   moneda:"USD", descTP:23.0, descCC:25.6 },
  { id:"aa_cnhi_pch6",     label:"CNHI PCH – 6 cheques mensuales",             banco:"CNHI PCH",    plazo:"contado", tna:0,     moneda:"ARS", descTP:15.6, descCC:19.9 },
  { id:"aa_cnhi_pch9",     label:"CNHI PCH – 9 cheques mensuales",             banco:"CNHI PCH",    plazo:"contado", tna:0,     moneda:"ARS", descTP:14.7, descCC:19.0 },
  // SANTANDER
  { id:"aa_sant_a_3",      label:"SANTANDER Opcion A – USD 3 años TNA 3%",     banco:"SANTANDER",   plazo:"3",       tna:3.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_sant_a_4",      label:"SANTANDER Opcion A – USD 4 años TNA 4%",     banco:"SANTANDER",   plazo:"4",       tna:4.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_sant_a_5",      label:"SANTANDER Opcion A – USD 5 años TNA 5%",     banco:"SANTANDER",   plazo:"5",       tna:5.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_sant_a_6",      label:"SANTANDER Opcion A – USD 6 años TNA 6%",     banco:"SANTANDER",   plazo:"6",       tna:6.0,   moneda:"USD", descTP:18.0, descCC:22.5 },
  { id:"aa_sant_b_3",      label:"SANTANDER Opcion B – USD 3 años TNA 5,25%",  banco:"SANTANDER",   plazo:"3",       tna:5.25,  moneda:"USD", descTP:23.0, descCC:25.6 },
  { id:"aa_sant_b_4",      label:"SANTANDER Opcion B – USD 4 años TNA 6,5%",   banco:"SANTANDER",   plazo:"4",       tna:6.5,   moneda:"USD", descTP:23.0, descCC:25.6 },
  { id:"aa_sant_b_5",      label:"SANTANDER Opcion B – USD 5 años TNA 7%",     banco:"SANTANDER",   plazo:"5",       tna:7.0,   moneda:"USD", descTP:23.0, descCC:25.6 },
  { id:"aa_sant_b_6",      label:"SANTANDER Opcion B – USD 6 años TNA 8%",     banco:"SANTANDER",   plazo:"6",       tna:8.0,   moneda:"USD", descTP:23.0, descCC:25.6 },
  // BNA
  { id:"aa_bna_r827",      label:"BNA – ARS 5 años TNA 18% (R827)",            banco:"BNA",         plazo:"5",       tna:18.0,  moneda:"ARS", descTP:14.7, descCC:19.0 },
  { id:"aa_bna_r810",      label:"BNA – Extra Convenio USD 5 años TNA 6,5% (R810)", banco:"BNA",    plazo:"5",       tna:6.5,   moneda:"USD", descTP:24.0, descCC:28.0 },
];

// Líneas de financiamiento por plazo
const NH_LINEAS = [
  // ── Boletín Comercial CNH N°01 — Condiciones Comerciales JUNIO 2026 ──
  { id:"agrocanje", label:"Agrocanje", banco:"Agrocanje", plazo:"-", tna:0, moneda:"USD", hod1:11, hod2:7 },
  // ── Condición de Pago (por línea de producto, no por banco) ──
  { id:"cnh_contado",  label:"Contado - Extra Convenio - Banco sin subsidio", banco:"CNH - Condición de Pago", plazo:"contado", tna:0, moneda:"USD", hod1:11, hod2:7 },
  { id:"cnh_whole90",  label:"Wholesale - 90D (LTV 100%)",  banco:"CNH - Condición de Pago", plazo:"90dias", tna:0, moneda:"USD", hod1:11, hod2:4 },
  { id:"cnh_whole180", label:"Wholesale - 180D (LTV 100%)", banco:"CNH - Condición de Pago", plazo:"180dias", tna:0, moneda:"USD", hod1:11, hod2:1,
    naLineas:["tractores_chicos","tractores_t7t8","pulverizadores","cosechadoras_cana"] },
  // ── CNHI Capital (Boletín N°03 - Julio 2026) ───────────────────
  { id:"cnhi_st_1",     label:"CNHI Capital – ST USD S/Gastos-S/Seguro (Mutuo) 1 año TNA 0%",     banco:"CNHI Capital", plazo:1, tna:0,    moneda:"USD", hod1:8,  hod2:0 },
  { id:"cnhi_st_2",     label:"CNHI Capital – ST USD S/Gastos-S/Seguro (Mutuo) 2 años TNA 0%",    banco:"CNHI Capital", plazo:2, tna:0,    moneda:"USD", hod1:12, hod2:0 },
  { id:"cnhi_lt_3",     label:"CNHI Capital – LT USD 3 años TNA 3,9%",  banco:"CNHI Capital", plazo:3, tna:3.9,  moneda:"USD", hod1:7,  hod2:0 },
  { id:"cnhi_lt_4",     label:"CNHI Capital – LT USD 4 años TNA 4,9%",  banco:"CNHI Capital", plazo:4, tna:4.9,  moneda:"USD", hod1:7,  hod2:0 },
  { id:"cnhi_lt_5",     label:"CNHI Capital – LT USD 5 años TNA 6,9%",  banco:"CNHI Capital", plazo:5, tna:6.9,  moneda:"USD", hod1:5,  hod2:0 },
  { id:"cnhi_pch6_0",   label:"CNHI Capital – PCH 6 Cheques Mensuales TNA 0%",   banco:"CNHI Capital", plazo:"cheques", tna:0,  moneda:"USD", hod1:9,  hod2:0 },
  { id:"cnhi_pch6_15",  label:"CNHI Capital – PCH 6 Cheques Mensuales TNA 15%",  banco:"CNHI Capital", plazo:"cheques", tna:15, moneda:"USD", hod1:6,  hod2:0 },
  { id:"cnhi_pch9_0",   label:"CNHI Capital – PCH 9 Cheques Mensuales TNA 0%",   banco:"CNHI Capital", plazo:"cheques", tna:0,  moneda:"USD", hod1:12, hod2:0 },
  { id:"cnhi_pch9_15",  label:"CNHI Capital – PCH 9 Cheques Mensuales TNA 15%",  banco:"CNHI Capital", plazo:"cheques", tna:15, moneda:"USD", hod1:8,  hod2:0 },
  { id:"cnhi_pch11_0",  label:"CNHI Capital – PCH 11 Cheques Mensuales TNA 0%",  banco:"CNHI Capital", plazo:"cheques", tna:0,  moneda:"USD", hod1:14, hod2:0 },
  { id:"cnhi_pch11_15", label:"CNHI Capital – PCH 11 Cheques Mensuales TNA 15%", banco:"CNHI Capital", plazo:"cheques", tna:15, moneda:"USD", hod1:9,  hod2:0 },
  { id:"cnhi_pch180_0", label:"CNHI Capital – PCH 180/360 TNA 0%",  banco:"CNHI Capital", plazo:"cheques", tna:0,  moneda:"USD", hod1:18, hod2:0 },
  { id:"cnhi_pch180_15",label:"CNHI Capital – PCH 180/360 TNA 15%", banco:"CNHI Capital", plazo:"cheques", tna:15, moneda:"USD", hod1:13, hod2:0 },
  // ── Santander ────────────────────────────────────────────────
  { id:"sant_a_3", label:"Santander – Opción A (1er cuota anualizada) 3 años TNA 3%", banco:"Santander", plazo:3, tna:3, moneda:"USD", hod1:11, hod2:0 },
  { id:"sant_a_4", label:"Santander – Opción A (1er cuota anualizada) 4 años TNA 4%", banco:"Santander", plazo:4, tna:4, moneda:"USD", hod1:11, hod2:0 },
  { id:"sant_a_5", label:"Santander – Opción A (1er cuota anualizada) 5 años TNA 5%", banco:"Santander", plazo:5, tna:5, moneda:"USD", hod1:11, hod2:0 },
  { id:"sant_a_6", label:"Santander – Opción A (1er cuota anualizada) 6 años TNA 6%", banco:"Santander", plazo:6, tna:6, moneda:"USD", hod1:11, hod2:4 },
  { id:"sant_b_3", label:"Santander – Opción B (1er cuota anualizada) 3 años TNA 5,25%", banco:"Santander", plazo:3, tna:5.25, moneda:"USD", hod1:11, hod2:4 },
  { id:"sant_b_4", label:"Santander – Opción B (1er cuota anualizada) 4 años TNA 6,5%",  banco:"Santander", plazo:4, tna:6.5,  moneda:"USD", hod1:11, hod2:4 },
  { id:"sant_b_5", label:"Santander – Opción B (1er cuota anualizada) 5 años TNA 7%",    banco:"Santander", plazo:5, tna:7,    moneda:"USD", hod1:11, hod2:4 },
  { id:"sant_b_6", label:"Santander – Opción B (1er cuota anualizada) 6 años TNA 8%",    banco:"Santander", plazo:6, tna:8,    moneda:"USD", hod1:11, hod2:4 },
  // ── BNA ──────────────────────────────────────────────────────
  { id:"bna_r827", label:"BNA – Prendario ARS Con Subsidio R827 5 años TNA 18%", banco:"BNA", plazo:5, tna:18,  moneda:"ARS", hod1:7,  hod2:0 },
  { id:"bna_r810", label:"BNA – Extra Convenio R810 5 años TNA 6,5%",            banco:"BNA", plazo:5, tna:6.5, moneda:"ARS", hod1:11, hod2:7 },
  // ── BBVA ─────────────────────────────────────────────────────
  { id:"bbva_ars_4",  label:"BBVA – Prendario ARS Con Subsidio (L30/6) 4 años TNA 21,5%", banco:"BBVA", plazo:4, tna:21.5, moneda:"ARS", hod1:8, hod2:0 },
  { id:"bbva_usd_3",  label:"BBVA – Prendario USD Con Subsidio (L30/6) 3 años TNA 1%",    banco:"BBVA", plazo:3, tna:1,    moneda:"USD", hod1:9, hod2:0 },
  { id:"bbva_usd_4",  label:"BBVA – Prendario USD Con Subsidio (L30/6) 4 años TNA 3%",    banco:"BBVA", plazo:4, tna:3,    moneda:"USD", hod1:9, hod2:0 },
  { id:"bbva_usd_5",  label:"BBVA – Prendario USD Con Subsidio (L30/6) 5 años TNA 5%",    banco:"BBVA", plazo:5, tna:5,    moneda:"USD", hod1:9, hod2:0 },
  // ── Bancor ───────────────────────────────────────────────────
  { id:"bancor_ars_4", label:"Bancor – Prendario ARS Con Subsidio 4 años TNA 14%", banco:"Bancor", plazo:4, tna:14, moneda:"ARS", hod1:7, hod2:0 },
  // ── Bersa/NBSF ───────────────────────────────────────────────
  { id:"bersa_usd_3", label:"Bersa/NBSF – Prendario USD Con Subsidio 3 años TNA 4%",   banco:"Bersa/NBSF", plazo:3, tna:4,   moneda:"USD", hod1:11, hod2:0 },
  { id:"bersa_usd_4", label:"Bersa/NBSF – Prendario USD Con Subsidio 4 años TNA 5,5%", banco:"Bersa/NBSF", plazo:4, tna:5.5, moneda:"USD", hod1:11, hod2:0 },
  // ── Credicoop ────────────────────────────────────────────────
  { id:"credi_usd_3",  label:"Credicoop – Prendario USD Con Subsidio 3 años TNA 2%",  banco:"Credicoop", plazo:3, tna:2,  moneda:"USD", hod1:11, hod2:0 },
  { id:"credi_usd_4",  label:"Credicoop – Prendario USD Con Subsidio 4 años TNA 4%",  banco:"Credicoop", plazo:4, tna:4,  moneda:"USD", hod1:11, hod2:0 },
  { id:"credi_ars_3",  label:"Credicoop – Prendario ARS Con Subsidio 3 años TNA 22%", banco:"Credicoop", plazo:3, tna:22, moneda:"ARS", hod1:11, hod2:0 },
  // ── Galicia ──────────────────────────────────────────────────
  { id:"gal_usd_3", label:"Galicia – Prendario USD Con Subsidio 3 años TNA 4,5%",  banco:"Galicia", plazo:3, tna:4.5,  moneda:"USD", hod1:11, hod2:0 },
  { id:"gal_usd_4", label:"Galicia – Prendario USD Con Subsidio 4 años TNA 5,25%", banco:"Galicia", plazo:4, tna:5.25, moneda:"USD", hod1:11, hod2:0 },
  // ── Bapro ────────────────────────────────────────────────────
  { id:"bapro_ars_3", label:"Bapro – Prendario ARS Con Subsidio 3 años TNA 28,5%", banco:"Bapro", plazo:3, tna:28.5, moneda:"ARS", hod1:6, hod2:0 },
  { id:"bapro_ars_4", label:"Bapro – Prendario ARS Con Subsidio 4 años TNA 29,5%", banco:"Bapro", plazo:4, tna:29.5, moneda:"ARS", hod1:6, hod2:0 },
  { id:"bapro_usd_3", label:"Bapro – Prendario USD Con Subsidio 3 años TNA 1%",    banco:"Bapro", plazo:3, tna:1,    moneda:"USD", hod1:6, hod2:0 },
  { id:"bapro_usd_4", label:"Bapro – Prendario USD Con Subsidio 4 años TNA 2,5%",  banco:"Bapro", plazo:4, tna:2.5,  moneda:"USD", hod1:6, hod2:0 },
  // ── La Pampa ─────────────────────────────────────────────────
  { id:"lapampa_ars_3", label:"La Pampa – Prendario ARS Con Subsidio 3 años TNA 35%", banco:"La Pampa", plazo:3, tna:35, moneda:"ARS", hod1:8, hod2:0 },
  // ── Macro ────────────────────────────────────────────────────
  { id:"macro_usd_3", label:"Macro – Prendario USD Con Subsidio 3 años TNA 4,5%", banco:"Macro", plazo:3, tna:4.5, moneda:"USD", hod1:10, hod2:0 },
  { id:"macro_usd_4", label:"Macro – Prendario USD Con Subsidio 4 años TNA 9,5%", banco:"Macro", plazo:4, tna:9.5, moneda:"USD", hod1:10, hod2:0 },
  // ── Patagonia ────────────────────────────────────────────────
  { id:"pat_usd_3", label:"Patagonia – Prendario USD Con Subsidio 3 años TNA 3,75%", banco:"Patagonia", plazo:3, tna:3.75, moneda:"USD", hod1:10, hod2:0 },
];

// Descuento Base por línea de producto (Boletín CNH Junio 2026) — usado solo para
// calcular el techo del "Desc. extra" (nunca puede perforar 15 puntos de Desc. Base)
const NH_DESC_BASE_LINEA = {
  tractores_chicos:   22,
  tractores_t7t8:     22,
  cosechadoras:       26,
  cabezales:          26,
  pulverizadores:     22,
  heno_forraje:       20,
  picadoras:          20,
  sembradoras:        20,
  cosechadoras_cana:  18,
  braud:              10,
};

const NH_DESC_EXTRA_PISO = 15;
// ─── DATOS DRON P150 ──────────────────────────────────────────
const DRON_DATA = {
  basic_revocast: {
    nombre: "Kit Básico + Revocast",
    contado:  { precioSIVA: 28600, precioFinal: 31600 },
    cheque:   { cuota: 21448, cuotas: 2, plazo: "180 y 360 días", moneda: "USD" },
    mutuo1:   { cuota: 16900, cuotas: 2, plazo: "180 y 360 días", moneda: "USD" },
    mutuo2:   { entrega: 10400, cuota: 6070, cuotas: 4, plazo: "c/6 meses", moneda: "USD" }
  },
  basic: {
    nombre: "Kit Básico",
    contado:  { precioSIVA: 26600, precioFinal: 29390 },
    cheque:   { cuota: 20047, cuotas: 2, plazo: "180 y 360 días", moneda: "USD" },
    mutuo1:   { cuota: 15800, cuotas: 2, plazo: "180 y 360 días", moneda: "USD" },
    mutuo2:   { entrega: 9728, cuota: 5674, cuotas: 4, plazo: "c/6 meses", moneda: "USD" }
  },
  full: {
    nombre: "Kit Full",
    contado:  { precioSIVA: 30500, precioFinal: 33700 },
    cheque:   { cuota: 23105, cuotas: 2, plazo: "180 y 360 días", moneda: "USD" },
    mutuo1:   { cuota: 18230, cuotas: 2, plazo: "180 y 360 días", moneda: "USD" },
    mutuo2:   { entrega: 11220, cuota: 6550, cuotas: 4, plazo: "c/6 meses", moneda: "USD" }
  }
};

// Precios ATF por tipo de tubo de descarga (s/IVA) — Lista N°181 (vig. 01/09/2026)
const ATF_OPCIONES_DESCARGA = {
  "ATF 12000": { sinfin: 28773345, noria: 33146894, sintubo: 26586571 },
  "ATF 17500": { sinfin: 35878724, noria: 41332290, sintubo: 33152000 },
  "ATF 26000": { sinfin: 45610169, noria: 51858000, sintubo: 43110000 }
};

const CONESE_CUBIERTA_USD = 130;

const CONESE_ALTA_FLOTACION_USD = 345;

const CONESE_SEL_OPC = {
  bomba:        { label:"Bomba Rossi p/gas-oil 50 lts/min (pico común, surtidor, filtro, 5 m manguera)", usd:1401 },
  cuentalitros: { label:"Cuentalitros 3 dígitos (Piusi)", usd:554 },
  luces_com:    { label:"Luces comunes", usd:137, grupo:"luces" },
  luces_led:    { label:"Luces LED", usd:261, grupo:"luces" }
};


// Flete COMOFRA por modelo (USD sin IVA, puesto en sucursal). Primer patrón que coincide con el modelo. Acordado con Charlie 03/11/2026.
const FLETES_COMOFRA = [
  [/TA-45/,                    2000], // autodescargable grande: 1 por camión
  [/^TA-/,                     1155], // autodescargables TA-17,5 a TA-38: 2 por camión
  [/MVD21|MV25/,               1155], // mixer vertical grande
  [/MV14/,                     1155], // mixer vertical 14
  [/MV6|MV10/,                  770], // mixer vertical chico: 3 por camión
  [/SF\/H14|SF\/H16/,          1155], // mixer horizontal 14-16: 2 por camión
  [/SF\/H6|SF\/H10/,            770], // mixer horizontal 6-10: 3 por camión
  [/ATF/,                      1155], // tolvas semilleras (12000, 17500 y 26000)
  [/BV-04|BV-05/,               578], // bateas chicas: 4 por camión
  [/BV-15/,                    2310], // batea grande: 1 por camión
  [/BV-/,                      1155], // bateas 7,5 y 9,5: 2 por camión
  [/Embolsadora|E-09/i,         550], // embolsadora
  [/ATAM|ACIS/,                 770], // acoplado rural y tanques: 3 por camión
];
