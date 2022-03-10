
insert into categorias values (default,'Aventura',now(),now());
insert into categorias values (default,'Cena Gourmet',now(),now());
insert into categorias values (default,'Relax',now(),now());
insert into categorias values (default,'En Equipo',now(),now());
insert into categorias values (default,'Viaje',now(),now());

insert into estados values (0,'Creado',now(),now());
insert into estados values (1,'En Proceso',now(),now());
insert into estados values (2,'dos',now(),now());
insert into estados values (3,'tres',now(),now());
insert into estados values (4,'Borrado',now(),now());

insert into products values(default,1,'Salto en paracaidas','desde un avion, con instructor te tiras','imagen',5000,0,now(),now());
insert into products values(default,2,'Cena en restaurante','desde un avion, con instructor te tiras','imagen',5000,0,now(),now());
insert into products values(default,4,'juegos en equipo','paint ball','imagen',5000,0,now(),now());
insert into products values(default,3,'Dia de spa','Relajate con un dia de spa','imagen',5000,0,now(),now());

insert into users values(default,'pepe','lopez.pepe@gmail.com','contra123','salt',false,now(),now());