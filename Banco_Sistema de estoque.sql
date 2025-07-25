PGDMP                      }         
   estoque_db    17.4    17.4     Z           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            [           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            \           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            ]           1262    24576 
   estoque_db    DATABASE     p   CREATE DATABASE estoque_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE estoque_db;
                     admin    false            R          0    36664 	   Categoria 
   TABLE DATA           /   COPY public."Categoria" (id, nome) FROM stdin;
    public               admin    false    220   �       W          0    36701    LocalArmazenamento 
   TABLE DATA           O   COPY public."LocalArmazenamento" (id, nome, endereco, responsavel) FROM stdin;
    public               admin    false    225          S          0    36672    MovimentacaoEstoque 
   TABLE DATA           �   COPY public."MovimentacaoEstoque" (id, "tipoMovimentacao", quantidade, data, "idProduto", "idUsuario", "idLocalArmazenamento", "idPessoa", "idLocalArmazenamentoDestino") FROM stdin;
    public               admin    false    221   �       U          0    36687    Pessoa 
   TABLE DATA           :   COPY public."Pessoa" (id, nome, "tipoPessoa") FROM stdin;
    public               admin    false    223   �       V          0    36694    PessoaMovimentacao 
   TABLE DATA           P   COPY public."PessoaMovimentacao" (id, "idPessoa", "idMovimentacao") FROM stdin;
    public               admin    false    224   �       P          0    36655    Produto 
   TABLE DATA           �   COPY public."Produto" (id, nome, "dataCadastro", "precoVenda", "precoCompra", descricao, "idCategoria", quantidade) FROM stdin;
    public               admin    false    218   �       T          0    36680    Usuario 
   TABLE DATA           P   COPY public."Usuario" (id, email, "senhaHash", "tipoUsuario", nome) FROM stdin;
    public               admin    false    222   �       O          0    36622    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public               admin    false    217          `           0    0    Categoria_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Categoria_id_seq"', 38, true);
          public               admin    false    219            R   7   x�3�tJM�LI,�2�t���M�+�/�����-H�J�2��IM�L
��qqq d��      W   g   x�M�;�0 �9>p�?u�E�X�Ĩ�P$�޿#��iw�mWC��T����� e�3?��똸�������9�J��ώ-���*��!q�t]� ���       S   -  x�Ց;ND1E�U�����n�D�
��Ɖ��/�P�PP!�ʒ-�sd.��i�^C�Kͻ�ݩ�̲,�Ώ���5eܕ
T(�!��#�Ű��CW�n�k9����'��,�lN�u���rZM�/i�5��e6�s_h�gU���e:y2ՑC��u,h����������e2:hx�S��t(s�qY�������G=�A�k����;A}8�X�oxW��!ak������nf;B+pL�U��pk:"k|��f�p�ѸX�������RD<TT��;�_no����j�/�q|��ئ      U   �   x�M��j1 k�_���Z��w6���iV/R$q���sc��0�\���(��Hf��y�~����e^>g���C̕ xE�!��R�xpM�r���sI!q��t�k� � S�МDi��7��ٜ�m���n6r�Ak.ϵ�:� j���&d�S��|��``5�      V      x������ � �      P   �   x�e�1ND1Dk�\�Q�8N�;$jZ'ߑ�f�jE�u8
#5k��b��F��R���(NM�a��Gf�^����sN\0)r}�tp:�c�� �Yδx7���eh�T�egϦ��o���?V҃kTQ���Ҿ��͚Q�l(s�-&�]KnV�9G�׻]>���E"m���b�-�B/�Bk���&�I8�NizO���x�K�G��� �M{�!�?��J�      T   �   x�e̽�0 �}�#�ϵ�4A�˵\#���'���Y4��(�x\MWS�bb��?ޭl����o�X�1DR��4u�8��hCq*YO���x��H"�Ѩ�]����W5�~�X�]��� �*G      O   �  x�uU[n���v�"��G�X�E�
0X�� ��'���ߣN0��}aGI$Q:�yPy�VfږO��mk���fj�{���Ip�M)�i�T�,>Z�Rj堬�#��6�r*%f5j9ꘒc����F��]yO~VN*����J���\��������Fܝ��o���x�6+3�3mu��4�:�Ө=�Ԧ�)J����@��^
ui�<�Z��R+I�K7�$!�_LyW;�r�D��)e�K����������ۼ�5.�����^����4/#.������x����<Ɨn���Z�{��grμ��%LIڒ�6\���I���R���X��'K������Y�#���q��;��Ey ٵ�Dg5˷<q!S������TY�9��x���-5[���xm�Q�OS�� 3"+� ����cfV%���If�mEY�kNR���_BDޮ�H��'r���4}E~[�5{}.�(�Ѧ��1���ʛ�nd[ټ�&$P�X�[�`�U2|���{,��cԶښ�p����?A�1>�������L���~��}����5k�V;L=�ŷڲl:,Qt���4���J���:ˬ�Ya�jF^fZI�Po�-�)&�k�-
�=�N�\�R��0����|�c��y������+�{�����:�������ϧ�v�{�y9���0���m�6`�[��ra��2�sb8CJs�0vh�zD�F��8�ᩮ<��NmBJ�3�Ey��~Ǎ�N����s���@�d"��執x~}1`~4to���;�|���#���(k�mu�����p@F!T���OAA�F�Q4I�2@5Y1(
���F��$��X�V�#��}��\��;�Y�VI7���,������}Z��>��`p���[k��d��TK��U2�"Жy.�^gG�v�.b�i(�����i}���;���ِov+7�J�>��I�^?B�=E=�9�L̼0��c"է�r����Y���%��ɘ�]��\�
⍗��5=\�T�'�_P��@��ÁJ�_*�>�;���-����������Fl�zK�j[ü�Xb�s;Y6lCȂ�0�4Mg:����G
X@6�i ��pσ�b;�Rr�놏��'>kD����A������!G��$�g�S7Y��_+7f��=M�����lF*	�O�d#$���a(��4�+�U�aؿ w����F�����>���d4;     