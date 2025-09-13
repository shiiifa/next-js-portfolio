import {
  Column,
  Heading,
  Meta,
  Schema,
  Text,
  Card,
  Row,
  Icon,
  Badge,
  Button,
} from "@once-ui-system/core";
import { news, person, baseURL } from "@/resources";
import { NewsItem } from "@/types";

export async function generateMetadata() {
  return Meta.generate({
    title: news.title,
    description: news.description,
    baseURL: baseURL,
    path: news.path,
  });
}

const getTypeIcon = (type: NewsItem['type']): string => {
  switch (type) {
    case 'award':
      return 'trophy';
    case 'role':
      return 'briefcase';
    case 'conference':
      return 'presentation';
    case 'achievement':
      return 'star';
    case 'education':
      return 'academic-cap';
    default:
      return 'newspaper';
  }
};

const getTypeColor = (type: NewsItem['type']) => {
  switch (type) {
    case 'award':
      return 'brand-strong' as const;
    case 'role':
      return 'brand-medium' as const;
    case 'conference':
      return 'brand-weak' as const;
    case 'achievement':
      return 'brand-medium' as const;
    case 'education':
      return 'neutral-strong' as const;
    default:
      return 'neutral-strong' as const;
  }
};

export default function News() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={news.title}
        description={news.description}
        path={news.path}
        image={`/api/og/generate?title=${encodeURIComponent(news.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/news`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {news.title}
      </Heading>
      <Column fillWidth flex={1} gap="24">
        {news.items.map((item) => (
          <Card
            key={item.id}
            fillWidth
            padding="20"
            background="neutral-alpha-weak"
            border="neutral-alpha-weak"
            radius="l"
          >
            <Row gap="16" align="start">
              <Icon 
                name={getTypeIcon(item.type)} 
                size="m" 
                onBackground={getTypeColor(item.type)}
              />
              <Column flex={1} gap="12">
                <Row gap="12" align="center" wrap>
                  <Badge
                    background="neutral-alpha-weak"
                    onBackground={getTypeColor(item.type)}
                    textVariant="label-default-s"
                    paddingX="12"
                    paddingY="4"
                  >
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </Badge>
                  <Text variant="label-default-s" onBackground="neutral-medium">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </Text>
                </Row>
                <Heading variant="heading-strong-s" wrap="balance">
                  {item.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                  {item.description}
                </Text>
                {item.link && (
                  <Column marginTop="8">
                    <Button
                      variant="secondary"
                      size="s"
                      href={item.link}
                      arrowIcon
                    >
                      Learn more
                    </Button>
                  </Column>
                )}
              </Column>
            </Row>
          </Card>
        ))}
      </Column>
    </Column>
  );
}
