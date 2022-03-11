
insert into categorias values (default,'Aventura','imagen',now(),now());
insert into categorias values (default,'Cena Gourmet','imagen',now(),now());
insert into categorias values (default,'Relax','imagen',now(),now());
insert into categorias values (default,'En Equipo','imagen',now(),now());
insert into categorias values (default,'Viaje','imagen',now(),now());

insert into estados values (0,'Creado',now(),now());
insert into estados values (1,'En Proceso',now(),now());
insert into estados values (2,'dos',now(),now());
insert into estados values (3,'tres',now(),now());
insert into estados values (4,'Borrado',now(),now());

insert into products values(default,1,'Salto en paracaidas','desde un avion, con instructor te tiras','imagen',5000,0,now(),now());
insert into products values(default,2,'Cena en restaurante','desde un avion, con instructor te tiras','imagen',5000,0,now(),now());
insert into products values(default,4,'juegos en equipo','paint ball','imagen',5000,0,now(),now());
insert into products values(default,3,'Dia de spa','Relajate con un dia de spa','imagen',5000,0,now(),now());

insert into users values(default,'pepe','Lopez','lopez.pepe@gmail.com','contra123',false,now(),now());
