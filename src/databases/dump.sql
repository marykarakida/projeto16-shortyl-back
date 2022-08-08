--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: uf4clmpn79r7f2
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO uf4clmpn79r7f2;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: pcbfutfvxpscrp
--

CREATE TABLE public.links (
    id integer NOT NULL,
    "userId" integer,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.links OWNER TO pcbfutfvxpscrp;

--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: pcbfutfvxpscrp
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.links_id_seq OWNER TO pcbfutfvxpscrp;

--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: pcbfutfvxpscrp
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO pcbfutfvxpscrp;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: pcbfutfvxpscrp
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO pcbfutfvxpscrp;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: pcbfutfvxpscrp
--

COPY public.links (id, "userId", "shortUrl", url, "visitCount", "createdAt") FROM stdin;
75	2	em42YJycds-wwxkkx8d0y	https://react-icons.github.io/react-icons/icons?name=fa	0	2022-08-08 16:35:06.853982
74	2	QA6iUX1UdeMe6XIRgkoaW	https://stackoverflow.com/questions/26973570/setting-a-max-character-length-in-css	1	2022-08-08 16:34:05.909042
72	2	usxfPWKLjTKGmMYDBa_xa	https://www.google.com/search?channel=fs&client=ubuntu&q=traducao	3	2022-08-08 12:56:38.346805
73	2	tsSlci-yaK-_1__LOnhoU	https://usefulangle.com/post/351/css-flex-fixed-width-item	2	2022-08-08 14:14:30.975456
37	4	YaXDe0q0z67GzOWIbHk6U	https://flaviocopes.com/how-to-rename-object-destructuring/	12	2022-08-05 20:38:53.181725
79	4	IMxC7KiuBWobDKV0ZiEmM	https://react-icons.github.io/react-icons/icons?name=bs	6	2022-08-08 18:06:40.337102
80	4	EljKsEud-FSvBXwCQBMgK	https://artigo.app/	10	2022-08-08 18:07:36.216106
76	7	89DYKY0QbOSKzhwTqbN22	https://react-icons.github.io/react-icons/icons?name=go	13	2022-08-08 17:46:06.95333
77	7	PMHDp7Dl8wOd6geO2I1Rd	https://react-icons.github.io/react-icons/icons?name=bs	4	2022-08-08 17:48:03.627276
78	7	zTa_knQC28IF-ZnXCWmvl	https://artigo.app/	8	2022-08-08 17:58:06.949377
81	4	RnAbzJF0hW18gNAvA6AtP	https://stackoverflow.com/	8	2022-08-08 18:09:01.471781
84	55	UmanHKGNr2uqmY-y5yiYW	https://wweb.dev/weekly/115/	1	2022-08-08 18:11:30.153456
82	55	pRhBUiBCaK4g3BHXtAQjp	https://artigo.app/	2	2022-08-08 18:10:59.662056
85	55	E1HI4tNUGuCQRxlAH-Mzl	https://react-icons.github.io/react-icons/icons?name=io5	1	2022-08-08 18:15:29.074946
83	55	23tHLjZZbGnZOVdwh-2ob	https://www.youtube.com/	2	2022-08-08 18:11:11.5555
86	14	EwxGHMsLGBjaRLgpTaDYH	https://www.youtube.com/	0	2022-08-08 18:17:31.326139
87	14	jXspIqV-7pbuoDhsvGenI	https://react-icons.github.io/react-icons	0	2022-08-08 18:17:44.412029
88	14	U4Y7czqOQP9YWdTCzO1Bo	https://www.youtube.com/watch?v=zh9-Ey72Ky8	0	2022-08-08 18:23:01.906311
89	14	Eo-jXjVZbu-nnsmFQ82ls	https://www.youtube.com/watch?v=NCR-n7wYWpo	0	2022-08-08 18:23:26.196999
90	14	9jcH1Y3wvtmlDhv3eiz9W	https://www.youtube.com/watch?v=to-V-LcsXUU&t=90s	0	2022-08-08 18:24:14.67451
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: pcbfutfvxpscrp
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Maria	maria@com.br	$2b$10$cYDYPO6E83Gr2NW..s.jy.TKEUHaXJqWJYjbd59MeHw2TRgr69Vru	2022-08-02 14:36:53.885229
2	Joao	joao@com.br	$2b$10$hzEAbFjqakO95FD99tCRj.9ZjXDDUmNy5VB7e3sC2EJuq8A7WAP.u	2022-08-02 17:42:36.130451
4	Mary	mary@com.br	$2b$10$RutXBdhtJ2sO/FFpym3IgOIMPvn/b7XGHvTa4GOQHgXsYwiJjLwSe	2022-08-05 17:46:10.170219
5	Giggs	giggs@com.br	$2b$10$6zYZKIkxq/JC6aFRpnjLv.IoXedBdQMHcyBv3CttOtTKDSb8voyVW	2022-08-05 17:46:22.336726
6	Dan	dan@com.br	$2b$10$LPtcqyZz1aUd1E9cigEOqeYmXd8U3q0H0hcte660UQeQRfBTDj.8G	2022-08-05 17:46:35.052149
7	Darlon	darlon@com.br	$2b$10$kmM1HXTRaCySXCE8RNVdSOg23C1sBCmQ5S1/SmxcEvpKeh63mdtK2	2022-08-05 17:46:45.373035
8	Ayrton	ayrton@com.br	$2b$10$DUJeomlSOhJvoXp0QTp47OEtGH3wPW1rz899fyBgceqAs8/xXqF.S	2022-08-05 17:47:01.64615
9	Lucas	lucas@com.br	$2b$10$o88uB7NtWrDoqrQXKBcPnuR.KlBfCX4ysAZUfM8x0PKLYceDeUJOu	2022-08-05 17:47:33.062007
10	Jhu	jhu@com.br	$2b$10$aLSXNXpOdgxIFYd7NJGhg.ZdlQEFmATYE24Y3Ucr2iZDA2kZb7O2K	2022-08-05 17:48:03.412967
11	Ph	ph@com.br	$2b$10$Dv5MJk186AH/Xue/zcGSr.3lDFsBu6meVZh9Z00GKCuo0hd5tZJ/i	2022-08-05 17:48:27.551369
12	Vitor	vitor@com.br	$2b$10$G2ODmPwurDvq8MPJZS.YEO9PjZehMSK4UQBhLDPhFNwprOAwoe3Sm	2022-08-05 17:50:07.02907
13	Gabs	gabs@com.br	$2b$10$d0J2fXV5bvl2Dy17bAuDRO.lFEq0cLx.jirw2alPQ4XqxNCXQRiZK	2022-08-05 19:18:46.375566
14	Paulo	paulo@com.br	$2b$10$M.dOinNzKRCgFsUAeMTyTegHBcn3ikX/a77nWD1ew0oENkPCEXJTW	2022-08-05 20:32:07.625153
47	Mari	mari@com.br	$2b$10$Fzc5iN2I2xSoxZAAHY7puu3UcC5em.no5H.RIbNJWq.ab0NniRjBS	2022-08-06 23:49:34.207534
48	Juan	juan@com.br	$2b$10$TiD4R5w7v41FSf8DYt5GOOQDZgM1Lx9.iRDlNML3DxReV35jh840m	2022-08-06 23:50:41.280203
49	Karina	karina@email.com	$2b$10$Tk0WgLoQCjNZBwgCKNioPe73u4c8.m4qofQXwIUNgKPI7pOdK5p..	2022-08-07 11:43:43.654957
50	Nina	nina@com.br	$2b$10$bjHy7/KHPeXBNw6F8rRT9e7v/U2e4KXmMIy3EkBBgYPlE35i7cR8m	2022-08-07 11:44:33.194458
51	Miranda	miranda@com.br	$2b$10$GEL.y1Ix7m7If5SYjmH46.4hxugqTlojxHNRl9Wz/.aHOElR685fy	2022-08-07 12:25:27.279482
52	Jota	jota@gmail.com	$2b$10$vs6YlWwCyzzgyCSKUVmyfeEXu9LvBY7LIMYxgcnRXCvu4shEQ4/R6	2022-08-07 12:28:22.250869
53	Leandro	leandro@com.br	$2b$10$ZlmheEcy37R//y0mky3HIugt21Two5ZCHFdIR/AYwHuUn20PTaxZG	2022-08-08 16:36:52.834332
54	Sandra	sandra@com.br	$2b$10$ZSGXf1r4NMabdl3XoUuR2OiC3AXaWIsV6jBr12AFpPgWGQZjZc6sm	2022-08-08 16:38:00.857275
55	Jota	jota@com.br	$2b$10$JD3ubkJa9NDKHRQmfsuHYOPO/c5XwKnMI2SNEt5F0tOzKgIG87XNe	2022-08-08 18:09:56.804876
\.


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pcbfutfvxpscrp
--

SELECT pg_catalog.setval('public.links_id_seq', 90, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pcbfutfvxpscrp
--

SELECT pg_catalog.setval('public.users_id_seq', 55, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: links links_userId_url_key; Type: CONSTRAINT; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_userId_url_key" UNIQUE ("userId", url);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pcbfutfvxpscrp
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: uf4clmpn79r7f2
--

GRANT USAGE ON SCHEMA heroku_ext TO pcbfutfvxpscrp;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pcbfutfvxpscrp
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO pcbfutfvxpscrp;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO pcbfutfvxpscrp;


--
-- PostgreSQL database dump complete
--

