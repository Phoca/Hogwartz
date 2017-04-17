import User from './User';
import GameLoop from './GameLoop';

import $ from 'jquery';

import CommonRoomField from './fields/CommonRoomField';
import DrawEventCardField from './fields/DrawEventCardField';
import DrawPotionCardField from './fields/DrawPotionCardField';
import DrawSpellCardField from './fields/DrawSpellCardField';
import GainTenSpellPointsField from './fields/GainTenSpellPointsField';
import GainTwoHealthPointsField from './fields/GainTwoHealthPointsField';
import HallwayField from './fields/HallwayField';
import InfirmaryField from './fields/InfirmaryField';
import LibraryField from './fields/LibraryField';
import PortalField from './fields/PortalField';
import RoomOfRequirementField from './fields/RoomOfRequirementField';
import VanishingCabinetField from './fields/VanishingCabinetField';

var gameLoop = new GameLoop();

var greenhouseField = new GainTwoHealthPointsField();
greenhouseField.init(826, 164, 959, 323, false);

var commonRoomHufflepuff = new CommonRoomField();
commonRoomHufflepuff.init(826, 0, 1000, 183, false);

var hallwayField1 = new HallwayField();
hallwayField1.init(826, 324, 959, 463, false);

var infirmary = new InfirmaryField();
infirmary.init(826, 464, 959, 602, false);

var hallwayField2 = new HallwayField();
hallwayField2.init(826, 603, 959, 732, false);

var dungeonsField = new DrawEventCardField();
dungeonsField.init(826, 733, 959, 861, false);

var commonRoomSlytherin = new CommonRoomField();
commonRoomSlytherin.init(826, 862, 1000, 1030, false);

var quidditchPitch = new DrawEventCardField();
quidditchPitch.init(695, 862, 827, 996, false);

var hallwayField3 = new HallwayField();
hallwayField3.init(565, 862, 695, 996, false);

var potionsShop = new PotionsShop();
potionsShop.init(453, 862, 565, 996, false);

var diningHall = new GainTwoHealthPointsField();
diningHall.init(302, 862, 453, 996, false);

var hallwayField4 = new HallwayField();
hallwayField4.init(171, 862, 302, 996, false);

var commonRoomRavenclaw = new CommonRoomField();
commonRoomRavenclaw.init(0, 862, 171, 1030, false);

var charmsClassroom = new GainTenSpellPointsField();
charmsClassroom.init(38, 731, 171, 862, false);

var hallwayField5 = new HallwayField();
hallwayField5.init(38, 601, 38, 731, false);

var roomOfRequirement = new RoomOfRequirementField();
roomOfRequirement.init(38, 463, 38, 601, false);

var hallwayField6 = new HallwayField();
hallwayField6.init(38, 323, 38, 463, false);

var hagridsCabin = new DrawEventCardField();
hagridsCabin.init(38, 184, 38, 323, false);

var commonRoomGryffindor = new CommonRoomField();
commonRoomGryffindor.init(0, 0, 171, 184, false);

var aviary = new GainTwoHealthPointsField();
aviary.init(171, 41, 301, 184, false);

var hallwayField7 = new HallwayField();
hallwayField7.init(301, 41, 431, 184, false);

var library = new LibraryField();
library.init(431, 41, 566, 184, false);

var shriekingShack = new DrawEventCardField();
shriekingShack.init(566, 41, 693, 184, false);

var hallwayField8 = new HallwayField();
hallwayField8.init(693, 41, 827, 184, false);

var forbiddenForest1 = new DrawEventCardField();
forbiddenForest1.init(236, 252, 370, 394, true);

var portal1 = new PortalField();
portal1.init(370, 252, 498, 394, true);

var restrictedSection = new LibraryField();
restrictedSection.init(498, 252, 631, 394, true);

var forbiddenForest2 = new DrawEventCardField();
forbiddenForest2.init(631, 252, 764, 394, true);

var diagonAlley = new DrawPotionCardField();
diagonAlley.init(631, 394, 764, 534, true);

var threeBroomsticksField = new InfirmaryField();
threeBroomsticksField.init(631, 534, 764, 667, true);

var forbiddenForest3 = new DrawEventCardField();
forbiddenForest3.init(631, 667, 764, 799, true);

var portal2 = new PortalField();
portal2.init(500, 667, 631, 799, true);

var snapesCabinet = new PotionsShop();
snapesCabinet.init(369, 667, 500, 799, true);

var forbiddenForest4 = new DrawEventCardField();
forbiddenForest4.init(234, 667, 369, 799, true);

var dumbledoresOffice = new DrawSpellCardField();
dumbledoresOffice.init(234, 533, 369, 667, true);

var vanishingCabinet = new VanishingCabinetField();
vanishingCabinet.init(234, 393, 369, 533, true);


greenhouseField.setNeighbours([commonRoomHufflepuff, hallwayField1]);
hallwayField1.setNeighbours([greenhouseField, infirmary]);
infirmary.setNeighbours([hallwayField1, hallwayField2, threeBroomsticksField]);
hallwayField2.setNeighbours([infirmary, dungeonsField]);
dungeonsField.setNeighbours([hallwayField2, commonRoomSlytherin]);
commonRoomSlytherin.setNeighbours([dungeonsField, quidditchPitch]);
quidditchPitch.setNeighbours([commonRoomSlytherin, hallwayField3]);
hallwayField3.setNeighbours([quidditchPitch, potionsShop]);
potionsShop.setNeighbours([hallwayField3, diningHall, snapesCabinet]);
diningHall.setNeighbours([potionsShop, hallwayField4]);
hallwayField4.setNeighbours([diningHall, commonRoomRavenclaw]);
commonRoomRavenclaw.setNeighbours([hallwayField4, charmsClassroom]);
charmsClassroom.setNeighbours([commonRoomRavenclaw, hallwayField5]);
hallwayField5.setNeighbours([charmsClassroom, roomOfRequirement]);
roomOfRequirement.setNeighbours([hallwayField5, hallwayField6, vanishingCabinet]);
hallwayField6.setNeighbours([roomOfRequirement, hagridsCabin]);
hagridsCabin.setNeighbours([hallwayField6, commonRoomGryffindor]);
commonRoomGryffindor.setNeighbours([hagridsCabin, aviary]);
aviary.setNeighbours([commonRoomGryffindor, hallwayField7]);
hallwayField7.setNeighbours([aviary, library]);
library.setNeighbours([hallwayField7, shriekingShack, restrictedSection]);
shriekingShack.setNeighbours([library, hallwayField8]);
hallwayField8.setNeighbours([shriekingShack, commonRoomHufflepuff]);
commonRoomHufflepuff.setNeighbours([hallwayField8, greenhouseField]);

forbiddenForest1.setNeighbours([portal1, vanishingCabinet]);
portal1.setNeighbours([forbiddenForest1, restrictedSection]);
restrictedSection.setNeighbours([portal1, forbiddenForest2, library]);
forbiddenForest2.setNeighbours([restrictedSection, diagonAlley]);
diagonAlley.setNeighbours([forbiddenForest2, threeBroomsticksField]);
threeBroomsticksField.setNeighbours([diagonAlley, forbiddenForest3, infirmary]);
forbiddenForest3.setNeighbours([threeBroomsticksField, portal2]);
portal2.setNeighbours([forbiddenForest3, snapesCabinet]);
snapesCabinet.setNeighbours([portal2, forbiddenForest4, potionsShop]);
forbiddenForest4.setNeighbours([snapesCabinet, dumbledoresOffice]);
dumbledoresOffice.setNeighbours([forbiddenForest4, vanishingCabinet]);
vanishingCabinet.setNeighbours([dumbledoresOffice, forbiddenForest1, roomOfRequirement]);
