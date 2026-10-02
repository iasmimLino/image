'use client'
import { Template, ImageCard } from '../components';
import { useImageService } from '../resource/service';
import { useState } from 'react';
import { Image } from '../resource/image';

export default function Galeria() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('')
  const [extension, setExtension] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState('');

  async function searchImages() {
    setIsLoading(true);
    setSearchError('');

    try {
      const result = await useService.buscar(query, extension);
      setImages(result);
      setHasSearched(true);
      console.table(result);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
      setSearchError('Não foi possível buscar as imagens. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }
  /*renderizando a imagem na tela*/
  function renderImageCard(image: Image) {
    return (
      <ImageCard key={image.url}
        imageName={image.name}
        imageUrl={image.url}
        extension={image.extension}
        imageSize={`${image.size}`}
        uploadDate={image.uploadDate} />
    )
  }

  function renderImageCards() {
    //return images.map((image) => renderImageCard(image));
    return images.map(renderImageCard);
  }


  return (
    <Template>
      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <input type="text"
            onChange={event => setQuery(event.target.value)}
            className="border px-4 py-2 rounded-lg text-white-900" placeholder="Buscar imagens..." />
          <select onChange={event => setExtension(event.target.value)}
            className="border px-4 py-2 rounded-lg text-white-900">
            <option value="">All formats</option>
            <option value="PNG">PNG</option>
            <option value="JPG">JPG</option>
            <option value="JPEG">JPEG</option>
            <option value="GIF">GIF</option>
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 text-white font-bold py-2 px-4 rounded"
            onClick={searchImages}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? 'Buscando...' : 'Search'}
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Add New </button>
        </div>
      </section>
      {isLoading && (
        <div className="flex items-center justify-center gap-3 py-4 text-blue-700" role="status" aria-live="polite">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" aria-hidden="true" />
          <span>Buscando imagens...</span>
        </div>
      )}
      {searchError && (
        <p className="py-4 text-center text-red-600" role="alert">{searchError}</p>
      )}
      <section className="grid grid-cols-3 gap-4 p-4">
        {
          renderImageCards()
        }
      </section>
      {hasSearched && !isLoading && !searchError && images.length === 0 && (
        <p className="py-4 text-center text-gray-600" role="status">Nenhuma imagem encontrada.</p>
      )}
    </Template>
  );
}
