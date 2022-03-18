insert into categories values (default,'Aventura','https://cdn.atrapalo.com/common/photo/event/4/7/9/4722/370006/vertic_880_0.jpg',now(),now());
insert into categories values (default,'Cena Gourmet','https://dam.cocinafacil.com.mx/wp-content/uploads/2020/11/cena.jpg',now(),now());
insert into categories values (default,'Relax','https://welcometoibiza.com/wp-content/uploads/Ibiza-Gran-Hotel-Open-Spa-1.jpg',now(),now());
insert into categories values (default,'En Equipo','https://www.es-paintball.com/Imagenes/mejores-tacticas-estrategias-jugar-a-paintball.jpg',now(),now());
insert into categories values (default,'Viaje','https://img.blogs.es/anexom/wp-content/uploads/2020/01/photo-1519904981063-b0cf448d479e.jpeg',now(),now());

insert into states values (default,'Creado',now(),now());
insert into states values (default,'En Proceso',now(),now());
insert into states values (default,'dos',now(),now());
insert into states values (default,'tres',now(),now());
insert into states values (default,'Borrado',now(),now());

insert into products values(default,'Salto en paracaidas','desde un avion, con instructor te tiras','ihttps://ba-h.com.ar/wp-content/uploads/2018/04/turismo-salto-paracaidas-buenos-aires_2.jpgmagen',5000,3,now(),now(),1,1);
insert into products values(default,'Cena en restaurante','Cena con vista al mar','https://i.pinimg.com/originals/d6/fd/39/d6fd39431cab88e342157b2e19b3f2fb.jpg',5000,2,now(),now(),1, 2);
insert into products values(default,'juegos en equipo','paint ball','https://www.aventurasengalicia.com/upload/excursiones/21031104133.jpg?crc=4091525304',5000,3,now(),now(),1,3);
insert into products values(default,'Dia de spa','Relajate con un dia de spa','https://www.nupciasmagazine.com/wp-content/uploads/2019/02/portada-2.jpg',5000,5,now(),now(),1,3);
insert into products values(default,'Ciclismo','El ciclismo de montaña es un deporte de aventura','https://forriders.es/wp-content/uploads/2019/11/mountain-bike.jpg',5000,3,now(),now(),1,4);


insert into users values(default,'admin','admin@gmail.com','admin123','salt',true,now(),now());

insert into carts values(1,4,123,now(),now(),3,3,1);
insert into orders values (1,33445566,22,1,123,now(),now(),3);
insert into reviews values (1,'hola review',now(),now(),3,1);


