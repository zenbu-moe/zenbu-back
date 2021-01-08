drop database if exists `zenbu_user`;
create database zenbu_user CHARACTER SET utf8 COLLATE utf8_general_ci;

drop table if exists `zenbu_user`.`info`;
create table info(
    id int not null auto_increment,
    username text(50),
    passwd text(1000), -- > encrypted, obviously.
    email text(100),
    verified boolean DEFAULT 0, -- > email verification
    donatorLevel int(1) DEFAULT 0,
    -- / a collection of 'post.id' divided by ';'
    activities longtext DEFAULT "", -- newest always at end
    -- / the layout of their profiles, probably json(?)
    profileLayout text(10) DEFAULT "placeholder",
    colorAccent text(10) DEFAULT "placeholder", -- > hex value
    registerDate DATETIME,

    -- idk ill add more probably
    PRIMARY KEY (id)
);

drop database if exists `zenbu_user`.`activities`;
create table activities(
    id int not null auto_increment,
    poster int,
    content mediumtext,
    post_date datetime,
    -- likes: "userid;userid;...;"
    likes text,
    -- replies: "replyid;replyid;...;"
    replies text
);

-- drop database if exists `zenbu_user`.`tbd`;
-- create table tbd(
--     -- tbd
-- );

drop database if exists `zenbu_media`;
create database zenbu_media CHARACTER SET utf8 COLLATE utf8_general_ci;

drop table if exists `zenbu_media`.`anime`;
create table anime(
  id int not null auto_increment,
  title text,
  description mediumtext,
  format set('TV', 'Movie', 'TV Short', 'Special', 'OVA', 'ONA'),
  season set('Fall', 'Winter', 'Spring', 'Summer'),
  year int(4),
  genres set('Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Horror', 'Hentai', 'Mahou Shoujo', 'Mecha', 'Music', 'Mystery', 'Psychological', 'Romance', 'Sci-fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller'),
  airing_status set('Airing', 'Finished', 'Not yet aired', 'Cancelled'),
  origin set('Japan', 'South Korea', 'China', 'Taiwan'),
  source_mat set('Original', 'Manga', 'Light Novel', 'Novel', 'Anime', 'Visual Novel', 'Visual Game', 'Doujinshi', 'Other'),
  start_date date,
  end_date date,
  episodes int(6),
  episode_dur int(6),
  characters text,
  staff text,
  studios text,
  -- relations: "id;id;id;..."
  relations text,
  -- tags: "id;id;id;..."
  tags text,
  trailer text,

  -- TODO: db - media - anime - add more if necessary
  PRIMARY KEY (id)
);

drop table if exists `zenbu_media`.`manga`;
create table manga(
  id int not null auto_increment,
  title text,
  description mediumtext,
  format set('Manga', 'One Shot'),
  season set('Fall', 'Winter', 'Spring', 'Summer'),
  year int(4),
  genres set('Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Horror', 'Hentai', 'Mahou Shoujo', 'Mecha', 'Music', 'Mystery', 'Psychological', 'Romance', 'Sci-fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller'),
  pub_status set('Releasing', 'Finished', 'Not Yet Released', 'Hiatus', 'Cancelled'),
  origin set('Japan', 'South Korea', 'China', 'Taiwan'),
  source_mat set('Original', 'Manga', 'Light Novel', 'Novel', 'Anime', 'Visual Novel', 'Visual Game', 'Doujinshi', 'Other'),
  chapters int(6),
  volumes int(3),
  characters text,
  staff text,
  studios text,
  -- relations: "id;id;id;..."
  relations text,
  -- tags: "id;id;id;..."
  tags text,

  -- TODO: db - media - manga - add more if necessary
  PRIMARY KEY (id)
);

drop table if exists `zenbu_media`.`lightnovel`;
create table lightnovel(
  id int not null auto_increment,
  title text,
  description mediumtext,
  format set('Light Novel'),
  season set('Fall', 'Winter', 'Spring', 'Summer'),
  year int(4),
  genres set('Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Horror', 'Hentai', 'Mahou Shoujo', 'Mecha', 'Music', 'Mystery', 'Psychological', 'Romance', 'Sci-fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller'),
  pub_status set('Releasing', 'Finished', 'Not Yet Released', 'Hiatus', 'Cancelled'),
  origin set('Japan', 'South Korea', 'China', 'Taiwan'),
  source_mat set('Original', 'Manga', 'Light Novel', 'Novel', 'Anime', 'Visual Novel', 'Visual Game', 'Doujinshi', 'Other'),
  chapters int(6),
  volumes int(3),
  characters text,
  staff text,
  studios text,
  -- relations: "id;id;id;..."
  relations text,
  -- tags: "id;id;id;..."
  tags text,

  -- TODO: db - media - lightnovel - add more if necessary
  PRIMARY KEY (id)
);

drop table if exists `zenbu_media`.`tag`;
create table tag(
  id int not null auto_increment,
  name text,
  description mediumtext,

  -- TODO: db - media - tag - add more if necessary
  PRIMARY KEY (id)
);

drop table if exists `zenbu_media`.`staff`;
create table staff(
  id int not null auto_increment,
  name text,
  description mediumtext,
  -- roles: "mediaid-role;mediaid-role;..."
  roles mediumtext,

  -- TODO: db - media - tag - add more if necessary
  PRIMARY KEY (id)
);

drop table if exists `zenbu_media`.`studio`;
create table studio(
  id int not null auto_increment,
  name text,
  description mediumtext,

  -- TODO: db - media - tag - add more if necessary
  PRIMARY KEY (id)
);
