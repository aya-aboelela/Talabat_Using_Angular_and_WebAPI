﻿namespace WebApplication1.DTO
{
    public class ResturantRegistrationDTO
    {
        public string UserName { get; set; }
        public string? Password { get; set; }
        public string Email { get; set; }
        public IFormFile? ImageNameFile { get; set; }
        public string? ImageName { get; set; }
        public float MinOrderAmmount { get; set; }
        public string WorkingHours { get; set; }
    }
}
