'use client';
import { useState } from 'react';

export default function PasteForm({ onSubmit }:any) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState('PUBLIC');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit({ title, content, visibility });
    setTitle('');
    setContent('');
    setVisibility('PUBLIC');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="textarea textarea-bordered w-full max-w-xs"
          id="content"
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-slate-100">Visibility</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="public"
            name="visibility"
            value="PUBLIC"
            className="radio radio-success"
            checked={visibility === 'PUBLIC'}
            onChange={() => setVisibility('PUBLIC')}
          />
          <label htmlFor="public" className="ml-2">Public</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="private"
            name="visibility"
            value="PRIVATE"
            className="radio radio-success"
            checked={visibility === 'PRIVATE'}
            onChange={() => setVisibility('PRIVATE')}
          />
          <label htmlFor="private" className="ml-2">Private</label>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Paste
        </button>
      </div>
    </form>
  );
}
