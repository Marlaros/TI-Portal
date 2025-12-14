const { createSource, addAttribute, addResource, addCombat } = require('../raceModifiers/shared');

const makeSource = (slug, name, manualPage) =>
  createSource(`spec-${slug}`, `Especialidad: ${name}`, manualPage);

const amazonSource = makeSource('amazonas', 'Amazonas', 812);
const assassinSource = makeSource('asesinos', 'Asesinos', 842);
const barbarianSource = makeSource('barbaros', 'Bárbaros', 864);
const berserkerSource = makeSource('berserker', 'Berserker', 890);
const knightSource = makeSource('caballeros', 'Caballeros', 916);
const bardSource = makeSource('bardos', 'Bardos', 830);
const hunterSource = makeSource('guardianes-del-bosque', 'Guardianes del bosque', 978);
const paladinSource = makeSource('paladines', 'Paladines', 1042);
const valkyrieSource = makeSource('valkirias', 'Valkirias', 1070);
const civilianSource = makeSource('civiles', 'Civiles', 934);
const clericSource = makeSource('clerigos', 'Clérigos', 956);
const corsairSource = makeSource('corsarios', 'Corsarios', 994);
const judgeSource = makeSource('jueces', 'Jueces', 1020);
const thiefSource = makeSource('ladrones', 'Ladrones', 870);
const fighterSource = makeSource('luchadores', 'Luchadores', 888);

const staticSpecialties = [
  /*
•		La amazona es una veloz guerrera que sorprende a sus enemigos en la batalla, a su vez, es más fuerte que muchos hombres y ya desde niña se entrena en el combate y todo tipo de actividades atléticas. Muchos años de sobrevivir a la intemperie la han curtido y forjado tanto en su exterior como en su interior. Gracias a esas dos virtudes, esta categoría obtiene +1 a (F), (R), (A) y (L).
•	La guerrera bonifica en 2 su Belleza.
•		La salvaje es una excelente guerrera que se desenvuelve muy bien con el arco y la lanza. Es por eso que tendrá una especialización gratuita en todos los tipos de lanzas y arcos.
•	La amazona comienza el juego con un estilo de lucha adicional, que debe ser Armas arrojadizas.
•		Su estilo de vida atlético y su dominio en jabalinas, lanzas y demás permiten a la guerrera comenzar con la ventaja Zancada espectacular. Al mismo tiempo tiene un excelente estado físico, óptimo para cualquier pueblo humano, que le permite correr con velocidad y acelerar en escasos segundos, obteniendo así también la ventaja Carga perfecta.
•		La amazona es intrépida, fuerte, y sobre todo expertas en el uso de crear venenos. Viene con 10 dardos envenenados que ha fabricado con los elementos autóctonos de sus tierras, cada uno provoca 5D10 PG (sumando los modificadores por estilo, nivel, etc.).
•	Comienza con la pericia Venenos, Supervivencia y Acrobacias y Equilibrio.
•	Veloz y arriesgada, la amazona obtendrá –1 a su Iniciativa en todos los niveles impares.
•	El personaje comenzará el juego con 2 PC adicionales.
•	A nivel 1 se obtendrán 5 PG de golpes extras.
•		Haciendo una tirada de (A) la guerrera podrá pasar por entre sus enemigos, evitando así ser rodeada. Por cada 5 sujetos rodeándola, tendrá un penalizador de –1 en su chequeo de (A). Una vez haya escapado, la amazona aparecerá detrás de alguno de sus atacantes, sin que estos puedan impedirlo con su Defensa ni demás. Es importante saber que salir de semejante acorralamiento no le consumirá acción alguna durante el turno porque es una acción espontánea.
•		La guerrera podrá engañar a sus enemigos al igual que lo hace con sus presas en plena jungla. Los que la observen creerán que se duplica y deberán chequear Rastreo menos el nivel de la valiente al comienzo de tal habilidad o caerán bajo semejante truco. La ilusión, si bien no estará quieta, no podrá emitir acción alguna, ni siquiera cambiar de sitio. El doble no se considerará mágico, y aquellos que no puedan ver no caerán jamás en la trampa. El duplicado dura toda la batalla y da +4 a Ar. La guerrera podrá realizar cualquier acción mientras. Esta ingeniosa peripecia se podrá realizar una vez al día cada tres niveles, aunque no podrán utilizarse dos duplicados al mismo tiempo. Sin embargo, semejante esfuerzo hará que, mientras la guerrera luche, tenga que gastar 1PC extra por turno.
Alineación: Las amazonas siguen a sus dioses y poco se involucran con lo que suceda fuera de su tribu. Shavaloon, Kalgoth y Keergal forjan una personalidad dura y severa, por ende la neutralidad es la mejor opción para estos personajes, sobre todo para poder representar el prejuicio hacia los hombres que no merezcan su respeto. También pueden ser buenas o malvadas.
*/
  {
    slug: 'amazonas',
    name: 'Amazonas',
    categoryName: 'Guerrero',
    short_description: 'Guerreras tribales devotas a Shavaloon.',
    description:
      'Veloz fuerza de choque integrada sólo por mujeres humanas. Forjadas en la selva, combinan jabalinas, acrobacias y tácticas de emboscada para desorientar a sus presas.',
    image_urls: [],
    allowed_races: ['Humanos', 'Semielfos'],
    modifiers: [
      {
        level: 1,
        modifiers: [
          addAttribute(amazonSource, 'fuerza', 1),
          addAttribute(amazonSource, 'resistencia', 1),
          addAttribute(amazonSource, 'agilidad', 1),
          addAttribute(amazonSource, 'liderazgo', 1),
          addAttribute(amazonSource, 'belleza', 2, 'Bonificación de 2 a la Belleza.'),
          addResource(amazonSource, 'pg', 5, 'PG adicionales al nivel 1.'),
          addResource(amazonSource, 'pc', 2, 'PC adicionales por su disciplina.'),
          addResource(amazonSource, 'weaponMastery', 'lanzas', 'Especialización gratuita en todas las lanzas.'),
          addResource(amazonSource, 'weaponMastery', 'arcos', 'Especialización gratuita en todos los arcos.'),
          addResource(amazonSource, 'fightingStyle', 'armas-arrojadizas', 'Estilo de lucha adicional en Armas arrojadizas.'),
          addResource(amazonSource, 'advantage', 'zancada-espectacular', 'Ventaja Zancada espectacular.'),
          addResource(amazonSource, 'advantage', 'carga-perfecta', 'Ventaja Carga perfecta.'),
          addResource(amazonSource, 'skill', 'venenos', 'Pericia gratuita en Venenos.'),
          addResource(amazonSource, 'skill', 'supervivencia', 'Pericia gratuita en Supervivencia.'),
          addResource(amazonSource, 'skill', 'acrobacias-y-equilibrio', 'Pericia gratuita en Acrobacias y Equilibrio.'),
          addCombat(amazonSource, 'iniciativa', 1, '-1 a la Iniciativa en todos los niveles impares.'),
          addResource(amazonSource, 'specialPerk', 'escape-encirclement', 'Habilidad especial para escapar de ser rodeada en combate.'),
          addResource(amazonSource, 'specialPerk', 'illusion-double', 'Habilidad especial para crear un duplicado ilusorio en combate.'),
          addResource(amazonSource, 'equipment', 'dardos-de-amazona', 'Comienza con 10 dardos envenenados que provocan 5D10 PG cada uno.')
        ]
      },
      {
        level: 3,
        modifiers: [
          addCombat(amazonSource, 'iniciativa', 1, '-1 a la Iniciativa en todos los niveles pares.')
        ]
      }
    ],
    allowed_alignments: ['Bueno', 'Neutral', 'Malvado']
  },
  {
    slug: 'asesinos',
    name: 'Asesinos',
    categoryName: 'Guerrero',
    short_description: 'Especialistas en sigilo, venenos y suplantación.',
    description:
      'Cohortes de alquimistas y verdugos que viven de la sombra. Se destacan por su agilidad imposible y el dominio absoluto de toxinas y disfraces.',
    image_urls: [],
    allowed_races: ['Humanos', 'Elfos', 'Semielfos'],
    modifiers: [
      addAttribute(assassinSource, 'agilidad', 2),
      addAttribute(assassinSource, 'inteligencia', 1),
      addCombat(assassinSource, 'alerta', 1),
      addCombat(assassinSource, 'climaTerrenos', 1),
      addCombat(assassinSource, 'detectarRuidos', 1),
      addCombat(assassinSource, 'detectarTrampas', 1),
      addCombat(assassinSource, 'observacion', 1),
      addCombat(assassinSource, 'orientacion', 1),
      addCombat(assassinSource, 'sospecha', 1),
      addCombat(assassinSource, 'rastreo', 1)
    ]
  },
  {
    slug: 'barbaros',
    name: 'Bárbaros',
    categoryName: 'Guerrero',
    short_description: 'Guerreros tribales curtidos por el frío y la batalla.',
    description:
      'Clanes nómadas que basan su cultura en la caza y los ritos de sangre. Prefieren la furia y la fuerza desmedida sobre la etiqueta de las cortes.',
    image_urls: [],
    allowed_races: ['Humanos'],
    modifiers: [
      addAttribute(barbarianSource, 'fuerza', 2),
      addAttribute(barbarianSource, 'resistencia', 2),
      addAttribute(barbarianSource, 'inteligencia', -1),
      addResource(barbarianSource, 'pg', 10, 'Reserva corporal superior.'),
      addCombat(barbarianSource, 'dano', 1, 'Golpes más potentes con armas de F.')
    ]
  },
  {
    slug: 'berserker',
    name: 'Berserker',
    categoryName: 'Guerrero',
    short_description: 'Portadores de la furia que todo lo arrasa.',
    description:
      'Campeones que canalizan traumas o entrenamientos extremos en estallidos de rabia. Sus músculos se tensan hasta romper acero cuando desatan el estado berserker.',
    image_urls: [],
    allowed_races: ['Humanos', 'Elfos'],
    modifiers: [
      addAttribute(berserkerSource, 'fuerza', 1),
      addAttribute(berserkerSource, 'resistencia', 1),
    ]
  },
  /*
   +2 en (L, su vida de en la nobleza y elegantes cortes le ha brindado cierta conducta. +1 a (I) por sus tutores y maestros que lo educaron durante su niñez.
•	Estos gloriosos gladiadores de elite comenzarán el juego con un poderoso caballo de guerra amaestrado, todas las armas en las que tenga especialización y sumará +20 a sus tiradas de dinero (honorarios). Dicho equipo fue provisto por su monarca.
•	El caballero comienza el juego con dos estilos de lucha, uno a elección y el otro es obligatoriamente el de Lucha Montada, que lo empleará a partir de nivel 1 y no a nivel 2.
•	También comenzará el juego con la pericia gratuita Leer y escribir y Diplomacias y Costumbres.
•	Las corazas de metal no restan PC a los caballeros, tampoco reducirán su (A).
•	Se especializa en un arma adicional gracias a su duro entrenamiento que ejecutó durante su crecimiento. Por lo tanto, a nivel 1 el personaje tendrá 3 especializaciones diferentes para elegir.
•	Al ser un guerrero bien entrenado hará 1 PG adicional por nivel cuando pelee con un arma en la que se especialice.
•	El caballero obtendrá la ventaja gratuita Protección a los daños críticos.
•	Este personaje posee buena carisma y aptitudes como líder a nivel alto, su confianza es capaz de alentar a otros, y por ello, bonificará en 1 el Ataque de todos sus aliados por cada dos puntos de (L) a partir de 16 inclusive. En caso de haber más de un caballero en el mismo grupo, se tendrá en cuenta sólo el (L) más elevado. Dicha virtud funciona a partir de nivel 5 y requerirá un control de Hablar a masas.
•	Todo caballero posee un tremendo poder de destrucción, no obstante, también es fuerte en la defensa, por lo tanto bonificará en 2 sus tiradas de (R) contra golpes críticos.
Alineación: El caballero es un personaje que trae mucha diversidad a la hora de elegir la alineación. Si se es bueno, se podrá demostrar cierto camino relacionado a lo paladinesco, si se es neutral, se obtendrá al típico noble que permite que se cometan crímenes siempre y cuando no lo perjudiquen a él, y si se es malvado, se tendrá nada más y nada menos que un señor corrupto y abusador de los débiles que no ve la hora de que muera su señor y hacerse con el poder.
*/
  {
    slug: 'caballeros',
    name: 'Caballeros',
    categoryName: 'Guerrero',
    short_description: 'Nobles guerreros al servicio de un rey o emperador.',
    description:
      'Soldados de élite que combinan educación, estrategia y poderío militar. Su honor y lealtad son tan firmes como las armaduras que portan.',
    image_urls: [],
    allowed_races: ['Humanos', 'Semielfos'],
    modifiers: [
      {
        level: 1,
        modifiers: [
          addAttribute(caballerosSource, 'inteligencia', 1),
          addAttribute(caballerosSource, 'liderazgo', 2),
          addResource(caballerosSource, 'MO', 20, 'Bonificación de 20 MO en tiradas de dinero (honorarios).'),
          addResource(caballerosSource, 'MP', 20, 'Bonificación de 20 MP en tiradas de dinero (honorarios).'),
          addResource(caballerosSource, 'MC', 20, 'Bonificación de 20 MC en tiradas de dinero (honorarios).'),
          addCombat(caballerosSource, 'danio', 1, '1 PG adicional por nivel cuando pelee con un arma en la que se especialice.'),
          addCombat(caballerosSource, 'resistenciaCriticos', 2, 'Bonificará en 2 sus tiradas de (R) contra golpes críticos.'),
          addResource(caballerosSource, 'advantage', 'repetir-tirada-de-r-contra-golpes-criticos', 'Protección a los daños críticos.'),
          addResource(caballerosSource, 'weaponMastery', 1, 'Especialización en un arma adicional.'),
          addResource(caballerosSource, 'skill', 'leer-y-escribir', 'Pericia gratuita Leer y escribir.'),
          addResource(caballerosSource, 'skill', 'diplomacias-y-costumbres', 'Pericia gratuita Diplomacias y Costumbres.'),
          addResource(caballerosSource, 'mount', 'caballo-de-guerra-amaestrado', 'Comenzará el juego con un poderoso caballo de guerra amaestrado.'),,
          addResource(caballerosSource, 'fightingStyle', 'lucha-montada', 'Comenzará el juego con el estilo de lucha Lucha Montada.'),
          addSpecialPerk(caballerosSource, 'ignoreHeavyArmorPenalty', true, 'Las corazas de metal no restan PC a los caballeros, tampoco reducirán su (A).')
        ]
      },
      {
        level: 5,
        modifiers: [
          addCombat(
            caballerosSource,
            'ataqueAliadosPorLiderazgo',
            1,
            'Bonificará en 1 el Ataque de todos sus aliados por cada dos puntos de (L) a partir de 16 inclusive.'
          )
        ]
      },
    ],
    allowed_alignments: ['Bueno', 'Neutral', 'Malvado']
  }
];

module.exports = {
  staticSpecialties
};



/* Reference from the manual */

/*

Categorías secundarias

La categoría secundaria es un título, una recompensa obtenida, una distinción de prestigio. Es un guerrero nacido en determinados parajes, un entrenamiento singular cuyo poder está muy lejos para la gente común.
Las categorías secundarias son una rama derivada de una categoría principal. Tantos guerreros como hechiceros poseen divisiones dentro de ellos que conforman la especialización a la que se dedicará un personaje.
Dentro de cada reino de Kalaguand se pueden encontrar montones de categorías secundarias, ya sean dentro de tierras salvajes o reinos conquistados por las distintas civilizaciones. Al haber tanta variedad de pueblos es común que se adopten costumbres de vida o de lucha muy cultivados, por lo que eso influye en las distintas habilidades de cada categoría secundaria. Independientemente de la nación de origen, a veces la raza del personaje influye en dicha elección, porque mientras algunas son más fuertes en ciertas áreas que otras, también existen categorías a las que algunas razas no pueden acceder.

Elegir una categoría secundaria
A la hora de escoger una categoría secundaria debes saber que sólo puedes elegir una, y a pesar de que hay montones para hacerlo, la elección debe ser premeditada y segura. Primero escoge una categoría principal (guerrero o hechicero), ya que las secundarias se derivan de éstas. Luego, una vez sabiendo a qué se dedicará tu personaje, deberás escogerle una especialización, que es la esencia de las categorías secundarias.
Lo poderoso de una categoría secundaria no es tan sólo una variante de guerrero, sino que las mismas otorgan increíble poder y personalidad al personaje, en la mayoría de los casos ésta es la fuerza que, junto a la raza, define el verdadero espíritu del PJ.

Guerreros: Los guerreros tienen muchas categorías secundarias para optar. La mayoría de las personas no practican la magia, por lo que su variedad es más amplia que la de los hechiceros. Todas las especializaciones
 
que se mostrarán a seguir se consideran guerreros a todos los efectos, por lo que obtendrán los beneficios de tales.
Para facilitar su lectura, las categorías secundarias se clasificarán por raza.

Humanos:
Amazonas: Estas son mujeres guerreras habitantes de tribus lejanas a los países civilizados. Mucha gente desconoce la existencia de dicha sociedad, pues la verdad que estas personas no gustan de los lugares superpoblados, aunque la presencia masculina es lo que evitan principalmente. El único contacto que tienen con el sexo opuesto es cuando ven la necesidad de reproducirse, y para ello largan expediciones de caza en busca de hombres.
Asesinos: Suelen pertenecer a cofradías secretas cuyo objetivo es la eliminación de personajes o criaturas con gran poder e influencia en determinada sociedad. Los asesinos suelen practicar técnicas oscuras, y si bien evitan los combates abiertos, son temidos a causa de lo efectivo que es su trabajo. Pocas personas pueden adquirir el servicio de semejantes personajes.
Bárbaros: Se tratan de comunidades nómadas cuyo estilo de vida dista del mundo civilizado. Los bárbaros son famosos por el espíritu salvaje que los domina, su brutalidad en combate es inigualable, y aunque no trabajan el metal, son personas que dedican su existencia al furor de las batallas.
Bardos: Si bien los juglares existen en todas las naciones fundadas, estos sujetos se separan del resto a causa de que practican la magia mediante el baile y la música. Cantan y recitan poemas para su público, el que casi siempre cae rendido a sus irresistibles encantos. Ídolos para algunos, bribones para otros, estos personajes son el máximo exponente de la belleza y carisma dentro de las Tierras Inmortales.
Berserker: Se trata de un selecto grupo de personas cuya fuente de poder es la ira. A diferencia de las tribus bárbaras, los guerreros berserker mayoritariamente vienen de naciones civilizadas y son entrenados por expertos en la milicia capaces de “domar” tan poderosos sentimientos. Los berserker destrozan a sus oponentes, ni siquiera se detienen cuándo este ha caído, sino que no paran de luchar, su furia es tal que la sangre alimenta sus deseos de matar.
Caballeros: Se les da el título de caballeros a aquellos bendecidos por la palabra de un rey o emperador. Estos educados personajes son el auge de la civilización humana y se rigen por la ley de su bandera. Aparte de intelectuales, estas personas también son soldados con entrenamiento superior, equipados con pesadas corazas y majestuosos corceles.
Cazarrecompensas: Son sujetos que luchan exclusivamente por dinero o trofeos. Habitan en todos lados y harán lo que sea por obtener un buen botín. No encuentran tiempo para hacer amigos, su carácter cínico quizás los señale como sujetos fríos, pero a fin de cuentas, quienes los contratan sólo buscan un servicio a realizar por manos profesionales.
Civiles: Se les dice así a aquellos individuos no son aventureros. Mercaderes, pescadores, granjeros y gente dedicada a las actividades económicas primarias y secundarias conforman este grupo. Esta categoría es indiscutiblemente la más débil de todas, no obstante, es muy interesante de jugar como paso previo a convertirse más adelante en otra de características más épicas.
Clérigos: Representando a su divinidad, estos personajes son los que han tomado la responsabilidad de expandir la palabra sagrada por todo el continente, desafiando a los más aterradores peligros. Expertos en las áreas de sanación y protección, son respetados y necesitados por cualquier territorio que visiten.
Corsarios: Aquellos piratas que recorren los océanos en busca de fama, tesoros y tierras legendarias son también los que causan terror al que oiga hablar de ellos. Los corsarios también pueden trabajar como la fuerza marina de algunos monarcas, pero sea como sea, dichos personajes son de los más diestros a la hora de emprender campañas marinas.
Guardianes del bosque: Sigilosos guerreros que cuidan a los bosques y a sus habitantes. Deslizándose de árbol en árbol, se camuflan con el entorno y emplean sus arcos con mortífera puntería hacia aquellos invasores que traigan consigo la violencia del fuego y el acero.
Jueces: En un mundo donde la magia es tan poderosa son necesarias leyes y condiciones para practicar tan peligroso arte. Los jueces tratan de guerreros capaces de controlar y juzgar a cualquier conjurador desmedido que albergue Kalaguand, encontrar objetos mágicos perdidos, expulsar a criaturas provenientes de otros planos y mantener u vínculos sanos entre los espíritus elementales y aquellos que los invocan.
Ladrones: Maestros del hurto, hacen temblar los corazones de todos aquellos hastiados de infinitas riquezas. Combinan una mezcla de elegancia y delincuencia que es de temer. Carismáticos y sumamente astutos, estos personajes son los especialistas del sigilo y la sorpresa.
Luchadores: Personajes muy versátiles adaptados para cualquier entorno o situación. Definitivamente los guerreros más populares y dispersos a lo largo de Kalaguand, y con un enorme repertorio de técnicas y habilidades, es imposible estereotiparlos.
 
Paladines: Muchos campeones siempre se preocuparon por defender el bien y la justicia, y los mejores guerreros para ejemplificar tal caso es el de los paladines, que siempre caminaron por el sendero de la verdad. De la mano de sacerdotes y valkirias, luchan contra las fuerzas oscuras y se ganan el corazón de la gente cuando lo hacen.
Valkirias: El amo del honor y la entereza ha elegido a un selecto grupo de mujeres para que guíen su mano hacia los más nobles guerreros muertos en la batalla. Conocidas como las esposas de Tarnus, éstas guerreras de alma pura manipulan martillos inquisidores hacia las hordas del mal a través de los amplios cielos.

Elfos:
Asesinos. Bardos.
Berserker: Sólo para elfos oscuros.
Civiles. Clérigos. Corsarios.
Guardianes del bosque.
Guerreros de la corte: La élite de los elfos. Como símbolo del orgullo y grandeza de la raza, estos personajes dominan simultáneamente la espada y la magia. Bajo las órdenes de su señor, esta unidad especial deambula a través de la realeza y trae con su imperiosa mirada el recuerdo de gloriosas épocas para su sufrido pueblo.
Guerreros elementales: Sujetos que combinan la magia de los elementos con la maestría de las armas. Son batalladores que obedecen a la madre elemental y que sólo aparecen en momentos de gran necesidad ya que su paradero siempre tiene lugar en elevados picos montañosos, territorios volcánicos, fríos glaciares o incluso en lejanos reinos subterráneos.
Jueces. Ladrones. Luchadores.
Marciales: Son guerreros expertos en el arte de la meditación y la lucha a través de milenarias técnicas desarrolladas por los elfos de antaño. Estos sujetos son raramente vistos, se especializan en la esquiva y el ataque a los puntos vitales de sus oponentes. Rápidos e imposibles de sorprender, son los guerreros que mayor explotan sus cinco sentidos a la hora de entablar un combate.
Cazarrecompensas.
Paladines (no aptos para elfos oscuros).
Pesadilla (sólo aptos para elfos oscuros): Creados solamente para contrarrestar el poder de la luz, siembran el pánico y el horror por donde sea que vayan. Defienden el mal y la tragedia, obligan a los débiles a someterse y emprenden terribles campañas para destruir a los defensores del bien.
Valkirias.

Semielfos: Amazonas. Asesinos. Bardos.
Berserker. Caballeros. Cazarrecompensas. Clérigos.
Civiles. Corsarios.
Guardianes del bosque. Guerreros elementales. Guerreros pesadilla.
Jueces. Ladrones. Luchadores. Marciales. Paladines. Valkirias.
Duendes: Bardos. Civiles. Clérigos.
 
Guardianes del bosque. Guerreros elementales.
Jinetes de águilas: Para defender sus tierras de invasores, los duendes han domado a feroces águilas y formaron escuadrones aéreos. De la mano de los elfos silvanos, custodian las arboledas druídicas y patrullan los rincones más inaccesibles de los bosques.
Ladrones. Luchadores.
Señores de las bestias: Los duendes son simpatizantes de la mayoría de animales y bestias existentes, y los invocadores de bestias son el mejor ejemplo de estos casos. Esta espectacular categoría se caracteriza por controlar, mediante extraños encantamientos, criaturas míticas y salvajes. Transforman sus cuerpos y adoptan técnicas de combate que representan distintos animales.
Enanos:
Maestro de armas: Estos especialistas en armas se enfocan únicamente en el poder de las hachas y martillos. Como armas maestras de las capitales enanas, obtienen el respeto de su gente y son un ejemplo para su raza. Fieros y determinados, son guerreros tajantes, que junto a su rudo carácter se convierten en oponentes extraños a los ojos de otros pueblos.
Berserker. Cazarrecompensas. Civiles.
Clérigos.
Defensores: Estos enanos actúan como los protectores de su nación y son invocados únicamente cuando se presentan peligros extremos. Trabajan bajo la corona real, aunque a veces también se encargan de custodiar personajes importantes. Similares a caballeros humanos, muestran imponentes corazas y armas portentosas, no sólo para imponer respeto, sino también para amedrentar a sus rivales.
Guerreros rúnicos: Aprenden el arte de las runas, las escriben, tallan y narran para así dominar la más antigua de las magias enanas. Personajes extraños y escasos, son un tesoro para su raza, ya que su poder alcanza los límites más extremos. A modo de sabios dentro de su pueblo, los guerreros rúnicos ocultan consigo los secretos arcanos más increíbles de las Tierras Inmortales.
Guerreros elementales.
Ingenieros: Con toda la sabiduría de sus eras doradas, los enanos aún siguen siendo expertos en el diseño, arquitectura e inventiva de túneles, mecanismos, trampas y demás. Requeridos en todo el globo, acumulan fácilmente riquezas y prestigio entre sus camaradas mientras reparan, pulen y fabrican infinidad de utilidades.
Ladrones. Luchadores. Valkirias.
Ogros:
Los ogros no poseen categorías secundarias como se lo explicó anteriormente, para cualquier duda consultar en la sección Razas y Modificadores, Ogros.
Hechiceros: Los magos no tienen una selección de categorías secundarias tan amplias como la de los guerreros, pero no por ello son menos poderosas. La magia elemental es la que divide a los distintos tipos de hechiceros dentro de Kalaguand, cada conjurador opta por uno de los cuatro elementos y forja un potente vínculo con dicho espíritu.
Todo hechicero, sea de escuela o de nacimiento (es independiente, ya que a nivel reglas ninguno presenta diferencia alguna en cuanto a su manejo), es un hechicero elemental y a continuación se detallará a cada uno de estos cuatro exponentes. Dicha lista no estará dividida por razas, ya que todas ellas tienen acceso a la hechicería (Ver Razas y modificadores, enanos y ogros).
Alquimistas (no apto para duendes): Los alquimistas son científicos únicos en su mundo y muy codiciados por personas adineradas. Trabajan las alteraciones físicas, metabólicas y manejan diferentes clases de extraños aparatos. Sus conocimientos son transmitidos de generación en generación, y debido a que necesitan materiales costosos para ejecutar sus experimentos y montones de libros, sólo pueden ser hallados en las naciones más importantes.
Magos de agua (no apto para enanos): Son conocidos por sus dotes de curación y restauración, aunque a diferencia de la magia clerical, sus poderes ofensivos no se ven opacados en ningún momento. Los magos de agua también son famosos por el enorme repertorio de conjuros psíquicos que manejan, la videncia y la adivinación, sus haces bajo la manga.
 
Magos de fuego: Expertos en el ataque, utilizan un juego agresivo y veloz. Como el elemento que dominan, son de modos impredecibles y acelerados, aunque no todo es ofensiva para ellos. Al utilizar el calor y el brillo del sol como su principal fuente de poder, también son buenos inquisidores y exorcistas.
Magos de Tierra: A diferencia de sus otros pares, los hechiceros terrestres se especializan en el combate cuerpo a cuerpo y se lanzan bravos a la batalla. Son expertos en la creación y alteración de las cosas, pero la mayoría de su extenso repertorio de conjuros está destinada a ellos mismos, ya que su magia se basa en la automejoración y potenciación de sus virtudes.
Magos de Viento (no apto para enanos): Los poetas de la magia, cantores cuya magia radica en su voz. Son expertos en el combate a distancia, y con dones únicos entre sus pares, tales como el vuelo, la invisibilidad y la teleportación, se muestran esquivos a la gente común. Muy populares entre los elfos.
Nigromantes (no apto para enanos y duendes): Estos maléficos seres drenan la magia desde el plano negativo y la utilizan para sus funestos propósitos. Se valen de la muerte y las artes oscuras para ejecutar sus rituales. Odiados y temidos a lo largo de todas las Tierras Inmortales, viven aislados del mundo, resucitando a los muertos y esclavizando sus agonizantes almas.

Modificadores y Reglas especiales de las Categorías Secundarias
Las clases secundarias que se mostrarán a continuación son exclusivamente para guerreros, si bien anteriormente se dio un breve resumen sobre cada una, ahora se las explicará en detalle. Las categorías para hechiceros y guerreros con magia, a causa de mayor complejidad, se presentarán más adelante, dentro de la sección de magia. Nuevamente se desarrollará una separación por raza.

Guerreros conjuradores: Si bien los hechiceros son maestros del dominio básico de los 4 elementos, muchas otras categorías son capaces de realizar magia. Clérigos, bardos, guerreros rúnicos o guerreros de la corte también conocen los secretos arcanos de Kalaguand, y aunque no se consideren hechiceros, sí son conjuradores. Por dicha razón es que estas clases de personajes serán detalladas más adelante, dentro de la sección Magia, y así facilitar la lectura de los mismos.

Humanos:
Amazona:
Ropajes y adornos: Este pueblo no se distingue por tener una de las civilizaciones más avanzadas, eso se refleja en sus ropas y vestidos. En su mayoría, usan solamente taparrabos y partes de tela que cubren sus partes. De vez en cuando tatúan sus cuerpos con elementos de la naturaleza o con la sangre de sus rivales. También son populares los aretes, las cabezas reducidas, símbolos religiosos y hasta faldas hechas de hojas o similares.
Forma de vida: Las tribus amazonas se conforman únicamente por mujeres devotas a Shavaloon que, pudieron haber nacido dentro de su misma comunidad o bien se convirtieron en miembros honorarios siendo ya adultas. Una matriarca lidera al grupo, esta suele ser una poderosa guerrera de edad avanzada que siempre es aconsejada por un séquito de sacerdotisas, una de Shavaloon, otra de Kalgoth y otra de Keergal. Nadie conoce bien el origen de este enorme grupo ni como se reproducen, pero es sabido que los dioses las alejaron del resto de las civilizaciones para que conmemoren por siempre el espíritu de la mujer humana, alejada del dominio falocéntrico que forjan los hombres. Extremas feministas no odian a los hombres, sobre todo si muestran honor y valor, no obstante no se muestran amigables con ellos al principio, y tampoco dejan que salgan de su pueblo con vida. Los niños no son discriminados por estas aguerridas féminas, tampoco los animales machos, ellas comprenden que es una sociedad y cultura la que corrompe la mente y el corazón.
Las amazonas son guerreras en su mayoría, pero aún así practican el combate sólo como deporte, como la arquería y la lucha libre, la caza y la pesca son algunas otras actividades típicas que ellas ejecutan. Pueden pasar bastante tiempo despiertas con tal de no perder el rastro de una presa, menos aún, si se trata de un hombre fugitivo.
Actitud: En general son ariscas y su carácter es frío con aquellos que no conocen, aunque con el tiempo se van acostumbrando a las circunstancias. Cuando consiguen hacer amistades, ellas las toman muy en serio, y harán lo que sea para defender a un amigo. Rara vez entablan vínculos positivos con alguien del género masculino.
Religión: Shavaloon es su líder, que las provee de hogar y alimento, pero no es raro que sirvan también ofrendas al dios de la sangre Kalgoth cuando un combate a gran escala se aproxima. Keergal también es un dios importante para las tribus amazonas.
Prejuicios: Las amazonas no tienen ningún odio con respecto a las otras razas, no obstante poseen cierto rencor a las personas del sexo masculino. Una amazona suele llegar a ser muy cruel con un hombre si ésta llegase a estar de mal humor en ese momento.
Reglas especiales:
 
•		La amazona es una veloz guerrera que sorprende a sus enemigos en la batalla, a su vez, es más fuerte que muchos hombres y ya desde niña se entrena en el combate y todo tipo de actividades atléticas. Muchos años de sobrevivir a la intemperie la han curtido y forjado tanto en su exterior como en su interior. Gracias a esas dos virtudes, esta categoría obtiene +1 a (F), (R), (A) y (L).
•	La guerrera bonifica en 2 su Belleza.
•		La salvaje es una excelente guerrera que se desenvuelve muy bien con el arco y la lanza. Es por eso que tendrá una especialización gratuita en todos los tipos de lanzas y arcos.
•	La amazona comienza el juego con un estilo de lucha adicional, que debe ser Armas arrojadizas.
•		Su estilo de vida atlético y su dominio en jabalinas, lanzas y demás permiten a la guerrera comenzar con la ventaja Zancada espectacular. Al mismo tiempo tiene un excelente estado físico, óptimo para cualquier pueblo humano, que le permite correr con velocidad y acelerar en escasos segundos, obteniendo así también la ventaja Carga perfecta.
•		La amazona es intrépida, fuerte, y sobre todo expertas en el uso de crear venenos. Viene con 10 dardos envenenados que ha fabricado con los elementos autóctonos de sus tierras, cada uno provoca 5D10 PG (sumando los modificadores por estilo, nivel, etc.).
•	Comienza con la pericia Venenos, Supervivencia y Acrobacias y Equilibrio.
•	Veloz y arriesgada, la amazona obtendrá –1 a su Iniciativa en todos los niveles impares.
•	El personaje comenzará el juego con 2 PC adicionales.
•	A nivel 1 se obtendrán 5 PG de golpes extras.
•		Haciendo una tirada de (A) la guerrera podrá pasar por entre sus enemigos, evitando así ser rodeada. Por cada 5 sujetos rodeándola, tendrá un penalizador de –1 en su chequeo de (A). Una vez haya escapado, la amazona aparecerá detrás de alguno de sus atacantes, sin que estos puedan impedirlo con su Defensa ni demás. Es importante saber que salir de semejante acorralamiento no le consumirá acción alguna durante el turno porque es una acción espontánea.
•		La guerrera podrá engañar a sus enemigos al igual que lo hace con sus presas en plena jungla. Los que la observen creerán que se duplica y deberán chequear Rastreo menos el nivel de la valiente al comienzo de tal habilidad o caerán bajo semejante truco. La ilusión, si bien no estará quieta, no podrá emitir acción alguna, ni siquiera cambiar de sitio. El doble no se considerará mágico, y aquellos que no puedan ver no caerán jamás en la trampa. El duplicado dura toda la batalla y da +4 a Ar. La guerrera podrá realizar cualquier acción mientras. Esta ingeniosa peripecia se podrá realizar una vez al día cada tres niveles, aunque no podrán utilizarse dos duplicados al mismo tiempo. Sin embargo, semejante esfuerzo hará que, mientras la guerrera luche, tenga que gastar 1PC extra por turno.
Alineación: Las amazonas siguen a sus dioses y poco se involucran con lo que suceda fuera de su tribu. Shavaloon, Kalgoth y Keergal forjan una personalidad dura y severa, por ende la neutralidad es la mejor opción para estos personajes, sobre todo para poder representar el prejuicio hacia los hombres que no merezcan su respeto. También pueden ser buenas o malvadas.
Tipo de aventuras: Es una categoría muy versátil, tan adaptada al combate cuerpo a cuerpo como a la distancia. Sin embargo sus bonificadores a la destreza y sus especializaciones en armas de corto alcance la hacen un excelente personaje para misiones furtivas, donde predomine la sorpresa y el acecho. Incluso en su medio habitual es común que se muevan entre la jungla y la maleza donde cazan sus presas para llevar el alimento a su tribu.
En sí lo que caracteriza a una amazona de otros personajes es el prejuicio que siente hacia los hombres que la rodean, quizás eso sea lo que más le cueste afrontar. Las naciones más civilizadas no son el mejor entorno para esta guerrera de la selva, quizás clérigos de Shavaloon, guerreros elementales y druidas que convivan con la naturaleza y los elementos le resulten más simpáticos. Los personajes femeninos no tendrán problemas con las tribus amazonas, incluso si muestran honor y valía pueden llegar a ser miembros honorarios de su comunidad.
Asesinos:
Ropajes y adornos: Una de las claves para convertirse en asesino es lograr ser sigiloso y nunca ser detectado por la víctima, por ende ropajes negros para caminar en la oscuridad son apropiados. Muchos realizan su trabajo de noche, capas, capuchas y máscaras también resultan ser atuendos comunes para este tipo de guerrero.
Forma de vida: Al igual que muchos mercenarios, los asesinos se ganan la vida llevando a cabo una serie de trabajos por dinero. Muchos reyes y magos los emplean para que eliminen a un rival poderoso. Algunos asesinos (no muy sanos mentalmente) matan simplemente por diversión, otros incluso pueden llegar a volverse adictos a cometer esta serie de fechorías.
Siempre hay un maestro que educa a estos siniestros individuos, ya que estudian y practican artes hace tiempo descubiertas, pero mantenidas en secreto por montones de gobiernos. Siempre el educador es alguien astuto y prudente, que mantiene su verdadera identidad oculta al resto de la comunidad.
Clases de anatomía, química, artes marciales, actuación y seducción son propias de tan vil categoría.
 
Actitud: La personalidad de los mismos también es variada. Estos pueden ser verdaderos carniceros o comportarse como verdaderos caballeros, tratarse de imbatibles seductores o demostrar una actitud hostil y antisocial. No hay un patrón único que encasille al bribón.
Reglas especiales:
•	+2 en (A), su vida de sigilos y misterios lo han hecho muy sensibles y susceptibles ante cualquier reflejo. También reciben +1 en si (I).
•	El asesino es experto en hallar el punto débil de sus enemigos, esto les da una gran ventaja: Cada tres niveles se obtendrá 1 número adicional en el D20 para poder infligir ataques críticos.
•	Aparte de hacer heridas graves con más facilidad, dará un penalizador de –1 al tirar el D6 en un golpe crítico, al definir efecto secundario del ataque.
•	También vienen con una especialización extra en dardos y cerbatanas.
•	Comenzarán el juego con las siguientes pericias: Venenos y Desactivar mecanismos.
•		Técnicas asesinas: El maestro de la muerte posee diferentes disciplinas que sólo un profesional es capaz de ejecutar, todas ellas únicamente capaz de realizarse una vez al día. A continuación se mostrará lo que sabe hacer este personaje:
1.	Golpe negro: El ladrón debe atacar a su enemigo estando éste de espaldas, y al asestar exitosamente el golpe, el personaje directamente provocará 5 PG por nivel (contando todos los modificadores correspondientes por (F), nivel, etc.) independientemente del daño del arma.
2.	Forma espectro: Haciendo una tirada de Concentración el asesino, junto con sus pertenencias, se transforma en una figura etérea capaz de ser atravesado únicamente por hechizos u objetos mágicos. De esta manera se podrán atravesar toda clase de objetos físicos, ya sean personas, muros, barrotes e incluso armas mundanas durante 1 minuto por nivel. El bribón no podrá dañar a nadie tampoco hasta eliminar semejante estado de su persona.
3.	Ocultación: Con una tirada de (A) el personaje se torna literalmente invisible, sólo podrá ser detectado por olores o ruidos. De todas formas, un movimiento brusco, llevar a cabo un ataque, un conjuro u otra de las Técnicas asesinas también anularán Ocultación. Dicha destreza durará 10 minutos.
4.	Máscara de la muerte: Si un asesino elimina a un ser vivo humanoide, éste podrá adoptar la forma de la misma, incluyendo su equipo mundano, voz y sombra, aunque no su olor. La ilusión será un efecto visual, pero los movimientos bruscos no delatarán al siniestro. Dicha peripecia dura hasta 1h por nivel y se puede utilizar con un cadáver que haya muerto hace 1 día como máximo.
•		Venenos: Un experto en el tema es capaz de producir los venenos más peligrosos, y mientras más poderoso es el sujeto, mayores efectos tendrán sus fórmulas. Este personaje tendrá su “equipo personal de venenos”, con dicho inventario podrá fabricar sus toxinas que irá desarrollando en distintos niveles. Para utilizarlos simplemente habrá que untarlos sobre el arma y rendirán un ataque, luego de ello, el asesino necesitará esperar al día siguiente para volver a utilizar la misma sustancia (por lo tanto, cada tóxico puede implementarse una vez cada 24 horas). Los venenos son tan poderosos que no permiten tirada de (R) a las víctimas, aunque afectan a blancos de hasta 100kg por nivel del usuario. Los siguientes son:
Nivel 1: Se elimina todo bonificador por (F) y (A) que tenga el enemigo durante toda la batalla.
Nivel 3: El daño que reciba la víctima durante todo el combate se potencia en 5 PG adicionales.
Nivel 5: El objetivo se debilita, perdiendo instantáneamente 50 PE/PF. Si el blanco no poseyera la energía requerida deberá invertir sus propios PG como si estuviese utilizando una técnica de hechiceros, siendo así capaz de perder la vida.
Nivel 7: El veneno quita 4D4 PC al objetivo.
Nivel 9: La víctima no podrá lanzar hechizos que no sean psíquicos durante 1D4 turnos, de no tratarse de un conjurador, éste perderá 1D2 ataques durante toda la batalla.
Habilidades: Estos sujetos obtienen +1 en las habilidades de (P).
Alineación: El asesino está imposibilitado a poseer una buena alienación. Alguien cobarde puede ser bueno, pero alguien que envenena a muerte, apuñala por la espalda a sangre fría, trabaja para siniestros sujetos y mata a quien se le diga que mata puede ser sólo malvado o neutral.
Tipo de aventuras: No es fácil integrar a un asesino a un grupo de aventureros debido a que su estilo de juego y sus diferentes habilidades tienen una connotación bastante individual. Es una buena opción para aventuras de a uno o solitarias, de todas formas congenia muy bien con otros bribones tales como bardos, ladrones, ingenieros y personajes malvados.
El campo abierto no es el mejor entorno para jugar y dirigir a un asesino, sus mejores talentos son para emboscar y ocultarse en lugares cerrados tales como habitaciones, recovecos, escaleras y rincones oscuros. Un oponente poderoso y saludable representa un verdadero peligro para este guerrero marcial, en cambio si lograra sorprenderlo y atacarlo una vez debilitado el panorama le resultaría favorable para ejecutar su cometido.
Bárbaros:
 
Ropajes y adornos: Unas pieles, una buena espada, y un aspecto temible es todo lo que desearía cualquier bárbaro. No viven en sociedades muy avanzadas, no se preocupan demasiado por tener una apariencia aceptable respecto a otras culturas., no obstante algún que otro individuo utiliza huesos o tatuajes para tener un aspecto temible.
Forma de vida: Viven de la caza, la pesca y de la lucha. Esto a su vez ha logrado que sus poblaciones comiencen a menguar. Sus pueblos y aldeas son cada vez más reducidos. Habitan cerca de las llanuras y las montañas, gustan de largas cabalgatas, y varios bárbaros llevan una vida de viajes, dedicados a realizar grandes proezas.
Religión: Los bárbaros obedecen a Kalgoth, el dios de la batalla, aman el combate y desde niños guerrean entre sí para demostrar quién es el más fuerte. Sin embargo algunas tribus rinden culto al dios pero no son despiadados ni crueles, sino que le rezan en momentos de necesidad o urgencia. Shavaloon es la otra religión que tanto practican los bárbaros ya que aman la libertad y se comunican muy bien con los espíritus elementales, tales como el sol, el viento y la nieve. Son shamanes los que guían espiritualmente a estas personas.
Actitud: Son seres callados, desconfían de los que no son como ellos. Al guerrear lo hacen con fervor, y a menudo llevan a cabo sangrientos rituales, como degollar el cadáver de su enemigo, o descuartizarlo antes de morir. Tampoco debe tomarse a estos individuos como monstruos despiadados, los bárbaros sólo serán brutales con alguien que no los respete o los moleste.
Religión: En la mayoría de las tribus bárbaras se rinde culto a dos deidades con vínculos neutrales entre sí, los que son Kalgoth y Shavaloon. Uno trae poder a los guerreros a la hora de batallar, mientras que la otra abastece con agua y alimento a los que conforman el grupo.
Prejuicios: No simpatizan de ninguna raza que no sea humana. Tanto enanos como elfos, semielfos, etc, son seres extraños que practican la brujería y hechicería de las que los bárbaros desconfían. Tardan en hacer amistades con los extraños, y no demuestran su afecto a menos que el otro pruebe su coraje y lealtad.
Reglas especiales:
•		Un bárbaro desarrolla su cuerpo como pocos humanos, es por eso que eleva en 2 su (F) y (R), pero al vivir en una cultura tan subdesarrollada y cerrada en sí misma obtiene poca información acerca de lo que conocimiento se trata, volviéndose ingenuo y un lento. Penaliza en 1 su (I).
•		Aunque los bárbaros no sean tontos, su civilización parecería no avanzar y sus valores materiales significan poco para los otros pueblos, es por eso que se obtendrá –30 a su categoría social. Es de importancia saber que los bárbaros no tienen esclavos, lo único que toman son prisioneros de guerra.
•		No está acostumbrado a llevar demasiado metal sobre su cuerpo, ya que no lo trabajan ni lo puede comprar. Le incomoda emplear armaduras pesadas o hechas de metal, si lo hace tendrá diversas penalizaciones (consultar al DJ). Sólo podrá emplear las siguientes protecciones: armadura de pieles, acolchada, de cuero, cuero con tachas, cuero endurecido, cuero endurecido con tachas y cota de mallas.
•		Muchos bárbaros establecen relaciones con las tribus vecinas de ogros, intercambian animales y armas. Debido a ese vínculo entre ambos pueblos, los bárbaros están capacitados para usar armas de ogros normalmente.
•		La curtida piel del bárbaro se ha vuelto resistente a bruscos cambios de temperaturas y agresiones físicas, posee varios callos y cicatrices que no parecen querer abrirse. Un sujeto así, habituado a roces y golpes constantes puede fruncir todos sus músculos simultáneamente y reducir en 1 PG todo golpe recibido.
•		Además de soportar mejor una herida, estos combatientes son de contextura más robusta que la mayoría de las demás personas, he de ahí que comiencen el juego con 10 PG adicionales.
•	Comenzarán el juego con la ventaja Anular un ataque recibido.
•		Furia asesina: El bárbaro tiene una frecuente tendencia a enfurecerse durante las batallas, sobre todo si está perdiendo, ya que se saca de quicio con facilidad. El jugador podrá chequear Concentración (sin perder acción alguna durante su turno) y en el siguiente turno entrar en Furia Asesina hasta que muera su oponente, por lo que tendrá un ataque adicional, aunque gastará 2 PC por turno (podría llegar a morir de agotamiento). Si lo desea además, se podrán utilizar 4 PC para efectuar un golpe extra como lo hacen todos los otros personajes. El control de Concentración puede efectuarse tantos turnos como se desee hasta tener éxito, no obstante se puede entrar en Furia Asesina una sola vez por día.
•	Con cualquier arma cuyo daño se vea modificado por (F), el bárbaro hará +1 a daño.
•		Veneración a su dios (Shavaloon o Kalgoth): Los chamanes de las tribus bárbaras rezan y hacen plegarias para que sus guerreros obtengan la gloria durante un combate. Pintan los cuerpos de los salvajes con tatuajes protectores que otorgan 3 puntos de Ar mágica a estos y además, potencian sus PG en 2 por nivel.
•		El choque constante de la civilización hacia la cultura bárbara ha provocado que éstos odien a los personajes caballeros, que son su máximo exponente.
•	Para ellos, la pericia Leer y escribir les costará el doble ya que son lentos en dicho campo.
Alineación: No se orientan hacia ningún bando en particular. Es verdad que son bastantes salvajes y bestiales, pero pueden ser buenos, neutrales y malvados.
 
Tipo de aventuras: Todos los bárbaros saben pescar, cazar, nadar y cabalgar, no obstante el que es un aventurero parte para combatir, demostrar honra y valentía, no lo hace con clase y sigilo, sino que se muestra bestial y poderoso. Invocando a sus dioses y promoviendo el combate desprecian a los débiles y no respetan al más listo sino al más bravo.
Ciudades y lugares civilizados son la contra de este guerrero, países como Northland o Amara no son de su agrada ni mucho menos sus soldados que durante años han tomado sus tierras a la fuerza. Un bárbaro no se sentirá cómodo en semejante entorno y por ende podría sentirse presionado y estallar en un lugar así, incluso las aventuras de ingenio o que requieran mucha plática podrían lograr el mismo resultado. Llanuras, planicies, estepas, desiertos y lugares abiertos harán que el guerrero se sienta en paz.

Berserker:
Ropajes y adornos: Estos personajes son realmente exagerados en términos de apariencia, a veces en sus cuerpos, llevan colgando las cabezas de sus víctimas. Los aretes y brazaletes con púas son comunes para estos individuos y toda una actitud agresiva. Pueden también lucir trenzas con sus barbas y crestas en sus cabezas. Usan ropas sueltas, dejando muchas veces su torso desnudo que les da más comodidad para la batalla.
Forma de vida: Una persona puede ser berserker por dos motivos, que pueden derivarse de un intensísimo entrenamiento a las que pocas personas sobreviven o a causa de una situación traumática. Aquellos que han sido entrenados no conocen otro motivo en su vida que no sea luchar y combatir, por ende es normal que se demuestren agresivos y camorreros, buscarán pelear en cualquier momento aunque la situación represente un gran peligro para ellos o su grupo. Para este tipo de gente el entrenar es una constante y destruir a un adversario es todo lo que importa, son buenos mercenarios y bravucones pagados. Los que se han vuelto berserkers a causa de un shock (presenciar una matanza, un susto terrible del que jamás se han recuperado, un odio incontrolable que sólo exige venganza, torturas, etc.) actúan como personas normales la mayor parte del tiempo, sin embargo en situaciones de extremo peligro o de arrinconamiento la furia del personaje estalla y desata su verdadero poder como si fuera energía incontenible. Este tipo de gente ejecuta su vida ordinaria evitando tener un estallido rabia cerca de sus seres queridos.
Religión: Es raro que un berserker siga fielmente a un clero, pero algunos suelen adorar a Kalgoth, una de las pocas entidades en Las Tierras Inmortales que podría aprobar la naturaleza de tan violento ser.
Actitud: Como se ha dicho anteriormente estas personas tienen un temperamento salvaje y sanguinario, muchos les consideran incivilizados. Gustan de la sangre y el entrechocar del metal. No obstante, se sabe que estos luchadores pueden ser gente educada y reconocida que sólo hace estallar su furia a la hora de la mascare, incluso muchos usan dicha estrategia para que sus enemigos le consideren más débil.
Reglas especiales:
•	Esta feroz máquina de batalla comienza teniendo +1 a (F) y (R).
•		Inmune a la psicología. Está entrenado para el combate, nada de sentimentalismos, aunque si el personaje es un enano mantendrá vigente su odio hacia dragones y pieles verdes.
•		Esta clase de luchador puede entrar en un estado de locura temporal cuando se desee, para ello, habrá que chequear Concentración (no ocupará acción alguna durante el turno), de tener éxito se entrará bajo estado berserker. A continuación se darán a conocer las consecuencias del estado berserker:
o	Los músculos se inflan y montones de venas se hinchan casi hasta el punto de reventar. El empuje en el arma del loco a la hora de golpear es tan poderoso que duplicará su modificador al daño por (F) cuando luche en combate cuerpo a cuerpo (sólo se duplicará el modificador por (F)).
o	Además, sus ataques parecen una tremenda lluvia de hachas y espadas que se mueven a una velocidad aterradora para sus enemigos, obteniendo –1 a su iniciativa por nivel impar.
o	Penaliza en –2 la Defensa del oponente.
o	Golpes fuertes, certeros, perfectos. Esto trae como consecuencia que el berserker de –1 a (R) en la tirada contra críticos a sus víctimas.
o	Durante la batalla, todos los que quieran efectuar un disparo o conjuro que requiera Disparos contra este guerrero, tendrán –4 a su tirada ya que éste se está moviendo a gran velocidad.
o	Una de las consecuencias que trae la conversión a berserker en dicho guerrero es que su poder aumenta mientras más daño se reciba, es por eso que por cada 15 PG que se reciban el combatiente obtendrá un ataque adicional en lucha cuerpo a cuerpo. Se tomarán en cuenta también las heridas de la coraza que se vista y las sufridas antes de entrar en estado berserker. No se gastarán PC adicionales.
o	Este singular combatiente es capaz de luchar si ya no le queden energías, dándolo todo hasta el final. Aunque éste se encuentre en “0” PG (propios, no de la armadura) seguirá combatiendo normalmente, pero al llegar a –1 caerá como el resto de los personajes. Es importante que tan tétrica situación los rivales hagan un chequeo contra Miedo.
o	Como se ha visto, semejante locura no da conciencia al personaje de lo que está pasando en el momento. Si el luchador entra en estado berserker será incapaz de emplear la pericia Amagues, Sorprender y la ventaja Estrategia.
 
o	El berserker presta muy poca atención a su protección personal, sólo le interesa atacar y queda cegado por dicha furia. A su tirada de Defensa esta categoría tiene -6
o	Siempre y cuando no esté solo, y además, haya acabado con sus oponentes, el descarriado continuará atacando a sus aliados o animales más cercanos en representación de su ira sin control. Para frenarse, deberá realizar una tirada de (L) por turno hasta que tenga éxito.
Alineación: Un berserker sólo puede destruir todo a su paso, incluso a sus seres queridos siempre es neutral o malvado.
Tipo de aventuras: Esta categoría a diferencia de bribones y algunos lanzadores de conjuros están diseñados únicamente para combatir y destrozar todo lo que se le atraviesa por su camino, por lo tanto situaciones de ingenio o que requieran muchas tiradas de (P) o uso de pericias no permitirán que se luzca. Ante todo peligro que pueda ser superado con un arma el berserker no fallará, lo que sí hay que tener en cuenta que su mayor ventaja (la gran cantidad de ataques que puede dar) es proporcionada de manera tardía y a coste de perder la vida.
El DJ puede de todas formas crear una campaña profunda para el bravo guerrero si este es berserker a causa de una citación traumática, mediante sueños y recuerdos se puede dar una historia interesante que ayude a definir la identidad del personaje o a intentar luchar con aquellos impulsos tan fuertes a los que se ve sometido cuando combate.

Caballeros:
Ropajes y adornos: Depende de la situación. En la batalla emplean poderosas armas y armaduras. Van a la guerra con grandes caballos y se transforman en verdaderas amenazas para sus rivales. En la vida cotidiana, usan ropas costosas, no hay que olvidarse que pertenecen a la nobleza. Muchas veces llevan en sus ropajes y escudos del emblema del rey al cual sirven y protegen.
Forma de vida: Muchas veces los caballeros se ven o se sienten atados a la tierra que pertenecen. No salen mucho de su reino, así pueden proteger a su amo de cualquier mal. Se ganan el dinero cumpliendo órdenes de sus capitanes, o quizás rescatando a una doncella en peligro. También es necesario recordar que no todos los caballeros son amables y bondadosos. Existen los que son avaros y egoístas, que piensan que los pobres y los desvalidos son simplemente escorias. Obedecen y cumplen las órdenes de su señor para ganar su simpatía y acercarse poco a poco al trono.
Actitud: Un caballero se regirá siempre por las leyes establecidas en sus dominios. No les está permitido contradecir a su señor, y obedecerán siempre sus mandatos. Un caballero puede ser también un ser horrible escondido tras la máscara del leal guerrero. Muchos actúan de ésta manera, y obviamente son precavidos, y escogen a sus aliados con mucho cuidado.
Reglas especiales:
• +2 en (L, su vida de en la nobleza y elegantes cortes le ha brindado cierta conducta. +1 a (I) por sus tutores y maestros que lo educaron durante su niñez.
•	Estos gloriosos gladiadores de elite comenzarán el juego con un poderoso caballo de guerra amaestrado, todas las armas en las que tenga especialización y sumará +20 a sus tiradas de dinero (honorarios). Dicho equipo fue provisto por su monarca.
•	El caballero comienza el juego con dos estilos de lucha, uno a elección y el otro es obligatoriamente el de Lucha Montada, que lo empleará a partir de nivel 1 y no a nivel 2.
•	También comenzará el juego con la pericia gratuita Leer y escribir y Diplomacias y Costumbres.
•	Las corazas de metal no restan PC a los caballeros, tampoco reducirán su (A).
•	Se especializa en un arma adicional gracias a su duro entrenamiento que ejecutó durante su crecimiento. Por lo tanto, a nivel 1 el personaje tendrá 3 especializaciones diferentes para elegir.
•	Al ser un guerrero bien entrenado hará 1 PG adicional por nivel cuando pelee con un arma en la que se especialice.
•	El caballero obtendrá la ventaja gratuita Protección a los daños críticos.
•	Este personaje posee buena carisma y aptitudes como líder a nivel alto, su confianza es capaz de alentar a otros, y por ello, bonificará en 1 el Ataque de todos sus aliados por cada dos puntos de (L) a partir de 16 inclusive. En caso de haber más de un caballero en el mismo grupo, se tendrá en cuenta sólo el (L) más elevado. Dicha virtud funciona a partir de nivel 5 y requerirá un control de Hablar a masas.
•	Todo caballero posee un tremendo poder de destrucción, no obstante, también es fuerte en la defensa, por lo tanto bonificará en 2 sus tiradas de (R) contra golpes críticos.
Alineación: El caballero es un personaje que trae mucha diversidad a la hora de elegir la alineación. Si se es bueno, se podrá demostrar cierto camino relacionado a lo paladinesco, si se es neutral, se obtendrá al típico noble que permite que se cometan crímenes siempre y cuando no lo perjudiquen a él, y si se es malvado, se tendrá nada más y nada menos que un señor corrupto y abusador de los débiles que no ve la hora de que muera su señor y hacerse con el poder.
 
Cazarrecompensas:
Ropajes y adornos: Los cazarrecompensas son de lo más variados en este aspecto. Muchos gustan mostrar grandes cicatrices y mucho armamento que demuestran sus años de experiencia, otros disfrutan usando ropajes ostentosos y aretes dorados, o complicados collares, indicando que hacen bien su trabajo y tienen dinero para comprar objetos lujosos.
Forma de vida: Un cazarrecompensas hará todo lo que sea por un botín. Muchos viajan de lugar en lugar buscando un trabajo que llevar a cabo. La mayoría son simples bucaneros o grandes mastodontes encargados de matar y matar, otros poseen una mente inteligente como asesinos especializados o antiguos generales exiliados. Actitud: Muchos de estos hombres, o más bien la mayoría, dan a mostrar un aspecto profesional, algunos sólo se concentran en su trabajo, obviando cualquier amistad o sentimiento sobre otras personas. Son bastante duros y codiciosos, pero ocultarán esto con tal de ser tomados en cuenta.
Reglas especiales:
•		La presencia e influencia que ejerce un cazarrecompensas sobre quienes le rodean es indispensable para que lo contraten , es por eso que obtiene +2 a (L), mientras que posee +1 a (I) por la variada cantidad de armas, estilos de lucha, información, rumores e infinidad de trucos que aprende diariamente.
•		Un cazarrecompensas es un guerrero veterano con acceso al mejor y más variado armamento, sabe cómo usar todas las armas convencionales y dónde conseguirlas a buen precio. Cuando comience el juego, en vez de especializarse sólo en dos grupos de armas podrá hacerlo en cuatro.
•		Este ingenioso trotamundos ocupa gran parte de sus viajes conociendo a los guerreros más impresionantes, al mismo tiempo, aprende de ellos. Un cazarrecompensas sabe dos estilos de lucha a nivel 1, lo que le da gran ventaja sobre un guerrero convencional.
•		Debido a su naturaleza armamentista, comenzará el juego con una armadura de cuero endurecido con tachas y con todas las armas en la que se especialice (a menos que se compre alguna otra antes de empezar si le alcanzan las monedas, puede cambiar este equipo por dinero si lo desea).
•		Los cazarrecompensas poseen excelentes fuentes de información, se codean con los comerciantes más astutos, seducen a las cortesanas más bellas y aprenden los trucos de los villanos más astutos. Conocen bien a la gente y saben como comportarse ante cualquier circunstancia. Tales aptitudes le permite tener gratuitamente la pericia Leyendas y Mitos, Tazar, Rumores, Apuestas y juegos y además 2 idiomas.
•		Una forma de representar la infinidad de “trabajillos” que el cazarrecompensas ha llevado a cabo con anterioridad es la manera en la que incrementa su dinero. Cuando el jugador realice la tirada para determinar el dinero inicial utilizará 3D6 para las Mc, 2D6 Mp, mientras que para las Mo empleará otro 2D4.
•		Los cazarrecompensas consiguen información variada en diferentes partes del mundo, la obtienen de mercaderes, comerciantes u otros guerreros. Conocen sobre monstruos legendarios y criaturas famosas que son específicas de cada región, por lo tanto cada vez que luchen contra seres del tipo “Monstruo” (consultar con el DJ) bonificarán en 5 su modificador al daño.
•		Al conocer bien a sus objetivos los cazarrecompenzas pueden obviar la habilidad “Ignorar defensa”, que muchas veces proviene de monstruos y criaturas legendarias. Por lo tanto éste podrá aprovechar cualquier tipo de esquiva o parada ante las agresiones del oponente.
•		Todos los campeones de esta índole son bastante versátiles y adaptables a su forma de vida y más que nada al combate. Un sujeto cualquiera obtiene 5 puntos de ventaja al ascender de nivel, pero un cazarrecompensas obtiene 7. Lo mismo sucede con las pericias, en vez de ganar 4 por nivel ganará 5 (sumado a demás modificadores).
•		La admiración de sus colegas y la autoconfianza son imprescindibles para este tipo de luchador cuyas habilidades dependen mucho de su carisma. Por cada punto a partir de (L) 15 el mercenario bonificará en +1 su tirada de Ataque y Disparos.
•		Este personaje posee buena carisma y aptitudes como líder a nivel alto, su confianza es capaz de alentar a otros, y por ello, bonificará en 1 el Ataque de todos sus aliados por cada dos puntos de (L) a partir de 16 inclusive. En caso de haber más de un mercenario en el mismo grupo, se tendrá en cuenta sólo el (L) más elevado. Dicha virtud funciona a partir de nivel 5 y requerirá un control de Hablar a masas.
Alineación: Los mercenarios no tienen ninguna restricción a su comportamiento, y aunque en su mayoría son neutrales, pueden ser también malvados o buenos.
Civiles:
Ropajes y adornos: - Forma de vida: - Actitud: -
Reglas especiales:
•	El civil sólo se especializa en un único tipo de armas a nivel 1.
•	Al comenzar el juego obtiene 5 puntos menos de ventajas.
 
•	El personaje posee 10 puntos adicionales de pericias al empezar el juego.
•		Los civiles se ven influenciados por el medio en el que se rodean, y dependiendo la profesión o estatus social (representado con el porcentaje) de cada uno poseen diferentes destrezas. Es por ello, que el jugador tendrá que usar una de las siguientes subcategorías para crear a su personaje, todos con distintas características.
Noble (100%-80%): Una persona de la realeza triplicará sus tiradas de dinero, comenzará el juego con las pericias Leer/Escribir y Diplomacias y costumbres. +1 a su todas sus habilidades de (L).
Comerciante (79%-60%): Esta categoría obtiene +30 a sus tiradas de Mc, +20 a las Mp y +10 a las Mo. Posee las pericias gratuitas de Apuestas y juegos y Rumores y Profesión/Pasatiempo y podrá comenzar el juego con 3 idiomas a elección de la siguiente lista: humanos (varios), elfo, elfo silvano, enano e inframundo. +1 a las tiradas de (P).
Plebeyo (59%-16%): El plebeyo recibe +1 en las habilidades de (L) y (P), pero -1 en su tirada de (I), comienza el juego con la pericia Profesión/Pasatiempo.

Corsario:
Ropajes y adornos: Túnicas y sombreros para vestir en el mar son el atavío de estos guerreros. Mangas decoradas, cuellos lujosos y botas largas son característicos de estos caballeros del mar destinados a ser capitanes de una embarcación. Aquellos más bravos y de mayor experiencia suelen utilizar garfios, patas de palo y hasta un parche en uno de sus ojos. El cabello largo y la barba son muy corriente entre este tipo de gente.
Forma de vida: Un corsario trabaja siempre para un país o nación, y sólo aquellas que son potencias marítimas pueden costear su entrenamiento. La fidelidad hacia su monarca es total y consideran enemigos a todos aquellos que se revelen a las leyes que éste imponga. Toda su carrera está dedicada al mar, y allí es donde este militar pasa la mayor parte del tiempo, pactando con otros oficiales, persiguiendo a piratas y descubriendo territorios desconocidos.
Actitud: El corsario es un guerrero de clase alta que ve al resto de los marinos como posibles servidores, pacta muy bien con caballeros y nobles que sepan de política y comercio. Detesta a muerte a los piratas y contrabandistas que hacen del mar un lugar peligroso, tampoco presta demasiada atención a la gente “común” con la que se topa en sus incontables viajes a tierras extrañas.
Reglas especiales:
•		Para llegar a ser un corsario es necesario tener mucho carácter y todas las habilidades necesarias como para comandar un navío en el futuro, por ello el personaje bonifica en 1 su (L). Años en altamar le han permitido a este personaje conocer a muchísimas personas, culturas y creencias, su (P) se bonifica en 1. La rapidez de movimiento y reacción también son vitales para un personaje sumamente multifacético en altamar, por lo tanto tiene +1 a su (A).
•	El corsario bonifica en 2 sus tiradas de Clima/Terrenos, Orientación, Negociar/Rogar y Hablar a Masas.
•		Su voz y comando son las armas principales que necesita para llevar a cabo sus tareas, así que por cada punto superior a 13 (inclusive) en su (L) el personaje obtendrá 1 punto adicional de ventajas.
•	El personaje comienza con la pericia Navegación, y además bonifica a esta en 2.
•		La forma de desenvolverse del corsario requiere gracia y agilidad, sobre todo en el combate en altamar donde no se puede estar sobre un terreno firme. El personaje comienza con la pericia Acrobacias y equilibrio.
•		Su sabiduría y capacidad para pactar con otras personas le han otorgado la pericia Apuestas y juegos. También comenzará con Leyendas y mitos, Rumores y Supervivencia, pero estas dos pericias podrá utilizarlas únicamente cuando esté en determinadas situaciones ya que la mayor parte de su vida la ha dedicado al mar. Estos son los momentos en los que puede utilizarlas:
1.	Estando sobre una embarcación.
2.	Estando en el agua.
3.	Estando cerca de terreno costero (como una isla, un puerto, etc.).
4.	Cuando pacte con gente o un pueblo de costumbres marítimas.
Si el personaje quisiera elegir las pericias Rumores y Supervivencia nuevamente para utilizarlas en cualquier circunstancia deberá volver a invertir puntos en ellas, aunque le costarán 1 punto más baratas.
•	Al ser muchas veces un capitán o embajador éste debe comportarse como un hombre educado y correcto. El corsario comienza con la pericia Leer y escribir, además podrá escoger un Idioma a elección.
•	Su buena posición económica le da +10 a sus tiradas de dinero.
•		Esta categoría honra a su nación y monarca, éste a cambio le recompensa por sus servicios de distintas maneras. Gracias a su devoción el personaje comienza el juego con un objeto mágico otorgado por el DJ.
•		El corsario viene equipado una pistola y municiones como para 10 tiros, éste sabrá utilizarla ya que será especialista en armas de fuego. También tendrá un sable, aunque no comienza el juego con la especialización en hojas largas.
 
•		Entrenamiento acuático: Este personaje está completamente especializado para desenvolverse en ámbitos marítimos, ya sea de agua dulce o salada. Las siguientes destrezas son el mejor ejemplo del tipo de entrenamiento que reciben los mejores corsarios de Kalaguand:
1.	Desenvolverse en el agua: Para cualquier chequeo de (R) que involucre una tirada de contener el aliento o aguantar la respiración el personaje bonifica en 4 su tirada. Lo mismo sucederá con una tirada de (F) utilizada para nadar.
2.	Guerrero marino: Únicamente si el corsario está en el agua (ya sea en el mar, laguna o río) y sobre una embarcación este siempre tendrá una bonificación de 1 en el D20.
3.	Lucha sin corazas: Las armaduras no son permitidas en el combate en altamar, ésta sólo significaría la muerte para cualquier sujeto que cayera de su embarcación. Además, un corsario no es una persona que únicamente se dedique a combatir, sino que además debe estar constantemente pendiente de las velas del barco, sogas, cañones, herramientas, anclas, cadenas, timones y demás, por lo que debe ser rápido de reacción y movimientos. Este personaje comienza el juego con un estilo de combate adicional, que es el estilo de lucha sin coraza.
4.	Combate en altamar: El personaje está entrenado para utilizar un arma de fuego y un sable al mismo tiempo, por lo que conoce una ventaja táctica única en el juego. Éste puede utilizar el estilo de lucha con 2 armas y el estilo de lucha arcos y ballestas al mismo tiempo y así obtener TODAS las bonificaciones de ambas formas de combate. Únicamente puede desempeñarse así con estos 2 estilos de lucha (aunque también sabrá utilizar un tercero, que es el de lucha sin coraza, sin embargo este siempre pudo ser combinado con otros).
Léase que la pistola entra en el estilo de lucha arcos y ballestas, al poder utilizarse en una sola mano el corsario es capaz de disparar con una y utilizar su mano no hábil hacia delante para combatir en combate cuerpo a cuerpo. El marino también puede hacer dichas combinaciones con cualquier tipo de hoja larga, hoja corta, red y dardo.
Alineación: Cualquiera, aunque en general son neutrales.
Guardianes del Bosque:
Ropajes y adornos: Un guardián del bosque se camufla con los colores de la naturaleza. Son bien vistos entre ellos los colores como el verde, el marrón o el gris. Los aretes y pinturas en sus cuerpos son comunes. Llevando una vida en los bosques no tienen demasiadas cosas de valor como gemas o similares.
Forma de vida: Dedican sus vidas a defender sus árboles y tierras de invasores como trolls e incluso algunos orcos. No cazan demasiado, muchos optan por una dieta totalmente vegetariana, pero a veces cambian su menú y van a pescar. Pocos de estos guerreros pertenecen a la realeza, pero es común ver a un guardián del bosque actuando para su señor.
Actitud: Son muy feroces en lo que respecta a la protección de sus territorios. Son bastante fríos e incluso crueles con aquellos que consideran sus enemigos. Pero más allá de esto poseen buen corazón y son hospitalarios con sus seres queridos. Luchan bravamente y con la protección de sus amigos árboles se convierten en seres realmente peligrosos.
Prejuicios: Se sienten incómodos con la presencia de los enanos, quienes consumen grandes cantidades de manera para sus propósitos. No obstante, odian a muerte a los orcos y a los goblins.
Reglas especiales:
•  +2 en (A), ya que es extremadamente cauteloso y ágil, también elevan en 1 su tirada de (P).
•	Comienza con la pericia Flora/Fauna, Entrenamiento animal, Sonido y ventriloquia y Supervivencia.
•	Tienen una especialización adicional en arcos largos y arcos largos compuestos porque son su mejor elemento en los árboles.
•	El mejor arquero del mundo esta capacitado para evadir proyectiles físicos de la misma forma que con los golpes en combate cerrado, sin sufrir con penalizadores de más.
•	Al final del turno, un guardián del bosque puede realizar un ataque adicional con un arma que requiera Disparos.
•	Si un guardián del bosque quisiese efectuar un golpe a precisión mientras usa armas de proyectiles, tendrá que hacerlo con una penalización de –3 y no de –5 como los de más personajes.
•	El guardián del bosque tiene más entrenamiento en el exterior que la mayoría de sus compañeros, su Infravisión es de 20m adicionales.
•	Fuerza del bosque: El personaje es capaz fusionar sus cinco sentidos con la naturaleza y ser uno mismo con ella. En distintos niveles el activista podrá ejecutar las siguientes habilidades:
Nivel 1: Cualquier chequeo para subir a un árbol será automáticamente superado. Tampoco se sufrirá penalización alguna al trasladarse por un camino difícil o poco transitado (de tener estilo de lucha montada el animal tampoco se verá comprometido).
Nivel 3: El personaje se complementa con su entorno y siempre que se halle en un bosque, pantano o jungla se volverá totalmente invisible con un chequeo de (A). El efecto permanecerá activo siempre y cuando no se
 
ejecute alguna acción brusca como una sacudida, lanzar un ataque o correr. Dicha destreza permanecerá activa 10 minutos por nivel y sólo puede usarse una vez al día, oído y olfato pueden delatar al personaje.
Nivel 5: Un guardián del bosque podrá crear una ilusión visual y sonora que lo hará aparentar un animal de la siguiente lista: búho, halcón, lobo, nutria, oso o zorro. El personaje podrá ocultar su sombra, pero no su olor. La destreza es capaz de utilizarse 1 vez por nivel durante el día, cada transformación durará 10 minutos. Los atributos y habilidades del personaje no se verán alteradas, esta ilusión simplemente es visual.
Nivel 7: El guardián del bosque agudiza todos sus sentidos y es capaz de obtener +2 a todos los chequeos de
(P) durante 1h. Dicha capacidad se utiliza 1 vez al día.
Nivel 9: La habilidad durará 1 turno por nivel. Al final de cada turno el personaje regenera 10 PG (seguirá sanando aunque haya muerto, de esta forma será capaz de regresar a la vida). Esta habilidad no consume acción alguna durante el turno y puede utilizarse 1 vez al día.
•	Virote: Las flechas que dispare el guerrero (siempre y cuando no sean proyectiles mágicos con habilidades incompatibles al caso) podrán atravesar a sus víctimas dañando también a quienes se encuentren detrás de ésta. El Virote puede utilizarse hasta una vez por nivel al día. Los misiles no conseguirán traspasar a los objetivos grandes, y sólo se verán afectados hasta tres cuerpos por el mismo proyectil y aquellos que se encuentren directamente uno detrás de otro. El disparo irá perdiendo fuerza con cada ser que atraviese, obsérvese el siguiente gráfico:







Primer blanco	Segundo blanco	Tercer blanco
sin	restando –2	restando –4
penalización	al daño	al daño
Alineación: Los guardianes del bosque son principalmente buenos, su papel característico les obliga a defender sus terrenos de los visitantes no deseados. Pueden ser neutrales también, esto se debe a que a veces, las personas no invitadas al bosque no siempre son buenas, es por eso que si se ven obligadas a acabar con ellas lo harán. Unos pocos son malvados, adoptan un aire similar al de un depredador y ven a sus víctimas como si fuesen presas.

Jueces:
Ropajes y adornos: Un juez siempre viste túnicas y capas grises o blancas para aparentar absoluta neutralidad. En ocasiones muestran sus emblemas para acentuar sus títulos en los colegios de magia y causar un aura de respeto. Los objetos mágicos son comunes entre dichos personajes.
Forma de vida: El juez actúa como oficial de los colegios de magia, ocupándose de que la magia siga un rumbo neutral y no caiga en el camino de la corrupción. De llegar a descubrir a un hechicero o guerrero con magia malvado, un juez deberá atraparlo inmediatamente y llevarlo ante los colegios con vida, siempre y cuando no se presente una resistencia. Los magos buenos y neutrales causarán pura indiferencia ante dicha autoridad, lo mismo que los sacerdotes de cualquier religión. El rastreo de objetos mágicos legendarios, sucesos paranormales y demás también son tarea para dicha categoría.
Actitud: Un juez no puede mostrarse como un ser de carne para así mantener un eterno respeto. Son fríos y duros en sus veredictos, así como crueles ante sus enemigos. El perdón es pocas veces otorgado.
Prejuicios: Esta categoría no simpatiza en absoluto con los hechiceros del mal (igual que a guerreros con magia), tratando siempre de apresarlos o incluso erradicarlos. También hay bastante disgusto hacia el clero de Shavaloon, debido a que sus acólitos afirman que la diosa trajo la magia al mundo como regalo cuando instaló los cuatro elementos, mientras que los jueces defienden a los colegios de magia, argumentando que la hechicería simplemente es energía manipulada al antojo de los seres vivos, como cualquier otra herramienta. De todas formas, por más prejuicio que se tenga contra estos sacerdotes, el juez no tendrá derecho alguno de castigarlo legalmente.
Relgas especiales:
•	Al comenzar el juego este personaje recibirá +1 a (I) y (L)
•	Semejante autoridad comenzará el juego con las ventajas Resistencia a la magia (no podrá volver a escogerse), Identificación de conjuros e Interferir conjuros.
•	El juez posee la pericia Leer y escribir, Conocimiento arcano y Facilidad con los números.
•	También se otorgará un objeto mágico de forma aleatoria, éste provendrá de los colegios de magia.
 
•	Haciendo un chequeo de Intimidar el personaje ahuyenta a los espíritus elementales, borra las runas más poderosas e ignora las bendiciones sacerdotales, por lo que es capaz de causar Miedo en los conjuradores que lo contemplen. A nivel 5 el juez causará Terror en vez de Miedo.
•	El juez posee un aura repelente hacia ciertos efectos mágicos, por lo tanto será inmune al Miedo y Terror causado por conjuros o invocaciones. Las criaturas invocadas, como algunos no muertos o elementales no podrán detectar de ninguna manera al juez. Las armas invocadas, como armamento elemental, se tratarán a todos los efectos como armas normales, siendo inútiles sus encantamientos.
•	Sin importar que carezca de artefactos encantados, los ataques del personaje se contarán mágicos a todos los efectos.
•	Equipo de juez: El equipo de juez, único en Las Tierras Inmortales, es otorgado por los Colegios de Magia y comprende todo un repertorio de accesorios mágicos ideados para que éste pueda controlar, perseguir, rastrear y derrotar a todo tipo de criaturas mágicas o fenómenos sobrenaturales. El inventario consta en 5 artefactos, todos ellos fabricados con materiales muy raros o costosos, por ello el personaje sólo puede utilizar cada uno de ellos una vez por nivel. Claves y códigos específicos permiten que cada juez pueda usar únicamente sus propios ítems, y ninguna otra persona más, ni siquiera otros colegas. Los artefactos no pueden ser evitados con la habilidad Dispersar Magia ni tampoco pueden ser omitidos por una Resistencia Mágica o conjuros que eviten la usanza de objetos mágicos ni lanzamiento de otros sortilegios.
¿Qué sucede si el juez pierde o es privado de dicho kit? Los Colegios de Magia le brindarán otro a modo de repuesto, aunque se trata de una deshonra, de un “fallo” tener que ir y pedir uno nuevo. El kit de repuesto funciona de la misma manera que el anterior y estará sujeto a las mismas reglas (recordar que cada ítem puede utilizarse una sola vez por nivel, aunque se haya adquirido el kit renovado).
1.	Disco de levitación: El disco es un pequeño aparato plateado de 5cm de diámetro que a la orden del juez se expande hasta tener 1m de diámetro y se mantendrá levitando en el aire. Tal aparato puede sostener hasta 250kg, elevarse a una altura de hasta 10m por nivel y trasladarse a una velocidad de 1km/h por nivel. Activar el disco requiere una acción espontánea.
2.	Grilletes de dominación: Estos son dos grilletes que sirven únicamente contra seres humanoides capaces de lanzar conjuros, cualquiera sea su índole. Si el juez coloca los grilletes éste no podrá ejecutar ningún tipo de sortilegio, ni siquiera los psíquicos, y al igual que esposas ordinarias tampoco tendrá libertad para separar sus brazos. Las ataduras permanecerán activas hasta que sean destruidas, el juez les de una orden para abrirse o éste muera.
3.	Pergamino de proyección: Si el personaje detecta e identifica un conjuro puede utilizar este poderoso papiro, que requiere una acción espontánea. El hechizo en cuestión es automáticamente disipado y pasa a ser lanzado por el juez, sea cual sea la circunstancia, espíritu elemental, escuela clerical, runa, etc. El sortilegio largado tendrá todos los efectos que normalmente suele tener pero proyectados al nivel y diversos modificadores de este heraldo de los Colegios de Magia.
4.	Reloj para detener el tiempo: El artefacto es un pequeño reloj de bolsillo, utilizarlo requiere una acción espontánea. Durante todo el turno el personaje tendrá un ataque adicional por nivel, si tiene conjuros u objetos mágicos que activar podrá sino utilizar uno por nivel también. El jugador podrá escoger incluso si quiere intercalar sus acciones para poder atacar o lanzar hechizos en el mismo turno, siendo éste como decide distribuir el funcionamiento de tan completo turno.
5.	Varita de teleportación: Una varita plateada de 50cm de largo que permite al personaje y hasta un aliado por nivel (que esté a la vista del usuario) teletransportarse en un lugar que el juez haya visitado antes. Este artefacto demora unos segundos en usarse, por ende tendrá efecto al final del turno, independientemente de las tiradas de Iniciativa.
•	Cacería de conjuradores: Si bien dichos especialistas pueden sortear situaciones muy diversas, la mayoría de sus técnicas se concentran en neutralizar a hechiceros, nigromantes, guerreros con magia, sacerdotes, monstruos y a todo tipo de criatura lanzadora de conjuros. Algunas de sus destrezas más poderosas se hallan en la Cacería de conjurados:
1.	Disipación: Gastando 1 PC adicional el juez tendrá la oportunidad de deshacer un conjuro como si lo estuviese dispersando, de la misma forma que un conjurador. No obstante, el personaje será siempre del mismo nivel que el sortilegio a disipar a la hora de tirar el D10, por ejemplo: si el juez quisiese desviar una Cono de frío proveniente de un hechicero nivel 4, el juez obtendrá +4 en el resultado del D10, y si estuviese disipando el mismo cono potenciado en 3 (o sea, como si el rival fuese nivel 7) también aplicará dicho modificador. En resumen, se tendrán literalmente los mismos modificadores que el oponente, simplemente ganará el que obtenga un resultado superior en el D10. Dicha destreza es espontánea y no consume acción alguna durante el turno, incluso mientras aún pueda seguir invirtiendo PC el juez es capaz de disipar repetidas veces por turno.
 
2.	Espantar energía: Cada vez que el personaje acierte con éxito un golpe a un conjurador, le quitará 10 PE/PF.
3.	Protección contra la magia: Al estar tan bien preparado para combatir conjuradores, dicho personaje no penalizará ninguno de sus atributos o habilidades contra hechizos que así lo indiquen, por ejemplo: Aumento virtual requiere que el objetivo del hechizo haga una tirada de (F) menos el nivel del mago, entonces, el juez simplemente hará una tirada de (F) base, o Azote de llamas, que exige un chequeo de Enfermedades/Temperaturas menos el nivel del hechicero, simplemente se tirará (R) sin penalizador alguno.
4.	Evasión: Un específico entrenamiento protege al personaje contra hechizos que requieran Disparos, tan así que un conjurador penalizará en 1 por nivel (del juez) su chequeo para asestarle al mismo.
5.	Detener conjuro: Un juez puede desviar conjuros utilizando su tirada de Defensa. Contra encantamientos que requieran una tirada de Disparos el personaje puede tirar Defensa -5 y evitar todo el daño o efecto del ataque. Los hechizos de área como Bola de fuego o Bola de hielo no podrán ser ignorados ya que su estallido abarca toda una zona y no a un individuo en particular.
6.	Devolución inmediata: Una vez por día el personaje puede escoger un hechizo de Disparos detectado que lance un conjurador y hacer que éste se dirija hacia el mismo lugar de donde vino. El personaje sorprendido u otro que esté en la zona puede intentar disipar el encantamiento, pero lo hará aplicando la misma regla que Disipación.
Alineación: Pura y exclusivamente neutral.

Ladrones:
Ropajes y adornos: Por lo general se trasladan por la oscuridad evitando ser vistos, así que la carencia de ropajes pesados e incómodos es su principal característica. Las capas, capuchas y guantes son una buena elección.
Forma de vida: El robo, hurto, atraco...
Actitud: Un ladrón siempre evitará tener una confrontación directa en combate, preferirá huir o usar sus embauques. Son buenos oportunistas y conocen el punto débil de todo desafío, que seguramente explotarán al máximo.
Religión: Robar está mal y en todas las sociedades organizadas atenta contra la ley, ¿quién mejor entonces que Lammock para provocar las mejores traiciones, conspiraciones y caos entre las personas? Si bien los adoradores de este dios son puramente malvados o veces neutrales, existen muchos ladrones de buen corazón que lo invocan simplemente como una maldición o por mera costumbre.
Reglas especiales:
•	Se obtendrá +2 a (A), mientras que (I) y (P) se potenciarán en 1.
•	+2 a las habilidades de (P).
•	El ladrón no puede portar una armadura superior a la cota de mallas, o en el caso de ser elfo la cota élfica.
•	Dicho bribón comenzará con la ventaja gratuita Identificación de Conjuros.
•		También se comenzará el juego con las siguientes pericias: Acrobacias, Actuación, Apuestas y juegos, Desactivar mecanismos, Estafar y falsificar, Equilibrio, Hablar rápido, Idiomas, Malabarismo, Robar, Desactivar mecanismos y Usar ganzúas.
•	Por cada nivel que sea el ladrón obtendrá 1 punto adicional de ventajas.
•	El ladrón bonifica en 2 su Iniciativa.
•	Todo ladrón es hábil en asestar golpes rápidos y repetitivos, y al enfrentarse contra un lanzador de conjuros penalizará en 1 su Concentración por cada ataque que acierte a su blanco.
•	Los rápidos reflejos protegen al personaje contra hechizos que requieran Disparos, tan así que un conjurador penalizará en 4 su chequeo para asestarle al mismo.
•	Esta categoría requiere 10% menos de experiencia para avanzar de nivel que el resto de los personajes.
•		Instalar trampas: Este personaje es capaz de sorprender a otros mediante dispositivos creados por él mismo. Para que el bribón las ejecute exitosamente no deberá de realizar cheque alguno, aunque tendrá que disponer del tiempo indicado más adelante y no podrá hacerlas más de una vez al día cada una. Dichas sorpresas estarán ocultas al ojo “común” pero podrán ser descubiertas con un chequeo de Detectar trampas y desarmadas con la pericia Desactivar mecanismos (su creador podrá hacerlo automáticamente). A seguir se detallan los dispositivos capaces de ser diseñados, ya se comenzará el juego con los materiales necesarios:
1.	Trampa mortal: El personaje deja en una superficie de 10m de diámetro montones de vidrios rotos, piedras afiladas y espinas vegetales, lo que le llevará 20 minutos. El que pase por allí sufrirá 1D6 PG multiplicados por nivel.
2.	Alarma: Una delgada conexión de hilos y cascabeles permite al ladrón y sus aliados enterarse si alguien penetró en una zona de 30m de diámetro. Es importante aclarar que el intruso podrá chequear Detectar Ruidos y caer en la cuenta de que ha sido descubierto. Instalar Alarma requerirá de 30 minutos.
 
3.	Bomba de estruendo: Funciona de manera similar a Alarma. El bribón deja pequeñas esferas de cerámica en un área de 30m de diámetro, y que al ser pisadas se emitirán un atronador estallido capaz de escucharse a 200m de distancia. Toma 20 minutos instalarlas adecuadamente.
4.	Hoyo oculto: El personaje cava una fosa de 3m de profundidad y 2 de ancho, luego lo cubrirá con ramas y lodo seco para ocultarlo. El que caiga adentro podrá hacer una única tirada de Trepar menos el nivel del bribón o no podrá salir hasta repetir el chequeo una vez por día. El hoyo tarda 1h en hacerse.
5.	Cavar túneles: Un experto ladrón podrá cavar túneles de 3m por nivel de largo y hasta 2m de anchura de tener una buena pala y cualquier terreno no demasiado “duro”. Por cada metro de largo que se desee excavar se necesitará de 1h, restando 5 minutos por nivel.
6.	Superficie pringosa: Con aceites y diferentes ungüentos el personaje chorrea una superficie de 5m de diámetro y aquel que pase por allí (siempre y cuando pese menos de 1 tonelada) tendrá que hacer una tirada de (F) menos el nivel del saboteador o quedarse pegado durante 3 turnos consecutivos. Esta trampa requiere de 1D4 turnos.
Alineación: La que se desee.

Luchadores:
Ropajes y adornos: Es común que este tipo de personajes usen las ropas características de su pueblo ya que generalmente siguen su propio camino, en algunas ocasiones visten el uniforme de algún amo, deidad o secta. Lo mismo sucede con el armamento, aunque quizás este suele ser variado debido al gran uso que le dan.
Forma de vida: El luchador reta al peligro constantemente, gana mucho más dinero que cualquier persona a sueldo, aunque eso, obviamente, significa arriesgar el pescuezo. Son excelentes cazadores de recompensas, héroes de leyenda y clásicos villanos. Gran parte de su existencia recorren el mundo en busca de nuevos retos y desafíos, pero al ser tan altos los peligros, que pocos llegan a ser “grandes”.
Actitud: La actitud de un luchador, como muchos otros aspectos, depende en gran medida de su raza y credo social. Es difícil manejar esta cara del guerrero, lo mejor es intentar descubrirla por uno mismo.
Reglas especiales:
•	Todo luchador bonifica en 1 punto una de los siguientes atributos: (F), (R) o (A).
•	A su vez, el entrenamiento del personaje se deriva en sus otras características, pudiendo bonificar también en 1 punto uno de los siguientes atributos: (L), (P) o (I).
•	Las mañas con las que se desarrolla el guerrero y su versatibilidad le proveen 10 puntos adicionales de pericias.
•	Su falta de especialización le garantiza un avance acelerado de nivel, por ello requiere 10% menos de experiencia para ascender de nivel.
•		Lo que caracteriza principalmente a este personaje es su variedad y singularidad como parte de sí mismo. Es tan único y moldeable que no hay dos luchadores iguales. A continuación se dictarán 20 habilidades diferentes, el jugador deberá elegir 8 de ellas para poder diseñar su propio personaje:
1.	Cada vez que efectúe un ataque el personaje provocará 1PG adicional (esto puede acumularse con otras ventajas que incrementen el modificador al daño).
2.	Bonificar en 1 el Ataque (puede acumularse con Certeza en el arma y su versión mejorada).
3.	Obtener un número más para hacer ataques críticos en el D20.
4.	Penalizar en 2 la tirada de Defensa del oponente.
5.	Bonificar en 1 punto la Ar natural.
6.	Bonificar en 2 su Iniciativa.
7.	Bonificar en 2 el chequeo de Defensa.
8.	El personaje obtiene +2 a sus tiradas de (R) contra golpes críticos.
9.	Sumar +4 a la tirada de Belleza.
10.	Obtener +4 en Valentía.
11.	Recibir 4 PC adicionales.
12.	Comenzar el juego con 10 puntos adicionales de ventajas.
13.	Comenzar el juego con 2 estilos de lucha en vez de uno.
14.	Comenzar el juego con un objeto mágico seleccionado al azar. Consultar con el DJ.
15.	Comenzar el juego con 4 pericias gratuitas (sin importar el coste de las mismas).
16.	Una vez por aventura se bonifica en 4 una tirada escogida en el D20. Habrá que anunciar que se utiliza el modificador antes de tirar el dado.
17.	El personaje bonifica en 2 sus habilidades de (P).
18.	Requerir 10% menos de puntos de experiencia para pasar al próximo nivel.
19.	Al crear el personaje, el jugador podrá repetir una sola tirada con la que no esté conforme dentro de sus atributos de (F), (R), (A), (L), (P) o (I).
 
20.	Ultimo turno antes de chequear tabla de cansancio: Cuando el personaje gasta su último PC se activa esta habilidad, que permite al personaje resistir un turno más antes de recibir los penalizadores por gastar todos sus PC. Durante ese turno se podrán realizar únicamente acciones que impliquen 1 PC, no se podrán aplicar técnicas de combate, pericias ni opciones que impliquen invertir más de dicho puntaje (como por ejemplo gastar 4 PC adicionales para lanzar un ataque extra).
Alineación: No hay una conducta que marque específicamente a un luchador.

Paladines:
Ropajes y adornos: Los paladines siempre se guían por el buen gusto, aman la prolijidad en sus vestimentas. Generalmente tienen ropas que no sean demasiado chillonas, pero que a su vez, demuestren elegancia y “clase” en lo que llevan puesto. A diferencia de otros individuos, estos guerreros del bien llevan armaduras completas muy seguido para demostrar su poder y lograr que las fuerzas del mal se amedrenten frente a su presencia.
Forma de vida: Rondan de tierra en tierra vigilando las fuerzas del lado oscuro. Controlan con fervor a sus enemigos, y esto les hace llevar una vida dura y llena de cansancios, en donde se dedican a encontrarlos y eliminarlos. Nunca dudan en hacer lo que les parezca correcto, siempre y cuando sea para una acción benigna. Muchos de estos sujetos no poseen un rey al que obedecer, así que obran por cuenta propia, guiándose a mediante la palabra de Tarnus.
Actitud: Son muy corteses y educados, nunca dudan en ayudar a los necesitados, y hasta dejarían de lado sus propios fines (siempre y cuando no sean muy importantes, ya que no son tan tontos), con tal de aportar a la causa. A su vez, son despiadados con sus enemigos, los persiguen a muerte. Son, realmente, unas máquinas hechas para cazar seres malvados.
Religión: Tarnus, el dios de la justicia, es quien guía a estos bravos guerreros. Él les enseña a ser quienes son. En su nombre hacen lo que sea por aplicar el bien, aunque eso implique romper las leyes locales. No importa si es su rey el que les dice lo que hacer, si para estos individuos eso no conduce al buen camino, ellos no acatarán sus órdenes, ya sea de forma directa o haciéndolo de forma indirecta.
Reglas especiales:
•	Posee +1 a (F). Su conducta fuerte, brava y temible le da +1 (L).
•		El paladín puede soportar cualquier clase de armaduras en sus cuerpos pero además, no sufrirá penalización a su (A) y Cansancio. Los elfos también podrán vestir cualquier tipo de coraza, una gran ventaja a la hora de combatir.
•		Tarnus, su dios, le proporciona una curación rápida de 1D8 puntos de golpe cada vez que duermen, y no de 1D3 como a las demás categorías.
•		Los no muertos no pueden ser víctimas de los golpes críticos, pero el heraldo del bien absoluto es capaz de tener éxito con esta clase de ataques al enfrentarse a los mismos.
•		Este glorioso guerrero de la luz posee la bendición de las deidades del bien incluso después de muerto. Si el guerrero muere, y su cuerpo se encuentra a salvo (no dentro de un volcán o similar), tendrá 5% por nivel de revivir apenas su corazón deje de latir. Sus PG se quedarán automáticamente en 1. Por cada punto de (L) que posea el paladín, a partir de 13 inclusive, obtendrá 1% adicional en su tirada.
•		Sacrificio: El guerrero puede actuar como protector para sus compañeros y evitar que sufran daño alguno durante todo un turno, habrá que hacer una diferencia de Hablar a masas restando el número de rivales a los que se les quiera llamar la atención. El paladín provocará y atraerá a los afectados hacia él y únicamente podrán atacarlo a este, ignorando a cualquier otro personaje en el camino (incluso aún si los ignorados atacan, lanzan conjuros, intentan escapar, etc.). Si el valiente utiliza esta habilidad únicamente se podrá defender ya que se trata de una acción completa, no podrá utilizar virtudes, lanzar ataques ni demás. Aquellos enemigos inmunes a la psicología y que no puedan oír y/o ver al guerrero no caerán bajo esta influencia.
•		El personaje comienza el juego con la ventaja Protección contra Golpes Críticos, pero no podrá adquirirla por segunda vez.
•		Si alguien llegase a usar un hechizo de curar o combinación hacia el paladín (o si el mismo bebiese una poción curativa) podrá duplicar el resultado de PG restaurados.
•	Todo paladín es inmune al Odio, Miedo y Terror.
•	Se comienza el juego con la pericia Religión.
•	Contra enemigos de alineamiento malvado el paladín bonifica en 1 su tirada de daño y ataque.
•		Virtudes del Paladín: Un guerrero sobresaliente como lo es un paladín posee habilidades sobrenaturales que van más allá de toda realidad. Son virtudes mágicas originadas en la fe del personaje y se brindan para realizar el servicio del Señor. El personaje podrá usar tales destrezas una vez al día por nivel impar que sea sumado a cada punto de (L) a partir de 13 inclusive:
 
1.	Juicio de la verdad: El personaje entrecierra sus ojos y obtiene una leve impresión acerca del espíritu de su objetivo. Realizando una tirada de (L) el paladín adivina la alineación del blanco. También se puede efectuar en áreas u objetos materiales.
2.	Golpe justiciero de Tarnus: El ataque en cuerpo a cuerpo dado por el guerrero sumará al resultado total del su daño el número de su tirada de (F), el resto de los golpes dados durante el turno serán normales.
3.	Vientos de sanación: Llevar a cabo una tirada de (L). El paladín emite una delicada corriente de dulce aroma y resplandores plateados, cuyo poder reestablece 1D4 PG por nivel a todo ser de alineamiento bueno que se encuentre a 10m a la redonda (incluyéndose a él mismo).
4.	Llamar al corcel: Realizar un chequeo de (L). El personaje acaricia pacíficamente el hocico de un caballo, pegaso, caballo marino o unicornio y le convence de que sus intenciones son benignas. De esta manera, la criatura acepta llevarlo en su lomo hasta llegar a destino y luego retornar a su lugar de origen.
5.	Extirpar enfermedad: El paladín toca la frente de una persona enferma (no importa su estado) y elimina toda bacteria, virus o síntoma del objetivo gracias a una refrescante oleada de poder sagrado. Sin embargo, el paladín no podrá hacer nada frente a un veneno o toxina.
6.	Amedrentar a los paganos: Potenciando su fuerza vocal a más no poder el personaje puede usar su tirada de Intimidar para causar Miedo.
Alineación: Verse del lado de la maldad es todo lo contrario al código de los paladines, así que esto se les prohíbe terminantemente. Solamente pueden ser buenos.

Valkirias:
Ropajes y adornos: Al ser asociadas como tremendas guerreras y guardianes de Tarnus (no son representantes de éste como los clérigos y paladines, aunque le sirven fielmente), es muy común verlas ataviadas con elegantes armaduras femeninas que resplandecen a la luz del día. Sus tonos suelen ser plateados azulados, pero varía depende de cada valkiria. Estas damas siempre presentan una cabellera dorada como el sol, que se ve acompañada por un yelmo a la hora de combatir. Por último, las valkirias emplean poderosos martillos otorgados por su propia orden, perder esta arma significaría una muerte inminente.
Forma de vida: A diferencia de otros colegas de su mismo clero, una valkiria no está encargada de promover los dominios de Tarnus, su señor, sino que es aquella que decide si un guerrero es digno de verlo luego de haber perecido. Estas mujeres están entrenadas para diferenciar a un luchador de verdad de un perro miserable, ya que ignoran las creencias del muerto, sólo se interesan en que se hayan cumplido los códigos que un buen guerrero debe seguir.
Actitud: Las señoras de Tarnus poseen un temperamento severo y rígido, no se las suele asociar con una sonrisa de oreja a oreja. Su corazón es frío, al igual que muchos otros rasgos, como el tono de su voz o su mirada. Poseen un gran respeto por la virginidad y la pureza, saben que el amor hacia un hombre significaría la expulsión inmediata del clero y de sus poderes.
Religión: Como se mencionó repetidas veces, Tarnus es su amo y señor, y si bien no son sacerdotisas, las valkirias deben honrarlo y respetarlo como si de un padre se tratara.
Prejuicios: Una valkiria es capaz de respetar a un servidor del cruel Kalgoth debido a su valentía y decisión durante la batalla. Una valkiria puede llegar a tolerar a los fieles de Hirak siempre y cuando no la molesten. Pero una valkiria sólo puede perder la paciencia, rigidez e incluso salir de sus cabales cuando presencia alguna maldad originada por los infames secuaces de Lammock. Un servidor de la corrupción, los engaños y las trampas no es digno de alabanza, y merece un juicio severo.
Reglas especiales:
•	Una potencia sobrenatural concede +1 a (F) y (L) a esta guerrera.
•		Al terminar su duro entrenamiento el templo de Tarnus concede a esta guerrera un poderoso martillo mágico, signo de poder y autoridad e incapaz de ser empleado por otra persona. Este martillo es la única arma que se le permite utilizar a esta mujer, incluyendo tal vez un escudo (puede tratarse de un martillo a dos manos, a una mano o uno lanzable igual al de los enanos). Es importante saber que si esta maza se cambia por otra arma estando en una batalla, la valkiria perderá todos sus poderes, no obstante, se omitirá el castigo si no llegase a quedar otra opción; si se usa un arma en cada mano, una deberá ser el martillo obligatoriamente, la otra es indiferente. La forma física del arma, independientemente su tipo, es de un fino y elegante metal azulado con un diamante hexagonal incrustado en la parte derecha e izquierda de la maza, también hay uno más grande en la cabeza. Su mango es de mármol negro y en el extremo inferior se ve un diamante romo.
•	Aptitudes del martillo:
1.	Por cada nivel impar, el arma brindará +1 al Ataque, Defensa y daño de la guerrera.
1.	En todos los niveles el arma otorgará 1 PG y PC extra.
 
2.	A la hora del combate, los diamantes relucen con gran intensidad, incluso, si se desea, puede utilizárselos para iluminar un radio de 3m.
3.	El poderoso mazo otorgará una parada adicional.
4.	El don de volar se le ha concedido a muy pocos humanoides, y las valkirias son uno de ellos. Estas mujeres pueden elevarse por los cielos, llegando a los 200m si así lo desean. En el aire podrán cargar las mismas cosas que en la tierra, y su velocidad será de 50km/h. Bajo ninguna circunstancia la poderosa debe perder su arma en el aire o caerá instantáneamente con todo lo que cargue.
•		Toda valkiria posee sangre fría en sus venas, lo que le da un espíritu inquebrantable en todo momento. Son incapaces de llorar, sentir miedo y titubear; son completamente inmunes a toda psicología y seducción.
•		La guerrera puede soportar cualquier clase de armaduras en su cuerpo pero además, no sufrirá penalización a su (A) ni Cansancio.
•		En un antiguo idioma conocido sólo por los acólitos de Tarnus a la valkiria se le permite recitar una oración para que sólo las almas de las personas dignas lleguen al paraíso eterno. Habrá que alzar la mano y estar frente al difunto, y todos los que no sean el personaje, paladines o sacerdotes de algún clero serán incapaces de ver el alma ascender hasta el firmamento.
•		No se preocupan en verse bellas para conquistar hombres, no obstante tienen un encanto de naturaleza divina que aumenta en 2 su Belleza.
•	Se comienza el juego con la pericia Religión.
Alineación: A pesar de que la mayoría de las valkirias son buenas, algunas pueden llegar a ser neutrales a causa del toque “imparcial” que lleva consigo este personaje, aunque nunca podría ser malvada. Sea buena o neutral, una señora de Tarnus siempre respetará y obedecerá a su clero.

Elfos:
Asesino: Ídem humanos.

Berserker: Ídem humanos, pero únicamente apto para elfos oscuros.
Civil: Ídem humanos.

Guardianes del bosque: Ídem humanos.

Guerreros Elementales:
Ropajes y adornos: Los guerreros elementales suelen variar en este punto de vista: están los que quizás se vistan con armaduras elegantes y hagan fama a un guerrero legendario ataviado con místicas vestimentas o también existe el guerrero con atavíos salvajes característicos de un individuo alejado de la civilización.
Forma de vida: Los guerreros elementales son generalmente neutrales. Algunos pasan sus vidas luchando por defender al bien de los esbirros del mal al igual que otras categorías, sin embargo, siempre existió la oveja negra que contrarreste a sus compañeros. Aparte de esto, los guerreros elementales pasan años estudiando sus fabulosas técnicas, causantes de que les llamen hechiceros (y no muy herrado, ya que sus habilidades sí son mágicas). Estas técnicas le son enseñadas por hechiceros elementales aliados que los instruyen durante su crecimiento.
Actitud: No hay una característica específica para describir su actitud. Son como los otros guerreros, aunque un poco orientados hacia el lado del bien, no obstante, como se dijo antes, existen las excepciones.
Reglas especiales:
•		El elemento de la tierra le otorga un bonificador de +1 a su (R), mientras que el del viento le brinda +1 a (A).
•	Se obtiene +1 a todas las habilidades de (P).
•		El guerrero, protegido por las divinidades del agua, fuego, tierra y viento, divide sus increíbles poderes en cada uno de los elementos. A continuación de describirán las diferentes virtudes que cada potencia le entrega.
•	Agua:
1.	El personaje podrá respirar bajo el agua hasta 10 minutos por nivel. Dicha habilidad le permitirá resistir venenos en estado gaseoso también.
2.	Estando sumergido el guerrero no sufrirá ninguna penalización por encontrarse bajo dicho estado, ni siquiera vistiendo una coraza metálica. Luchará literalmente de la misma forma que lo hace en tierra firme.
 
3.	Si lo desea, el guerrero puede caminar sobre el agua como si se tratase de una superficie sólida. Podrá correr, saltar e incluso avanzar sobre las olas, aunque si cae o resbala se hundirá en el líquido como cualquier otra persona.
•	Fuego:
1.	Tan rápido como las llamas el personaje incrementa en 2 su tirada de Iniciativa.
2.	Jirones de fuego envuelven las armas y puños del guerreo, irradiando calor y luz. Cada vez que combata irradiará 1 metro de luz. Las llamas en sus ataques provocarán +1 al daño en combate.
3.	Haciendo un chequeo de (F) o (A) el personaje es capaz de recorrer 200 metros en 1 sólo turno, dejando tras de sí un sendero de fuego sobre el suelo. Si llegase a cargar de dicha manera y entrar en combate cuerpo a cuerpo en el acto el rival podrá hacer un control de Alerta para no verse sorprendido. La habilidad puede usarse una vez al día y requiere 2 PC.
•	Tierra:
1.	Haciendo un control de Concentración el personaje fortalece su piel y forma una coraza pétrea capaz de darle hasta 1 punto adicional de Ar natural por nivel. La duración es de 10 minutos y puede utilizarse una vez al día, el color de la robusta cobertura quedar a elección del jugador e incluso variar en sus texturas (mármol, roca, metal, varios colores, etc.).
2.	Un aura protectora recubre toda su piel protegiéndole contra la magia elemental y haciéndolo poderoso contra hechiceros y guerreros de la corte. Posee 2 puntos de resistencia mágica por nivel en un D20, pero los sacerdotes, nigromantes, bardos y demás guerreros con magia no se verán afectados al utilizar sus sortilegios contra el personaje.
•	Viento:
1.	Con una increíble destreza (y superando una tirada de (A) o (F)) el personaje tendrá la habilidad de saltar hasta 15m de altura. A su vez, mientras más poderoso sea el guerrero, más alto podrá brincar: por cada nivel que tenga el personaje, saltará 1m extra.
2.	Todos sus golpes serán tan veloces que darán –1 por nivel impar a la Defensa de los oponentes.
3.	El personaje obtiene +2 a sus chequeos para saltar, trepar, nadar y correr, que involucra no sólo velocidad sino también esforzarse en marchas prolongadas. El personaje sí puede sufrir daño por conjuros, pero las temperaturas extremas no lo lastiman.
Alineación: Sus poderes provienen de Shavaloon, únicamente pueden ser neutrales.

Guerreros Pesadilla:
Ropajes y adornos: Esbeltas y elegantes corazas negras como la noche cubren los cuerpos de estos carismáticos guerreros. Capas negras y grises tapan sus espaldas, mientras que sus cabezas, adornadas con malévolos yelmos o siniestras capuchas les dan un aspecto temible a la hora de combatir. Suelen usar miembros de sus enemigos o “recuerdos” de estos como trofeos.
Forma de vida: Los guerreros pesadilla son entrenados especialmente para satisfacer las órdenes de sus malignos señores. Siembran la pena y la destrucción sin remordimiento alguno. No importa que decisión tome su amo, estos le obedecerán siempre y cuando sus acciones conduzcan un mal camino. Los que no parten en busca de aventuras, se quedan junto a su señor, esperando a que llegue la hora de la batalla. En las grandes guerras, éstas son las huestes de elite de todos los elfos oscuros.
Actitud: Aunque son malvados, abusadores, crueles, fríos y violentos, los guerreros pesadilla son sujetos que sienten un gran respeto por el honor. Nunca violarán un juramento ni defraudarán las leyes del lugar en el que estén siempre y cuando no contradigan su causa. No gustan de luchar si el enemigo se encuentra en desventaja, y tampoco aceptan fácilmente combatir a alguien que no consideren dignos de ser muertos por ellos.
Religión: Se dice que la diosa del mal Hirak fue quien creó las primeras pesadillas, por ello, un guerrero seguidor de las fuerzas oscuras le es fiel devoto a esta deidad.
Prejuicios: Si bien gustan de torturar a quien sea, sienten especial aprecio por castigar a los paladines y sacerdotes del bien. Ellos son su máxima amenaza, y matar a uno de estos sujetos es un trofeo digno de ser contado, los enanos defensores también son un buen premio.
Reglas especiales:
•	Una pesadilla posee un agresivo bonificador de +2 a (F) y +1 a (L).
•	El elfo penaliza en 2 la tirada de (R) del oponente a la hora de soportar un golpe crítico.
•	Las agresiones de la pesadilla penalizan en 2 las tiradas de Defensa del oponente.
•		El guerrero recibe un modificador de +1 a su ajuste al daño por cada punto de (L) (a partir de 13 inclusive) que tenga. Su presencia terrible amarga el corazón de sus enemigos y éste se fortalece y suma ahínco ante semejante situación.
•		Con su fuerte temperamento se convierten en guerreros inquebrantables que llegan a ser inmunes al miedo y al terror.
•		La Pesadilla carece de la habilidad Intimidar, ya que a cambio, puede causar miedo (lo hace de la misma forma que si se quisiese intimidar).
 
•		Durante su arduo entrenamiento, este elfo aprende muchas técnicas de gran valor. Una de ellas consiste en tener un ataque extra en combate.
•		Su cuerpo, acostumbrado a llevar macabras corazas, no sufre penalización alguna a su (A) por más que lleve una armadura completa y un escudo grande.
•		Una de las habilidades más poderosas que posee este malévolo sujeto es el terrible desprecio que siente hacia el lado del bien. El mismo es tan grande que ha llegado a emplear técnicas capaces de repeler automáticamente los conjuros y virtudes de ciertas categorías benignas, como el: paladín y los clérigos buenos. Los hechiceros de fuego utilizan escuelas de purificación y sanación que también se ven anuladas por las auras negativas de dicho guerrero, por lo tanto tampoco podrá afectarle la magia de fuego.
•		Contra las categorías mencionadas anteriormente, y también contra valkirias, se obtendrá +2 al Ataque y al daño.
•		Acostumbrado a recibir entrenamientos tortuosos y a gozar en ciertas situaciones placenteras, el guerrero disminuye en 1 PG todo el daño que sufra.
•		Aura de sombras: Un anillo de negrura y frialdad envuelve al personaje y afecta a todo aquél que se encuentre adyacente a él, sea aliado o enemigo. Los personajes afectados por el aura no podrán efectuar ninguna acción en el turno y quedarán completamente amedrentados, sólo aquellos seres inmunes al Miedo y/o al Terror podrán resistir tanta malevolencia. Esta es una acción espontánea y puede utilizarse una sola vez por batalla.
•		Presencia tenebrosa: Si el personaje hace una diferencia de (L) con su oponente y es vencedor atemorizará a éste y no le permitirá utilizar ninguna Defensa contra la pesadilla durante el turno. El afectado sí podrá protegerse de otros agresores, pero no de este elfo oscuro. Dicha habilidad es una acción espontánea y consume 2 PC, no afecta a personajes inmunes al Miedo y/o al Terror.
•		Rayo negro: Rezando a las deidades del mal este guerrero puede lanzar un rayo mortífero que funciona igual al encantamiento Rayo negro. Esta habilidad no es un conjuro, sino una bendición de la maléfica diosa arácnida, por lo tanto no puede ser dispersada ni tiene vinculación alguna con la hechicería, puede utilizarse tantas veces al día como puntos de (L) a partir de 13 (inclusive) tenga la pesadilla. Este es un Ataque Especial, y se re rige como cualquier otro impacto a distancia del juego.
Alineación: Jamás se podrá ver a un guerrero pesadilla realizando acciones buenas durante un largo período de tiempo. Nunca podrán ser buenos, al igual que neutrales, ya que sino se verían obligados a realizar acciones buenas. Sólo pueden ser malvados.

Marciales:
Ropajes y adornos: Casi todos los maestros marciales utilizan ropas oscuras, como túnicas grises o uniformes negros. Se limitan a usar objetos que no brillen con demasía para poder ocultarse mejor entre las sombras. Las armas influyen en sus vestimentas. No emplean armas de gran tamaño, sino objetos más fáciles de esconder, como dagas, dardos, etc.
Forma de vida: La mayoría de su vida la dedican a cumplir ciertas metas espirituales, como hacer justicia y realizar venganzas personales, a veces, utilizan sus siniestras habilidades con fines benignos. Las personas no reconocen sus méritos porque éstos guerreros que actúan mediante el misterio y la incógnita. Cuando son demasiados viejos como para seguir con su vida de riesgos, se dedican a preparar a jóvenes pupilos para que sigan sus pasos.
Actitud: No suelen ser muy comunicativos. Son callados y no muy amistosos, aunque hay algunas excepciones. Las fuerzas del mal no tienen mucho éxito al tratar de seducir a estos sigilosos e independientes gladiadores del equilibrio. También suelen ser bastantes tranquilos, y no atacarán a nadie que los provoque, sin embargo, como ya hemos dicho, existen algunas excepciones.
Reglas especiales:
•		Como sucede con la mayoría de los guerreros elfos, un marcial escasamente puede jugarse a combatir valiéndose de su fuerza física, ya que la misma no suele ser muy grande. Esta categoría aumenta en 2 su (A) ya que se presenta como su arma principal frente a cualquier contrincante, de esta manera también aumenta en +1 su (P), para combinar sus cinco sentidos con su destreza.
•	Se obtendrá de forma gratuita la ventaja Luchar Cegado.
•	Haciendo alarde de su destreza sobrenatural, el elfo tendrá –1 en su Iniciativa en todos los niveles impares.
•		La perfección de este personaje es tal que podrá depositar todo el peso y energía de su cuerpo en la yema de sus dedos, para así trepar por las paredes. Un marcial podrá correr, saltar, caminar con sus manos e incluso pararse sobre cualquier superficie sólida, haciendo una tirada de (A) -2, si se desea trasladarse por el techo, será entonces -4.
•		Ya comenzará el juego con las pericias Acrobacias y Equilibrio, Amagues y Sorprender debido a que las ha utilizado mucho durante su entrenamiento.
 
•		Si alguien llegase a atacar al personaje mientras se encuentre durmiendo, éste tendrá una oportunidad de despertarse justo a tiempo y entrar en combate sin penalización alguna. Para realizar tal proeza, habrá que hacer un chequeo de (P).
•		Una vez cada dos niveles, el personaje podrá usar una técnica idéntica al conjuro Camuflarse con la sombra, también podrá ser detectada como un conjuro.
•		A diferencia de otros seres por cada punto de (P) que tenga el personaje a partir de 13 (inclusive) no ganará 1, sino 2 puntos adicionales de ventajas.
•		Atento, estratega y alerta el personaje bonifica sus reflejos gracias a su (P), por cada punto de (P) 13 (inclusive) que posea bonificará en 1 su Ar.
•		Elasticidad: Si alguien quiere dejar de estar adyacente al marcial no deberá realizar el control clásico de (A), ya que éste penalizará en 1 por nivel la tirada del que intenta escapar.
•		Secretos marciales: Todas las destrezas de semejantes combatientes son conocidas únicamente por su cofradía, dichos talentos son desconocidos para el resto de los luchadores convencionales y es por ello que se tratan de guerreros letales. Pueden utilizarse repetidas veces, aunque suelen requerir bastantes PC. A seguir se muestran los movimientos enigmáticos de los que éstos se enorgullecen:
1.	Patada marcial: El personaje puede efectuar una espectacular patada dirigida especialmente hacia la cara del enemigo u otras partes vitales. Debido a que el golpe es una fuerte patada voladora causará 3D6+2 PG al rival más la fuerza del atacante y todos sus modificadores correspondientes. Esta acción no ocupa tiempo alguno durante el turno, aunque requiere 4 PC y los controles típicos de un ataque en combate cuerpo a cuerpo.
2.	Ataque final: Todos los golpes en combate cuerpo a cuerpo que realice el personaje causarán doble daño, sin embargo, el guerrero requerirá de todo un turno sin hacer nada antes de ejecutar tal acción. No se podrá combinar con ningún otro ataque especial.
3.	Lluvia roja: El guerrero obtendrá +4 al Ataque o Disparos, sin embargo, requerirá de todo un turno sin hacer nada antes de ejecutar tal acción. No se podrá combinar con ningún otro ataque especial.
4.	Parálisis: El personaje puede dar un duro golpe a una parte específica del cuerpo del objetivo para adormecer a ese miembro durante 1D4 turnos. Para hacer esto, habrá que hacer una tirada de Ataque –5 (además de la penalización por armadura). Si tiene resultado, y el rival no supera una tirada de (R) restando el nivel del marcial, ese miembro quedará inmovilizado. Si el objetivo llegase a ser la cabeza, el atacado quedará mareado en ese mismo instante, y no podrá hacer literalmente nada. Si se quiere golpear directamente a la cabeza, la víctima deberá tener un tamaño inferior a 2m y no vestir ningún yelmo, diadema o similar.
5.	Muralla: Durante un turno el personaje puede utilizar su tirada de Defensa ilimitadas veces contra ataques a distancia y conjuros de Disparo (si es que puede esquivarlos), siempre aplicando los penalizadores correspondientes que estas agresiones generan. Esta destreza exige gastar 4 PC adicionales y puede acumularse con la ventaja Máxima Defensa.
Alineación: Cualquier clase de alineación se les permite tener a los marciales, aunque son excelentes como sujetos neutrales.
Enanos:

Maestro de armas:
Ropajes y adornos: Los amos de las armas carecen de algún atuendo característico o que los diferencia, con la única excepción de su gran cantidad de hachas y martillos, las armas enanas. Cinturones repletos de hachas arrojadizas, enormes mazos a dos manos en la espalda del guerrero y un arma en cada mano.
Forma de vida: Al igual que infinidad de guerreros, los maestros de armas emplean su tiempo completo a sus misiones y aventuras. Durante su desarrollo y preparación se especializaron totalmente en el manejo de las hachas y mazos, y aún en sus viajes siguen entrenándose en ellas.
Actitud: Nada especial que no tenga un enano normal. Si algo llegase a diferenciar a estos enanos es su gran pasión por los desafíos y demostrar que el hacha y el martillo es la mejor de las armas.
Reglas especiales:
•	Al ser un guerrero tan especializado requiere 10% extra de experiencia para pasar al siguiente nivel.
•	Posee especialización en todas las hojas pesadas y armas pesadas existentes.
•	Siempre que use un hacha o mazo tendrá +2 a su Ataque/Disparos y hará crítico con +2 en el D20 (en vez de
+1 por especialista).
•		Un maestro de armas podrá parar un ataque en combate cuerpo a cuerpo con cualquier hacha o martillo y tratarlo como un escudo pequeño a todos sus efectos (Defensa, Ar, etc.), incluyendo si usa un arma a dos manos (podrá atacar y parar en el mismo turno con ella).
•	El enano tiene -3 para golpear en zonas específicas, y -6 para golpear en torso y cabeza.
 
•	El enano comenzará el juego con 3 hojas pesadas y 3 armas golpeantes en su inventario.
•	Tan furioso combatiente penaliza cualquier tirada de Defensa en -2 por la precisión de sus ataques.
•		Desde nivel 1 el enano ascenderá de categoría de dado para infligir daño al blandir un hacha o martillo como el experto que es. En el futuro, cuando realmente haya alcanzado nivel 8, ascenderá de categoría una vez más. Por lo tanto, a nivel 1, un hacha de doble filo provocará 1D10 PG, mientras que a nivel 8, provocará 1D12.
•		Durante un turno cada tres niveles, nadie podrá utilizar su Defensa para frenar los golpes del enano, semejante ofensiva puede ser devastadora.
•		Arma arrojadiza: Este enano es una lluvia de hachas de acero y martillazos, por lo tanto podrá lanzar un ataque de disparos con un hacha arrojadiza o martillo arrojadizo sin perder tiempo alguno durante el turno. El personaje tampoco consumirá acción en desenfundar la arrojadiza ni PC adicionales.
•  +1 a sus habilidades de (L).
Alineación: Esta clase de guerreros no tiene ninguna restricción a la misma.
Civil: Ídem humanos.

Defensores:
Ropajes y adornos: Esta clase de enanos suele llevar pesadas armaduras en sus robustos cuerpos. Gustan de llevar armas que estén a la vista como grandes mazas o hachas. También son prolijos y ordenados, así que no es habitual que lleven horribles adornos en sus cuerpos como calaveras colgando de sus cuellos o grandes cicatrices.
Forma de vida: Dedican sus vidas completamente a su rey, muy parecidos a los caballeros humanos, además también poseen cierto carisma en la sociedad. Son muy leales a sus autoridades y a las leyes autóctonas de la región. Un enano defensor vive exclusivamente para su palabra y honor, cuando éste muera, harán lo que sea para enmendar dicha situación. La política es otra motivación para dichos enanos.
Actitud: Son bastante tranquilos en la vida cotidiana, no obstante, cuando alguien planea malas intenciones contra su monarca, un enano defensor nunca dejará de perseguir al conspirador hasta que lo haya matado. También son dedicados a su labor, y no se dan por vencido fácilmente.
Reglas especiales:
•	Su dura constitución consigue darle +1 a su (R) y su enrome fuerza de voluntad le da +2 a (L).
•	También comenzará el juego con una armadura de cotas de malla (a menos que le alcance el dinero para comprar alguna mejor antes de comenzar) y con un arma gratis a elección.
•	Entrenado para resistir batallas de larga duración ganará 1 PC adicional por nivel.
•	Se obtendrá una bonificación de +2 a la tirada de Defensa.
•	El enano defensor puede especializarse en 5 armas diferentes al comenzar el juego en vez de 2.
•	Un guerrero de la corte enanil conoce la ventaja Estrategia.
•		El enano posee una característica muy particular: su piel. La misma está bendecida por los dioses y sacerdotes que defienden la paz y el orden. Cada golpe físico que se le dé al enano se verá reducido en 1 punto por nivel (del enano).
•	Además, su cuerpo es duro y firme, comenzará con 2 puntos de Ar natural.
•		Los sacerdotes de la corte emplean poderosos conjuros de regeneración a los defensores. Esta clase de protección permite regenerar gradualmente cualquier parte del cuerpo mutilada (con excepción de la cabeza) en 1D4 días.
•		Al dormir o descansar, estos enanos no deben tirar 1D3 (ni sumar su ajuste por resistencia) para curarse de sus heridas. En vez de eso, el guerrero recuperará directamente 25 PG por día.
•	Dicho guerrero es totalmente inmune a los conjuros de ataque.
•		La última bendición que reciben estos leales enanos es una resistencia natural a la magia de 1 punto por nivel en el D20. La protección actuará contra hechizos perjudiciales para el enano, aunque SÍ tendrán efecto los hechizos que le lance cualquier sacerdote de Gromril o guerrero rúnico. Esta poderosa bendición puede acumularse con la ventaja Resistencia natural a la magia, aunque no que le proporcionará una segunda tirada de salvación, sino un bonificador de +2.
Alineación: Un enano defensor es un guerrero que está entrenado especialmente para defender al bien y a la justicia, no obstante, pueden hallarse individuos neutrales o incluso malvados.
Elemental: Idem elfos.

Ingenieros: Ropajes y adornos: Forma de vida:
 
Actitud:
Reglas especiales:
•	El instruido enano bonifica en 2 su tirada de (I).
•		Dicho personaje cuenta con un inventario muy completo, a él no le falta cargar con nada. Para llevar a cabo sus ideas y transformarlas en objetos materiales necesita herramientas, componentes y accesorios, por ello, dicho enano cuenta con el siguiente equipo al comenzar a jugar: una pala, pica, martillo, clavos, serrucho, ganzúas, pinzas, tijeras, cincel, diario para anotar ideas, pluma, tinta, 10m de cuerda, 1m de cadenas, un garfio para cuerda, poleas, lámpara de aceite, brújula, cinturón con compartimientos, guantes, casco de seguridad, catalejo y un silbato.
•		Al comenzar el juego se tendrán las siguientes pericias: Ciencia y alquimia, Desactivar mecanismos, Facilidad con los números, Estafar y Falsificar, Leer y escribir y Usar ganzúas.
•		Virote: El enano es un maestro en el funcionamiento de maquinarias y tecnologías modernas, por ello es bueno calculando distancias, impactos y demás. Al utilizar armas de fuego, cada tiro que ejecute podrá atravesar a sus víctimas dañando también a quienes se encuentran detrás de estas. Es importante saber que los misiles no conseguirán traspasar a los objetivos grandes, y sólo se verán afectados hasta 3 cuerpos con el mismo proyectil y aquellos que se encuentren directamente uno detrás de otro. El disparo irá perdiendo fuerza con cada ser que sea atravesado, como lo indica el siguiente gráfico:






Primer blanco	Segundo blanco	Tercer blanco
sin	restando –2	restando –4
penalización	al daño	al daño


•		Maestro de la cuerda: Haciendo un chequeo de (I), el enano puede ejecutar diferentes tipos de nudos con una cuerda, los mismos sirven para las siguientes circunstancias:
1.	El personaje hace un nudo capaz de soportar pesos enormes, por cada nivel que sea éste podrá lograr que una cuerda resista una carga de hasta 100kg por nivel, sea en un recorrido vertical u horizontal.
2.	Las ataduras que realice el enano no podrán ser desechas fácilmente, alguien que quisiese soltarse de las mismas tendrá que efectuar un control de (F) o de (A) penalizado en 3 puntos por nivel del autor. .
3.	Si el ingeniero fuese víctima del ataque de una red, no sufrirá penalizaciones a su tirada de (F) para librarse de ella. Nótese que para todos los usos con cuerda el genio debe realizar un control previo de Construir, pues bien, para este no.
4.	Teniendo una cuerda con 20m de largo el personaje podrá confeccionar una red como la que figura en la lista de armamento.
5.	Si el ingeniero estuviese atado, e intentase librarse con ayuda de la pericia Usar ganzúas, recibirá una bonificación de +4.
•		Instalar trampas: Este personaje es capaz de sorprender a otros mediante dispositivos creados por él mismo. Para que el genio las ejecute exitosamente no deberá de realizar cheque alguno, aunque tendrá que disponer del tiempo indicado más adelante y no podrá hacerlas más de una vez al día cada una. Dichas sorpresas estarán ocultas al ojo “común” pero podrán ser descubiertas con un chequeo de Detectar trampas y desarmadas con la pericia Desactivar mecanismos (su creador podrá hacerlo automáticamente). A seguir se detallan los dispositivos capaces de ser diseñados, ya se comenzará el juego con los materiales necesarios:
1.	Trampa mortal: El personaje deja en una superficie de 10m de diámetro montones de vidrios rotos, piedras afiladas y espinas vegetales, lo que le llevará 20 minutos. El que pase por allí sufrirá 1D6 PG multiplicados por nivel.
2.	Alarma: Una delgada conexión de hilos y cascabeles permite al enano y sus aliados enterarse si alguien penetró en una zona de 30m de diámetro. Es importante aclarar que el intruso podrá chequear Detectar Ruidos y caer en la cuenta de que ha sido descubierto. Instalar Alarma requerirá de 30 minutos.
3.	Bomba de estruendo: Funciona de manera similar a Alarma. El enano deja pequeñas esferas de cerámica en un área de 30m de diámetro, y que al ser pisadas emitirán un atronador estallido capaz de escucharse a 200m de distancia. Toma 20 minutos instalarlas adecuadamente.
4.	Hoyo oculto: El personaje cava una fosa de 3m de profundidad y 2 de ancho, luego lo cubrirá con ramas y lodo seco para ocultarlo. El que caiga adentro podrá superar una única tirada de Trepar menos
 
el nivel del ingeniero o no podrá salir hasta repetir el chequeo una vez por día. El hoyo tarda 1h en hacerse.
5.	Cavar túneles: Un experto ingeniero podrá cavar túneles de 3m por nivel de largo y hasta 2m de anchura de tener una buena pala y cualquier terreno no demasiado “duro” (de encontrarse frente a rocas sólidas o paredes de piedra se necesitará una pica). Por cada metro de largo que se desee excavar se necesitará de 1h, restando 5 minutos por nivel.
6.	Superficie pringosa: Con aceites y diferentes ungüentos el personaje chorrea una superficie de 5m de diámetro y aquel que pase por allí (siempre y cuando pese menos de 1 tonelada) tendrá que hacer una tirada de Romper menos el nivel del saboteador o quedarse pegado durante 3 turnos consecutivos. Esta trampa requiere de 1D4 turnos para instalarse.
•	Artesanías y mecanismos:
El enano ingeniero posee un sistema de invenciones y técnicas que no pueden ser igualadas por ninguna otra persona dentro de Kalaguand: máquinas de combate, mejoras y secretos que sólo esta raza conoce. A continuación se darán a conocer las mismas, es importante aclarar que el enano tendrá los materiales necesarios para fabricarlos.
Dentro de la columna Necesario se describe la cantidad de horas suficientes como para fabricar la invención.

Invento	Uso
Resortes impulsores	El ingeniero agrega resortes de tensión que incrementan el rango de disparo de arcos, ballestas, arcabuces, pistolas y atronadores en 50m adicionales.
Se podrá modificar hasta 1 arma por nivel, y cada instalación requiere de 10 minutos.
Aunque se posea la ventaja Guerrero elegante, de llegar a sacar “20” en la tirada de Disparos, los resortes se vencerán automáticamente.
Timbre eléctrico	El enano instala un pequeño dispositivo capaz de generar descargas eléctricas sobre armaduras o escudo metálicos, en ningún caso puede tratarse de un objeto mágico.
Si se coloca sobre una coraza, cada vez que el portador del objeto sea lastimado devolverá 1 de daño al atacante. De usarlo en el escudo, se provocará 1 de daño al agresor cuando el portador utilice exitosamente su Defensa (si es que para con el escudo y no con otra arma). El dispositivo se destruirá en caso de verse rota la armadura sobre la que se instaló, lo
mismo sucederá si se obtiene “20” en el escudo que tenga el Timbre eléctrico. El enano ingeniero podrá mantener hasta un mecanismo activo por nivel.
Ecuación de la refacción	Haciendo un chequeo de Construir/Diseñar. El personaje siempre sabe cómo reparar cualquier cosa: estructuras, textiles, vehículos y demás.
Para ejecutar la Ecuación de la refacción serán requeridos los materiales y herramientas necesarias (consultar con el DJ y utilizar el sentido común).
Dicha fórmula no servirá con armas y armaduras.
Pegamento	El enano ingeniero crea un poderoso ungüento capaz de unir dos o más objetos de cualquier material. El pegamento posee una (F) de 20 +1 por cada nivel del ingeniero, y para poder despegar algo untado por éste habrá que hacer una diferencia de (F).
El poder de unión de semejante sustancia es capaz de durar hasta 10 años completos.
Candado de múltiples cerrojos	Con maestría el enano ingeniero modifica un candado ordinario para convertirlo en un dispositivo de máxima seguridad. Hasta 1 cerrojo adicional por nivel se instala dentro del candado común, por lo que para abrirlo habrá que realizar tantos chequeos de Usar ganzúas como cerrojos se hayan instalado.
Una vez modificado el candado, la llave que abría originalmente al mismo ya no servirá, sino que el ingeniero habrá inventado una nueva que abrirá automáticamente todas las
defensas que este colocó.
Palancas	El personaje diseña un sistema de palancas mecánicas capaces de levantar objetos de hasta
una tolerada por nivel.
Motor para botes	El enano lleva consigo siempre un singular motor portátil diseñado exclusivamente para instalarse en embarcaciones pequeñas, el mismo será capaz de acelerar la marcha de éstas en un 35%.
Semejante motor funcionará a base carbón y leña, por lo que, previamente, el enano tendrá que recolectar una “buena cantidad” de éstos para emprender un viaje acuático.
Cohetes	El enano prepara, con pequeñas dosis de pólvora, cohetes para ser lanzados en la noche y así iluminar el cielo durante todo un turno. El estallido del proyectil en el firmamento será capaz de verse a kilómetros de distancia, ideal para utilizarse como alarma o para llamar la atención de alguien.
Hélices	Dentro de sus bolsas y mochilas el enano cuenta consigo un par de hélices desplegables que se activarán al caer éste de una altura mayor a 10m por nivel sin sufrir daño alguno.
Con las hélices no se podrá volar, sino que simplemente se frenarán caídas, aunque no funcionarán de llegar a sobrepasar la carga que la fuerza del personaje le permita llevar
consigo.
 

	Usar dichas hélices no consume acción alguna durante el turno.
Es necesario aclarar que muchas de las invenciones del enano ingeniero son de efecto permanente, y si bien éste posee los componentes necesarios para realizarlas, periódicamente tendrá que recargar materiales en bazares, herrerías, carpinterías y demás.
Alineación: No hay ninguna conducta específica que caracterice a este personaje.

Duendes:
Jinetes de Águilas:
Ropajes y adornos: Sus ropas son ligeras y sueltas. Usualmente emplean armas arrojadizas con los que pueden atacar a sus enemigos a distancia. Aquellos duendes que trabajan junto a los elfos de los bosques emplean uniformes adaptados para la ocasión, que también incluye armamento. Los elementos u objetos de color azul, gris o verde también son de su agrado, y por ello suelen ser teñir su cabello en dichos tonos.
Forma de vida: Acostumbran a habitar cerca de sus hogares, cuando se alejan lo hacen con su montura, la cual disfruta de su compañía. Varias veces al día patrullan los bosques en busca de algún ser maligno al cual no dudarán en combatir, siempre bajo la el conocimiento de autoridades elfas, para quienes suelen trabajar. En muchas ocasiones los jinetes de águilas participan como incursores para las huestes de los elfos silvanos y recolectan valiosa información o acaban con la infantería ligera.
Actitud: Son amantes empedernidos de las aves, y al poder comprender su lenguaje, suelen provocar sonidos singulares e incluso llegan a imitarlas. Al mismo tiempo, al ser soldados se muestran un tanto más serios que sus congéneres, aunque siguen siendo duendes, y por eso no olvidan de mostrar su instinto juguetón y curioso.
Reglas especiales:
•		Tal lo indica su nombre, comenzará el juego con un águila a modo de montura, que se mostrará como obediente amigo y protector de su jinete. La criatura acatará toda orden coherente de su amo y entenderá las exigencias más simples como “Ataca” o “Vigílalo”.
•		A nivel 1 el personaje contará con el estilo de lucha adicional, que será Lucha montada (es importante aclarar que montado sobre el animal volador, el duende no obtendrá bonificación adicional al Ataque por estar en una postura elevada, directamente, dicho modificador lo brindará el estilo de lucha).
•		Se posee la pericia Cabalgar en situaciones extrañas. El duende también tendrá la pericia Sonido y ventriloquia. Es importante aclarar que este habrá desarrollado una relación tan próxima con su águila que no será necesario realizar chequeo alguno para imitarla (tampoco será necesario que haga un control para comunicarse con otras aves, comprende a la perfección su locución y sistema de señales).
•		El maravilloso vínculo entre corcel y animal será tal que el animal poseerá el mismo número de Ataque (solamente el número por nivel), Iniciativa y Ar (incluyendo PG) del primero, aunque no se aplicarán modificadores mágicos, modificadores al daño por (F), especializaciones, etc. El animal también compartirá las tiradas de Defensa de su amo, aunque el jugador tendrá que racionarlas como él las prefiera en el momento de evadir las agresiones.
•		El ave, que contará con 3 ataques provocará 1D4 PG. Por cada nivel impar del duende se provocará +1 al daño.
•		La sorpresa de tantos ataques provocados por el animal hacia su objetivo provocarán que el mismo penalice en 2 su Defensa.
•		Los perforantes y cortantes ataques que se sumen a los del animal tendrán como resultado una bonificación de +1 en el D20 para provocar golpes críticos.
•		Cuando descienden en picada es muy difícil golpear a esta clase de guerreros. La única forma de golpearlos en combate cuerpo a cuerpo (siempre y cuando el halcón se halle volando) es parando uno de sus ataques, en donde la velocidad del animal disminuirá, sino el ave pasará de largo y será imposible dañarle. Esta técnica es una versión mejorada de la ventaja Carga de Caballería, y como tal, sólo tendrá éxito si se declara la carga.
•		Tantos ataques simultáneos y a gran velocidad hacen que el duende tenga la ventaja gratuita Interferir Conjuros, aunque sólo si golpea sobre su halcón, si llegase a separarse de él perderá la ventaja.
•		Estos duendes no montan águilas comunes y corrientes, estos son animales bendecidos por el dios Keergal, y su amor al dios de la naturaleza fortalece el espíritu y poder del ave. A medida que vaya ascendiendo de nivel el duende y su fiel corcel se verán bonificados por las siguientes habilidades (todas pueden usarse únicamente montado y no a pie):
Bendiciones de Keergal:
Nivel 1: Una vez por batalla este personaje puede ganar de manera automáticamente la Iniciativa, si alguien posee una habilidad igual o similar saldrá victorioso el que mejor modificador tenga en dicho control.
Nivel 3: Los ataques que el ave lance se considerarán mágicos.
 
Nivel 5: Una vez por batalla todos los ataques y conjuros de Disparo o a distancia fallarán de manera automática durante un turno.
Nivel 7: Una vez por batalla y durante un turno todos los ataques lanzados por el águila no podrán ser esquivados o defendidos mediante ninguna tirada de Defensa. Este poder es absolutamente espontáneo y no requiere ningún aviso previo para utilizarse, por lo que puede ser anunciado en el momento en que el rival va a intentar protegerse.
Nivel 9: Una vez por batalla y durante todo un turno los ataques del ave rapaz se considerarán críticos en todos sus efectos.
•		Por último, su velocidad característica le brindará otra ventaja: Esquivar encentamientos, que podrá utilizarla con o sin su águila.
Alineación: Pueden comportarse como cualquier duende.

Señor de las Bestias:
Ropajes y adornos: Los señores de las bestias poseen vestimentas salvajes, sueltas y poco elaboradas. También gustan de los brazaletes, collares y aretes. Es muy usual que lleven en el cabello largo y sucio, lo mismo sucede con sus garras.
Forma de vida: Los amos de las bestias pasan todo el día en el bosque o llanuras a la espera de algún intruso que no sea bienvenido. En sus ratos libres, aparte de holgazanear y jugar, buscan animales que deseen su compañía y quieran ayudarlo en su trabajo. Aparte de eso, ocupan mucho de su tiempo entrenando a sus criaturas o mejorando sus conjuros.
Actitud: No son bastantes conversadores y sociables con aquellos ajenos a su medio. Al estar en tanto contacto con los animales sus gestos quizás son algo… “raros”. Aunque también pueden ser amigables, su mejor forma de expresarse es con sus criaturas, a las que aman más que nadie en el mundo.
Reglas especiales:
•	Este guerrero obtiene una bonificación de +3 a su (F) y +1 a (A).
•	Al comenzar el juego, el señor de las bestias comenzará con la ventaja gratuita Conocedor de Peligros.
•		Los señores de las bestias contienen las siguientes pericias: Cabalgar en situaciones Extrañas, Sonido y ventriloquia y Entrenamiento Animal.
•	El duende contará con afiladas garras, con las cuales podrá infligir 1D4 PG.
•		A diferencia de otras categorías, esta es capaz de agredir con su boca junto al resto de sus ataques. Con la misma, el duende tendrá –2 a su tirada de Ataque (el estilo de lucha Luchar sin Armas anula dicho penalizador) y provocará 1D4 PG sin bonificación a la (F).
•		Con fuertes músculos en sus piernas y gran destreza, estos duendes pueden dar enormes saltos en el aire de hasta 15m de altura.
•		Posee un desarrollado físico y un duro entrenamiento a la intemperie, que combinado a sus místicos sortilegios le convierten en un formidable contrincante a la hora de resistir una batalla. Un guerrero señor de las bestias obtiene 3 PG por nivel, incluyendo nivel 1.
•		Mientras se encuentren en junglas, selvas, pantanos y/o pastizales, estos duendes pueden tirar Esconderse y se volverán totalmente invisibles, aunque emitirán olores y sonidos. Si llegasen a atacar o realizar movimientos bruscos su camuflaje desaparecerá.
•	La naturaleza mágica de esta raza, su enorme afinidad hacia los animales y la combinación de todas sus habilidades permiten a este personaje adoptar la forma de diferentes criaturas. La transformación requerirá un chequeo de Concentración y se podrá efectuar 2 veces por nivel cada día, durando hasta 10 minutos. No se puede hacer más de una transformación por turno. Bajo dicho estado se desvanecerán todos los objetos del personaje y se materializarán al retomar su verdadera forma, la inteligencia y voz no sufrirán cambios jamás, también se obtendrán nuevas virtudes descritas a seguir (el duende será capaz de comunicarse automáticamente con animales de la misma especie que la que se haya transmutado):

Transformación	Efecto
Águila	•	El duende transformado podrá volar a una velocidad de 80km/h (sumando 5km/h adicionales por nivel) y a una altura máxima de 300m.
•	Su daño con pico y ambas garras equivaldrán a todos los efectos con la boca y zarpas del duende a la hora de calcular daño, aunque sumarán 1 PG adicional por nivel.
•	El uso requiere cierta “quietud” para emplearse, y permite al duende incrementar su vista de forma tan impresionante como si poseyera un largavistas. Dicho “zoom” permitirá contemplar a la perfección una zona de 200m de distancia durante 1 minuto por nivel. Vista de águila otorga
+5 a Rastreo y Sospecha.
Araña	•	Su diminuto tamaño dará +10 a Sigilo, Esconderse y Contorción.
•	El poder de su sentido del tacto otorgará +5 a Detectar Trampas.
•	Con esta transformación se podrá escalar cualquier superficie sólida automáticamente.
 

Lobo	•	+10 a Detectar Ruidos, Correr y Orientación.
•	+5 a Detectar Trampas y + Rastreo.
•	Se duplica el alcance de la infravisión del personaje.
Oso	•  +10 a (F) y (R), -4 a (A).
•	Su tremenda presencia mejorará en 5 la tirada de Intimidar.
•	El oso podrá dar 3 ataques con sus garras y boca, provocando 1D6 PG cada uno, más especializaciones, estilos, ventajas, etc. El daño de cada golpe se incrementará en +1 por nivel. De contar con el estilo de lucha sin armas, el animal provocará 1 PG extra.
•	Se duplicarán los PG, sumando +2 extra por nivel a dicho cálculo.
•	Como Ar natural el personaje tendrá 3 puntos, sumando +1 por cada nivel impar.
Tiburón	•	Bajo este estado el personaje podrá nadar hasta 50m bajo el agua (tanto dulce como salada).
•	El cuerpo de dicho animal otorga +15 a Nadar y +12 a (F) y (R).
•	Se podrá efectuar un único ataque en el turno, que provocará 3D6, sumando +1 por cada nivel. Se tendrá en cuenta la (F), especializaciones en armas, etc. También dará +4 a la oportunidad de provocar un golpe crítico.
•	Se obtienen 3 puntos de Ar.
Alineación: Cualquiera.

*/