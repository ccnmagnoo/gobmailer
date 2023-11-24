// cspell: disable
type Institution =
  | 'Presidente de La República'
  | 'Ministra del Interior y Seguridad Pública'
  | 'Subsecretario del Interior'
  | 'Subsecretario de Desarrollo Regional y Administrativo'
  | 'Subsecretario de Prevención del Delito'
  | 'Ministra de Relaciones Exteriores'
  | 'Subsecretaria de Relaciones Exteriores'
  | 'Subsecretario de Relaciones Económicas Internacionales'
  | 'Ministra de Defensa'
  | 'Subsecretario de Defensa'
  | 'Subsecretario Para Las Fuerzas de Armadas'
  | 'Ministro de Hacienda'
  | 'Subsecretaria de Hacienda'
  | 'Ministro Secretaria General de La Presidencia'
  | 'Subsecretaria General de La Presidencia'
  | 'Ministra Secretario General de Gobierno'
  | 'Subsecretaria General de Gobierno'
  | 'Ministro de Economía, Fomento y Turismo'
  | 'Subsecretaria de Economía'
  | 'Subsecretario de Pesca y Acuicultura'
  | 'Subsecretario de Turismo'
  | 'Ministra de Desarrollo Social y Familia'
  | 'Subsecretario Evaluación Social'
  | 'Subsecretaria de Servicios Sociales'
  | 'Subsecretaria de La Niñez'
  | 'Ministro de Educación'
  | 'Subsecretario de Educación'
  | 'Subsecretaría de Educación Superior'
  | 'Subsecretaria de Educación Parvularia'
  | 'Ministro de Justicia y Derechos Humanos'
  | 'Subsecretario de Justicia'
  | 'Subsecretaria de Derechos Humanos'
  | 'Ministro del Trabajo y Previsión Social'
  | 'Subsecretario del Trabajo'
  | 'Subsecretario de Previsión Social'
  | 'Ministra de Obras Públicas'
  | 'Subsecretario de Obras Publicas'
  | 'Ministro de Transporte y Telecomunicaciones'
  | 'Subsecretario de Telecomunicaciones'
  | 'Subsecretario de Transportes'
  | 'Ministra de Salud'
  | 'Subsecretaria de Salud Pública'
  | 'Subsecretario Redes Asistenciales'
  | 'Ministro de La Vivienda y Urbanismo'
  | 'Subsecretaria de La Vivienda y Urbanismo'
  | 'Ministro de Bienes Nacionales'
  | 'Subsecretario de Bienes Nacionales'
  | 'Ministro de Agricultura'
  | 'Subsecretario de Agricultura'
  | 'Ministro Minería'
  | 'Subsecretaria de Minería'
  | 'Ministro de Energía'
  | 'Subsecretaría de Energía'
  | 'Ministra del Medio Ambiente'
  | 'Subsecretario de Medio Ambiente'
  | 'Ministro del Deporte'
  | 'Subsecretaría del Deporte'
  | 'Ministra de La Mujer y Equidad de Género'
  | 'Subsecretaria Ministerio de La Mujer y La Equidad de Género'
  | 'Ministra de Las Culturas, Las Artes y El Patrimonio'
  | 'Subsecretaria de Las Culturas y de Las Artes'
  | 'Subsecretaria del Patrimonio Cultural'
  | 'Ministra de Ciencia, Tecnología, Conociendo E Innovación'
  | 'Subsecretaria de Ciencia'
  | 'Gobernación Regional de Valparaíso'
  | 'Delegación Regional Presidencial de Valparaíso'
  | 'Delegación Provincial de San Antonio'
  | 'Delegación Provincial de Quillota'
  | 'Delegación Provincial de San Felipe'
  | 'Delegación Provincial de Los Andes'
  | 'Delegación Provincial de Petorca'
  | 'Delegación Provincial Marga Marga'
  | 'Delegación Provincial de Isla de Pascua'
  | 'Seremi Agricultura'
  | 'Seremi Bienes Nacionales'
  | 'Seremi de Ciencia , Tecnología, Conocimiento E Innovación'
  | 'Seremi Deporte'
  | 'Seremi Desarrollo Social y Familia'
  | 'Seremi Economía Subrog. y Seremi Ciencia'
  | 'Seremi Educación'
  | 'Seremi Energía'
  | 'Seremi de Gobierno'
  | 'Seremi de Justicia'
  | 'Seremi Medio Ambiente'
  | 'Seremi Minería'
  | 'Seremi Obras Públicas'
  | 'Seremi Salud'
  | 'Seremi Trabajo'
  | 'Seremi Transporte'
  | 'Seremi de Vivienda'
  | 'Seremia de La Mujer y La Equidad de Género'
  | 'Seremi de Las Culturas, Las Artes y El Patrimonio'
  | 'Aduana'
  | 'Conaf'
  | 'Contraloría'
  | 'Dicrep'
  | 'Corfo'
  | 'Corporación Asistencia Judicial'
  | 'Defensoría Regional'
  | 'Dirección del Trabajo'
  | 'Efe Valparaíso'
  | 'Fiscalía Regional'
  | 'Fonasa'
  | 'Fosis'
  | 'Gendarmería'
  | 'Instituto Nacional del Deporte'
  | 'Instituto Nacional de Estadísticas'
  | 'Inia'
  | 'Ips'
  | 'Instituto Seguridad Laboral'
  | 'Indap'
  | 'Injuv'
  | 'Fundación Integra'
  | 'Junaeb'
  | 'Junji'
  | 'Prochile'
  | 'Prodemu'
  | 'Registro Civil E Identif. Direct. Reg. (S)'
  | 'Servicio Agrícola Ganadero Sag'
  | 'Superintendencia de Electricidad y Combustibles Sec'
  | 'Servicio de Impuestos Internos Sii'
  | 'Sectra'
  | 'Senadis'
  | 'Senama'
  | 'Sename'
  | 'Senapred'
  | 'Sence'
  | 'Senda'
  | 'Sercotec'
  | 'Sernac'
  | 'Sernageomin'
  | 'Sernatur'
  | 'Serv. Evaluac. Ambiental - S.E.A'
  | 'Serv. Nac. Pesca y Acuicultura'
  | 'Servel'
  | 'Servicio Médico Legal'
  | 'Servicio Mejor Niñez'
  | 'Servicio Nacional de La Mujer y La Equidad de Género'
  | 'Serviu'
  | 'Servicio de Salud Aconcagua'
  | 'Servicio de Salud Valparaíso San Antonio'
  | 'Servicio de Salud Viña del Mar Quillota'
  | 'Subdere'
  | 'Subsecretaria de Pesca y Acuicultura'
  | 'Superint. Serv. Sanit. - Siss'
  | 'Superintendencia del Medio Ambiente'
  | 'Tesorería Regional'
  | 'Dirección de Aguas Mop'
  | 'Dirección de Arquitectura Mop'
  | 'Dirección de Obras Hidráulicas'
  | 'Obras Portuarias Mop'
  | 'Vialidad Mop'
  | 'I.M. Valparaíso'
  | 'I.M. Viña del Mar'
  | 'I.M. Quintero'
  | 'I.M. Puchuncaví'
  | 'I.M. Casablanca'
  | 'I.M. Concón'
  | 'I.M. Juán Fernández'
  | 'I.M. San Antonio'
  | 'I.M. Santo Domingo'
  | 'I.M. Cartagena'
  | 'I.M. El Tabo'
  | 'I.M. El Quisco'
  | 'I.M. Algarrobo'
  | 'I.M. Quillota'
  | 'I.M. La Cruz'
  | 'I.M. La Calera'
  | 'I.M. Nogales'
  | 'I.M. Hijuelas'
  | 'I.M. San Felipe'
  | 'I.M. Panquehue'
  | 'I.M. Llay Llay'
  | 'I.M. Catemu'
  | 'I.M. Putaendo'
  | 'I.M. Santa María'
  | 'I.M. de Los Andes'
  | 'I.M. Calle Larga'
  | 'I.M. Rinconada'
  | 'I.M. San Esteban'
  | 'I.M. La Ligua'
  | 'I.M. Zapallar'
  | 'I.M. Papudo'
  | 'I.M. Petorca'
  | 'I.M. Cabildo'
  | 'I.M. Quilpué'
  | 'I.M. Villa Alemana'
  | 'I.M. Limache'
  | 'I.M. Olmué'
  | 'I.M. Rapa Nui'
  | 'Concejo Regional de Valparaíso'
  | 'Circunscripción 6 de Valparaíso'
  | 'Distrito 6 de Valparaíso'
  | 'Distrito 7 de Valparaíso'
  | 'Armada'
  | 'Directemar'
  | 'Obispado de Valparaíso'
  | 'Ejercito de Chile'
  | 'Fuera Aérea de Chile'
  | 'Carabineros de Chile'
  | 'Policía de Investigaciones'
  | 'Bomberos de Chile'
  | 'Defensa Civil'
  | 'Cruz Roja';

export default Institution;
