const database = require("../services/database");

const Filme = require("../models/filme");
const Temporada = require("../models/temporada");
const Episodio = require("../models/episodio");

const addTemporadasEpisodios = async () => {
  try {
    const series = await Filme.find({ tipo: "Series" }).select("_id");

    for (let serie of series) {
      console.log(`FILME ${serie}-----`);
      const numTemporadas = Math.floor(Math.random() * 5) + 1;
      for (let i = 1; i <= numTemporadas; i++) {
        console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
        const temporada = await new Temporada({
          filme_id: serie,
          titulo: `Temporada ${i}`,
        }).save();

        const numEpisodios = Math.floor(Math.random() * 5) + 1;
        for (let x = 1; x <= numEpisodios; x++) {
          console.log(`Inserindo episódios ${x} de ${numEpisodios}`);
          await new Episodio({
            temporada_id: temporada._id,
            titulo: `Episódio ${x}`,
            numero: x,
            descricao:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            capa: "https://picsum.photos/300/200",
          }).save();
        }
      }
    }

    console.log("FINAL DO SCRIPT");
  } catch (err) {
    console.log(err.message);
  }
};

addTemporadasEpisodios();
