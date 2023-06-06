﻿namespace WebApplication1.repo
{
    public interface IRepositry<T>
    {


        public List<T> getall();
        public List<T> getall(string s); // to make include by s as opject in the dbset 
        public List<T> getall(string s,string s2);
        public List<T> getall(string s, string s2, string s3);
        public List<T> getall(string s, string s2, string s3, string s4);

        public T getbyid(int id);
        public void create(T course);
        public void update(T course);
        public void delete(T course);

    }
}
