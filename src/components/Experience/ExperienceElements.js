import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  .SectionTitle {
    margin-bottom: 50px;
    text-align: center;
    font-size: 2.5rem;
    background: linear-gradient(90deg, #00cf5d, #00cf5d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const ExperienceItem = styled.div`
  margin-bottom: 40px;
  padding: 25px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 8px 32px 0 rgba(0, 207, 93, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(0, 207, 93, 0.1);
  }
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00cf5d;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #00cf5d;
    border-radius: 50%;
    margin-right: 12px;
  }
`;

export const ExperienceCompany = styled.div`
  font-size: 1.4rem;
  background: linear-gradient(90deg, #666666, #888888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:after {
    content: '•';
    font-size: 1.2rem;
    color: #00cf5d;
    margin: 0 5px;
  }
`;

export const ExperienceDate = styled.div`
  font-size: 1rem;
  color: #888888;
  font-weight: 500;
  margin-bottom: 20px;
  font-style: italic;
`;

export const ExperienceDescription = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 15px;
  
  li {
    color: #808080;
    margin-bottom: 12px;
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 500;
    padding-left: 24px;
    position: relative;
    
    &:before {
      content: '→';
      position: absolute;
      left: 0;
      color: #00cf5d;
      font-weight: bold;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
