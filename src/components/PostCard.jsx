import { Clock, ChevronRight, BarChart2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const { image, isNew, tags = [], title, description, date, comments } = post;
  //const navigate = useNavigate();

  // Kart geneline tıklama → içerik sayfası
  const handleCardClick = () => {
    console.log(post.id);
    //navigate(`/blog/${post.id}`); // route'un hazır değilse şimdilik console.log(post.id)
  };

  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    console.log(post.id);
    //navigate(`/blog?tag=${tag}`); // örnek
  };

  const handleCommentsClick = (e) => {
    e.stopPropagation();
    console.log(post.id);
    //navigate(`/blog/${post.id}#comments`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex cursor-pointer flex-col rounded border border-[#ECECEC] bg-white transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="relative">
        <img src={image} alt={title} className="h-[300px] w-full object-cover" />
        {isNew && (
          <span className="absolute left-5 top-5 rounded bg-[#E74040] px-2.5 py-1 text-xs font-bold text-white">
            NEW
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex gap-2 text-sm">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={(e) => handleTagClick(e, tag)}
              className="text-[#737373] transition-colors hover:text-[#23A6F0]"
            >
              {tag}
            </button>
          ))}
        </div>

        <h3 className="text-xl text-[#252B42]">{title}</h3>
        <p className="text-sm text-[#737373]">{description}</p>

        {/* Tarih + yorum */}
        <div className="flex items-center justify-between text-xs">
          {/* Tarih — tıklanmıyor, düz metin */}
          <span className="flex items-center gap-1.5 text-[#737373]">
            <Clock size={16} className="text-[#23A6F0]" />
            {date}
          </span>

          {/* Yorum — gri, hover'da mavi, tıklanabilir */}
          <button
            type="button"
            onClick={handleCommentsClick}
            className="flex items-center gap-1.5 text-[#737373] transition-colors hover:text-[#23A6F0]"
          >
            <BarChart2 size={16} className="text-[#23856D]" />
            {comments} comments
          </button>
        </div>

        {/* Learn More */}
        <span className="flex items-center gap-2 text-sm font-medium text-[#737373]">
          Learn More
          <ChevronRight size={16} className="text-[#23A6F0]" />
        </span>
      </div>
    </div>
  );
}

export default PostCard;