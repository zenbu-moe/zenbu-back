# Media

## anime, manga & ln

|id|title|title_romaji|title_native|studio|producers|source_mat|status_media|episodes|ep_dur|type|tags|genres|year_media|season|description|start_date|end_date|cover_img|banner_img|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|int(15)|text(200)|text(200)|text(200)|text(100)|text(10000)|text(50)|text(50)|int(5)|int(5)|set("TV","TV Short","Movie","OVA","ONA","Special")|text(2000)|set("Action","Adventure","Comedy","Drama","Ecchi","Fantasy","Horror","Hentai","Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi","Slice of Life","Sports","Supernatural","Thriller")|int(4)|set("Spring","Summer","Fall","Winter")|mediumtext|date|date|text(300)|text(300)|

```sql
create table anime(
	id int(15),
    title text(1000),
    title_romaji text(1000),
    title_native text(1000),
    studio text(500),
    producers text(10000),
    source_mat text(50),
    status_media text(50),
    episodes int(5),
    ep_dur int(5),
    ongoing boolean,
    type set("TV","TV Short","Movie","OVA","ONA","Special"),
    tags text(2000),
    genres set("Action","Adventure","Comedy","Drama","Ecchi","Fantasy","Horror","Hentai","Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi","Slice of Life","Sports","Supernatural","Thriller"),
    year_media int(4),
   	season set("Spring","Summer","Fall","Winter"),
    description mediumtext,
    start_date date,
    end_date date,
    cover_img text(300),
    banner_img text(300),
    characters mediumtext,
    staff mediumtext,
    relations mediumtext,
    country set("Japan", "South Korea", "China")
);

create table manga(
	id int(15),
    title text(1000),
    title_romaji text(1000),
    title_native text(1000),
    author text(500),
    source_mat text(50),
    status_media text(50),
    chapters int(5),
    ongoing boolean,
    type set("Manga","One Shot", "Manhua", "Manhwa"),
    tags text(2000),
    genres set("Action","Adventure","Comedy","Drama","Ecchi","Fantasy","Horror","Hentai","Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi","Slice of Life","Sports","Supernatural","Thriller"),
    description mediumtext,
    start_date date,
    end_date date,
    cover_img text(300),
    banner_img text(300),
    characters mediumtext,
    staff mediumtext,
    relations mediumtext,
    country set("Japan", "South Korea", "China")
);
```

- tags:
    - `tag_id-vote_num;tag_id-vote_num;[...]`
- characters, staff & relations
    - `id1;id2;id3;[...]`

## tags

|id|name|desc|
|---|---|---|
|int(10)|text(100)|mediumtext|

## bruh