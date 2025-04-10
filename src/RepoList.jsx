
import { useEffect, useState } from 'react'

export default function RepoList({ username }) {
  const [repos, setRepos] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('updated')
  const [page, setPage] = useState(1)
  const perPage = 6

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data)
        }
      })
  }, [username])

  useEffect(() => {
    let result = [...repos]

    if (search.trim()) {
      result = result.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (sort === 'stars') {
      result.sort((a, b) => b.stargazers_count - a.stargazers_count)
    } else {
      result.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    }

    setFiltered(result)
    setPage(1)
  }, [repos, search, sort])

  const paginated = filtered.slice((page - 1) * perPage, page * perPage)
  const totalPages = Math.ceil(filtered.length / perPage)

  return (
    <section className='mt-10'>
      <h2 className='text-2xl font-semibold mb-4'>📂 我的仓库</h2>

      <div className='flex flex-wrap gap-4 items-center mb-4'>
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='🔍 搜索仓库'
          className='px-3 py-2 border rounded w-full md:w-64 text-black'
        />
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className='px-3 py-2 border rounded text-black'
        >
          <option value='updated'>🕓 最近更新</option>
          <option value='stars'>⭐ Star 数量</option>
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {paginated.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target='_blank'
            className='p-4 border rounded-xl hover:shadow-xl transition'
          >
            <h3 className='font-bold text-lg'>{repo.name}</h3>
            <p className='text-sm mt-1'>{repo.description || '无描述'}</p>
            <div className='text-xs mt-2 text-gray-400'>
              ⭐ {repo.stargazers_count} &nbsp;•&nbsp; {repo.language || 'Unknown'}
            </div>
          </a>
        ))}
      </div>

      <div className='mt-4 flex gap-2 justify-center flex-wrap'>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? 'bg-gray-700 text-white' : 'bg-white text-black'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  )
}
