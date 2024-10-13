class ClimaInfoEntity extends Equatable {
    const ClimaInfoEntity(
      this.clima // Object clima
      this.main // Datos principales, condiciones meteorologicas
      this.viento
      this.visibilidad
      this.nubosisdad
      this.salidaPuestaSol
      this.timezone
      this.name
      this.climaTemp
    )

    final List<ClimaDescripcion> ? clima;
    final MainClima ? main;
    final String ? Visibilidad;
    final vientoClima? viento;
    final nubosidadClima ? nubosidad;
    final salidaPuestaSol Clima ? salidaPuestaSol;
    final int? timezone;
    final int? id;    
    final string? name;
    final temp? temp;
}

/**
 * Obtiene los datos de las condiciones meteorologicas
 * viento,
 * salida y puesta del sol,
 * temperatura,
 * id,
 * 
 */